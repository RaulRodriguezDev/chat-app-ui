import { types } from "../../types/types"

const chatReducer = (state, action) => {
    switch (action.type){
        case types.usersLoaded:
            return{
                ...state,
                users: [...action.payload]
            }
        
        case types.activateChat:
            if(state.activeChat === action.payload) return state
            
            return {
                ...state,
                activeChat: action.payload,
                messages: []
            }

        case types.newMessage:
            console.log(action.payload)
            if(state.activeChat === action.payload.from || state.activeChat === action.payload.to){
                return{
                    ...state,
                    messages: [...state.messages, action.payload]
                }
            }
            return state

        case types.loadChat:
            return {
                ...state,
                messages: [...action.payload]
            }
            
        case types.closeSession:
            return {
                uid: '',
                activeChat: null,
                users: [],
                messages: []
            }
            
        default:
            return state
    }
}

export { chatReducer }