import propTypes from 'prop-types'
import formatDate from '../helpers/formatDate.js'

const OutgoingMessage = ({ message }) => {
    const { content } = message
    const customDate = formatDate(message.createdAt)
    return (
        <div className="outgoing_msg">
            <div className="sent_msg">
                <p>{content}</p>
                <span className="time_date">{customDate}</span>
            </div>
        </div>
    )
}

OutgoingMessage.propTypes = {
    message: propTypes.object
}

export default OutgoingMessage