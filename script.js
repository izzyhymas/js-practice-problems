const reverseString = () => {
    const string = "Hello World!";
    const reversedString = string.split("").reverse().join("");
    alert(`Original: ${string} | Reversed: ${reversedString}`);
};

const fizzbuzz = () => {
    for (let i = 0; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("fizzbuzz");
        }
        else if(i % 3 == 0) {
            console.log("fizz");
        }
        else {
            console.log("buzz");
        }
    }
};

const dogAgeToHumanAge = () => {
    dogAge = prompt("Enter a dog age: ");
    convertAge = 16 * Math.log(dogAge) + 31;
    alert(`Your dog is ${Math.round(convertAge)} in human years!`);
};