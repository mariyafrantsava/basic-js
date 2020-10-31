const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const k = (Math.log(2)) / HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
    if (typeof sampleActivity == 'string' && sampleActivity !== null && typeof Number(sampleActivity) !== 'number' && sampleActivity > 0) {
        let n = Math.log(15 / sampleActivity);
        let t = Math.ceil(n / k);
        return t;
    } else {
        return false;
    }
};