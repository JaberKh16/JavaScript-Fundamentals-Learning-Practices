function summation(callback) {
    return new Promise((resolve, reject) => {
        try {
            const resultedArray = callback();
            const result = resultedArray.reduce((acc, current) => acc + current, 0);

            if (!isNaN(result)) {
                setTimeout(() => {
                    // resolver returning an object
                    resolve({
                        allNumbers: resultedArray, // Fixed variable name here
                        summationResult: result
                    });
                }, 2000);
            } else {
                reject(new Error('Invalid result'));
            }
        } catch (error) {
            reject(error);
        }
    });
}

const summationOfNumbers = [1, 34, 5, 3, 1, 15, 2, 67];

const summationOperationNumbers = (...args) => {
    return args;
};

const promises = summation(() => summationOperationNumbers(...summationOfNumbers));
promises
    .then((result) => { console.log(result); })
    .catch((error) => { console.error(error); });
