import { animateScroll } from "react-scroll"

const scrollToBottom = (id) => {
    animateScroll.scrollToBottom({
        containerId: id,
        duration: 0
    })
}

const scrollToBottomSmooth = (id) => {
    animateScroll.scrollToBottom({
        containerId: id,
        duration: 250
    })
}

export {
    scrollToBottom,
    scrollToBottomSmooth
}