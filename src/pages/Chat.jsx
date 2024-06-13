import MessageBodyContainer from "../components/MessageBodyContainer"
import MessagesContainer from "../components/MessagesContainer"
import SidebarContent from "../components/SidebarContent"
import SidebarHeader from "../components/SidebarHeader"

const Chat = () => {
    return (
        <div className="messaging">
            <div className="inbox_msg">
                <aside className="inbox_people">
                    <SidebarHeader/>
                    <SidebarContent/>                    
                        <div className="extra_space"></div>
                </aside>
                <main className="mesgs">
                    <MessagesContainer/>
                    <MessageBodyContainer/>
                </main>
            </div>
        </div>
    )
}

export default Chat