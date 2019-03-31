'use strict'

/**
 * function adds two transmitted numbers
 * @param a {number}
 * @param b {number}
 * @returns {number} summ of a and b
 */

function addition(a, b) {
    return a + b;
}

/**
 * subtracts the second transmitted number from the first transmitted number
 * @param a {number}
 * @param b {number}
 * @returns {number} difference of a and b
 */

function subtraction(a, b) {
    return a - b;
}

/**
 * multiplies two transmitted numbers
 * @param a {number}
 * @param b {number}
 * @returns {number}
 */
function multiplication(a, b) {
    return a * b;
}

/**
 * divides the first transmitted number by the second transmitted number
 * @param a
 * @param b
 * @returns {number}
 */

function division(a, b) {
    return a / b;
}


function math(arg1, arg2, operation) {
    switch (operation) {
        case 'addition':
            console.log(addition(arg1, arg2));
            break;
        case 'subtraction':
            console.log(subtraction(arg1, arg2));
            break;
        case 'multiplication':
            console.log(multiplication(arg1, arg2));
            break;
        case 'division':
            console.log(division(arg1, arg2));
            break;
        default:
            alert('Whats wrong?')

    }
};

console.log(math(5, 2, 'division'));