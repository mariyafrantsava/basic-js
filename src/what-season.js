const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

    if (date !== undefined && Object.keys(date).length > 0) {
        throw new ReadError('THROWN');
        // return 'THROWN';
    }

    if (date !== null && date !== undefined) {
        if (date.getMonth() >= 0 && date.getMonth() <= 1 || date.getMonth() === 11) {
            return 'winter';
        }
        if (date.getMonth() >= 2 && date.getMonth() <= 4) {
            return 'spring';
        }
        if (date.getMonth() >= 5 && date.getMonth() <= 7) {
            return 'summer';
        }
        if (date.getMonth() >= 8 && date.getMonth() <= 10) {
            return 'autumn';
        }
    } else {
        return 'Unable to determine the time of year!';
    }

};