import { Main } from '../src/app.js';

describe("A suite of test for the demo function of the main class", function() {
    let main;
    beforeEach(() => {
        main = new Main();
    });

    it("demo", function() {
        expect(1).toBe(1);
    });

    it("should return 1", function() {
        const result = main.fizzBuzz(1);
        expect(result).toBe('1');
    });

    it("should return 2", function() {
        const result = main.fizzBuzz(2);
        expect(result).toBe('2');
    });

    it("should return Fizz", function() {
        const result = main.fizzBuzz(3);
        expect(result).toBe('Fizz');
    });

    it("should return Buzz", function() {
        const result = main.fizzBuzz(5);
        expect(result).toBe('Buzz');
    });
    
    it("should return FizzBuzz", function() {
        const result = main.fizzBuzz(15);
        expect(result).toBe('FizzBuzz');
    });

    it("should return Fizz", function() {
        const result = main.fizzBuzz(9);
        expect(result).toBe('Fizz');
    });

    it("should return Buzz", function() {
        const result = main.fizzBuzz(10);
        expect(result).toBe('Buzz');
    });

    it("should return 11", function() {
        const result = main.fizzBuzz(11);
        expect(result).toBe('11');
    });

    it("should return FizzBuzz", function() {
        const result = main.fizzBuzz(30);
        expect(result).toBe('FizzBuzz');
    });
});