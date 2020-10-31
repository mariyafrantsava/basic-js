const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    let str = '';
    if (members !== null && Array.isArray(members)) {
        for (let i = 0; i < members.length; i++) {
            if (typeof members[i] === 'string') {
                str += members[i].trim().substring(0, 1).toUpperCase();
            }
        }
        return str.split('').sort().join('');
    } else {
        return false;
    }
};