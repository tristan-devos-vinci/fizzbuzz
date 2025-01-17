export class Main {
    fizzBuzz(number) {
        if (this.isMultipleOfFiveAndThree(number)) return 'FizzBuzz';
        if (this.isMultipleOfFive(number)) return 'Buzz';
        if (this.isMultipleOfThree(number)) return 'Fizz';
        return number.toString();
    }
    isMultipleOfThree(number) {
        return number % 3 === 0;
    }
    isMultipleOfFive(number) {
        return number % 5 === 0;
    }
    isMultipleOfFiveAndThree(number) {
        return number % 3 === 0 && number % 5 === 0;
    }
    print() {
        return 'Hello World';
    }
}