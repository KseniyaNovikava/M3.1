'use strict';

let Calculator = require('../calculator');

describe('Calculator', () => {
    let calc;

    beforeAll(() => {
        calc = new Calculator();
    });

    it('should exist multiply method', () => {
        expect(calc.multiply).toBeDefined();
        expect(typeof calc.multiply).toBe('function');
    });

    it('should exist add method', () => {
        expect(calc.add).toBeDefined();
        expect(typeof calc.add).toBe('function');
    });

    it('should add with positive numbers', () => {
        expect(calc.add(2,5)).toBe(7);
        expect(calc.add(0,0)).toBe(0);
        expect(calc.add(3,8,119,5,6,11120,78,1)).toBe(11340);
    });

    it('should add with negative numbers', () => {
        expect(calc.add(-1,1)).toBe(0);
        expect(calc.add(-25,-60)).toBe(-85);
        expect(calc.add(-129,-45,-76,34)).toBe(-216);
    });

    it('should multiply with positive numbers', () => {
        expect(calc.multiply(5,0)).toBe(0);
        expect(calc.multiply(0,0)).toBe(0);
        expect(calc.multiply(5,4)).toBe(20);
        expect(calc.multiply(5,1)).toBe(5);
        expect(calc.multiply(6,7,2,75,8,123)).toBe(6199200);
    });

    it('should multiply with negative numbers', () => {
        expect(calc.multiply(-5,0)).toBe(0);
        expect(calc.multiply(-34,-2)).toBe(68);
    });

    it('should throw exception with incorrect data', () => {
        expect(function(){calc.multiply('affagfhga',2,'h',5)}).toThrowError(SyntaxError, 'Incorrect data in arguments list');
        expect(function(){calc.multiply(null,7)}).toThrowError(SyntaxError, 'Incorrect data in arguments list');
        expect(function(){calc.multiply(7,NaN)}).toThrowError(SyntaxError, 'Incorrect data in arguments list');
        expect(function(){calc.multiply()}).toThrowError(SyntaxError, 'No arguments');
        expect(function(){calc.add(5,'')}).toThrowError(SyntaxError, 'Incorrect data in arguments list');
        expect(function(){calc.add('affagfhga',2,'h',5)}).toThrowError(SyntaxError, 'Incorrect data in arguments list');
        expect(function(){calc.add(null,7)}).toThrowError(SyntaxError, 'Incorrect data in arguments list');
        expect(function(){calc.add(7,NaN)}).toThrowError(SyntaxError, 'Incorrect data in arguments list');
        expect(function(){calc.add(5,Infinity)}).toThrowError(SyntaxError, 'Incorrect data in arguments list');
        expect(function(){calc.add()}).toThrowError(SyntaxError, 'No arguments');
    });
});