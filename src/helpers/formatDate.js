import moment from 'moment'

const formatDate = (date) => {
    const customDate = new moment(date)
    return customDate.format('h:mm A | MMMM D')
}

export default formatDate