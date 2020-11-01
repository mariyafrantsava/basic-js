const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

    let result = '';
    str = str + '';

    let addition = '';
    if (options.addition !== undefined) {
        addition = options.addition + '';
    }

    let separator = '+';
    if (options.separator !== undefined) {
        separator = options.separator;
    }

    let additionSeparator = '|';
    if (options.additionSeparator !== undefined) {
        additionSeparator = options.additionSeparator;
    }

    if (options.repeatTimes !== undefined) {
        for (let i = 0; i < options.repeatTimes; i++) {
            result += str;
            if (options.additionRepeatTimes !== undefined) {
                for (let i = 0; i < options.additionRepeatTimes; i++) {
                    result += addition;
                    if (i !== options.additionRepeatTimes - 1) {
                        result += additionSeparator;
                    }

                }
            }

            if (i !== options.repeatTimes - 1) {
                result += separator;
            }

        }
    } else {
        return str + addition;
    }


    return result;
};