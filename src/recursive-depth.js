const CustomError = require("../extensions/custom-error");
//let counter = 0;
//let result = 0;
module.exports = class DepthCalculator {
    calculateDepth(arr) {
        throw new CustomError('Not implemented');
        // remove line with error and write your code here
        /*
                for (let i = 0; i < arr.length; i++) {
                    if (Array.isArray(arr[i])) {
                        counter++;
                        this.calculateDepth(arr[i]);
                    } else {
                        if (result < counter) {
                            result = counter;
                        }
                        counter = 0;
                    }
                }
                return result;*/
    }
};