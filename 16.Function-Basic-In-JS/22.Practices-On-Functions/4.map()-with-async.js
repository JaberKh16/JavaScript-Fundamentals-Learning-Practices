const numbers = [100, 20, 2, 3, 6, 5, 31, 9];

const evaluateToNewArray = numbers.map(async(value) => {
    return value * 2;
});

const result = await Promise.all(evaluateToNewArray);
console.log(result);