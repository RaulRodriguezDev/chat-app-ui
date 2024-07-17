import propTypes from 'prop-types'
import formatDate from '../helpers/formatDate'

const IncomingMessage = ({ message }) => {
    const { content } = message
    const customDate = formatDate(message.createdAt)
    return (
        <div className="incoming_msg">
            <div className="incoming_msg_img">
                <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
            </div>
            <div className="received_msg">
                <div className="received_withd_msg">
                    <p>{content}</p>
                    <span className="time_date">{customDate}</span>
                </div>
            </div>
        </div>
    )
}

IncomingMessage.propTypes = {
    message: propTypes.object
}
export default IncomingMessage