const functions = require('./functions');

test("returnTwo() should return 2.", () => {
    expect( functions.returnTwo() ).toEqual(2);
})

test("greeting() should return 'Hello' plus whatever name is entered into the function invocation", () =>{
    expect(functions.greeting('James')).toEqual('Hello, James.');
    expect(functions.greeting('Jill')).toEqual('Hello, Jill.');
})

describe("Math functions:", () => {
    test('add() should return the two parameters added together', () => {
        expect(functions.add(1,2)).toEqual(3);
        expect(functions.add(5,9)).toEqual(14);
    })
    
    test('multiply() should return the product of the parameters', () => {
        expect(functions.multiply(2, 5)).toEqual(10);
        expect(functions.multiply(5, 9)).toEqual(45);
    })
    
    test('divide() should return the first parameter divided by the second parameter', () => {
        expect(functions.divide(9, 3)).toEqual(3);
        expect(functions.divide(10, 5)).toEqual(2);
    })
    
    test('subtract() should return the value of parameter 1 minus parameter 2', () => {
        expect(functions.subtract(1, 5)).toEqual(-4);
        expect(functions.subtract(10, 8)).toEqual(2);
    })
})
