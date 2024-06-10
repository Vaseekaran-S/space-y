const momentTimezone = require("moment-timezone")

const getFullDateTime = (time, userTimeZone) => {
    return momentTimezone(time).tz(userTimeZone).format('YYYY-MM-DD HH:mm:ss')
}

const getMonthYear = (time, userTimeZone) => {
    return momentTimezone(time).tz(userTimeZone).format('MMM YYYY')
}

module.exports = {
    getFullDateTime,
    getMonthYear
}