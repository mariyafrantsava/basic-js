const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    let clearedArr = [];
    let indexClearedArr = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
        if (!isNaN(arr[i]) && arr[i] !== null || arr[i] === '--discard-next' || arr[i] === '--discard-prev' || arr[i] === '--double-next' ||
            arr[i] === '--double-prev' || typeof arr[i] !== 'boolean' || Object.keys(arr[i]).length === 0 || !Array.isArray(arr[i]) || arr[i] % 1 === 0) {
            clearedArr[indexClearedArr] = arr[i];
            indexClearedArr++;
        }
    }
    for (let i = 0; i <= clearedArr.length - 1; i++) {
        switch (clearedArr[i]) {
            case '--discard-next':
                clearedArr[i] = null;
                if (i !== clearedArr.length - 1) {
                    clearedArr[i + 1] = null;
                } else {
                    return delNull(clearedArr);
                }
                break;
            case '--discard-prev':
                clearedArr[i] = null;
                if (i !== 0) {
                    clearedArr[i - 1] = null;
                }
                break;
            case '--double-next':
                clearedArr[i] = null;
                if (i !== clearedArr.length - 1) {
                    clearedArr[i] = clearedArr[i + 1];
                } else {
                    return delNull(clearedArr);
                }
                break;
            case '--double-prev':
                clearedArr[i] = null;
                if (i !== 0) {
                    clearedArr[i] = clearedArr[i - 1];
                }
                break;
        }
    }
    return delNull(clearedArr);
};

function delNull(mas) {
    let result = [];
    let indexResult = 0;
    for (let i = 0; i < mas.length; i++) {
        if (mas[i] !== null) {
            result[indexResult] = mas[i];
            indexResult++;
        }
    }
    return result;
};