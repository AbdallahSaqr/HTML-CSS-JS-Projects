// Calculator
function calculator (x, y, Operator) {
if (typeof x!=="number" ||typeof y!=="number") {
    throw new Error ('Invalid Input') 
}
if (Operator === '+') {
    return x + y
} else if (Operator === '-') {
    return x - y
} else if (Operator === '*') {
    return x * y
} else if (Operator === '/') {
    return x / y
} else if (Operator === '**') {
    return x ** y
} else {
    return 'Invalid Operator'
}
}
// Testing the function
try {
    console.log(calculator(10, 5, '+'));
    console.log(calculator(10, 5, '-'));
    console.log(calculator(10, 5, '*'));
    console.log(calculator(10, 5, '/'));
    console.log(calculator(10, 5, '**'));
    console.log(calculator(10, 5, ''));
} catch (error) {
    console.log('Error!', error.message);
}
try {
    console.log(calculator(10, 'a', '+'));
} catch (error) {
    console.log('Error!', error.message);
}