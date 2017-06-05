'use strict';

class Calculator {
     add() {
             let sum = 0;
             if (arguments.length === 0) throw new SyntaxError('No arguments');
             else {
                 for (let i = 0; i < arguments.length; i++) {
                     if (arguments[i] === '' || arguments[i] === null || arguments[i] === Infinity || isNaN(arguments[i])) throw new SyntaxError('Incorrect data in arguments list');
                     else sum += arguments[i];
                 }
                 return sum;
             }
     }

     multiply() {
             let result = 1;
             if (arguments.length === 0) throw new SyntaxError('No arguments');
             for (let i = 0; i < arguments.length; i++) {
                 if (arguments[i] === '' || arguments[i] === null || isNaN(arguments[i])) throw new SyntaxError('Incorrect data in arguments list');
                 else result *= arguments[i];
             }
             return result;
     }
}
module.exports = Calculator;