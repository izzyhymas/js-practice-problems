const reverseString = () => {
    const string = "Hello World!";
    const reversedString = string.split("").reverse().join("");
    console.log(`Original: ${string} | Reversed: ${reversedString}`);
};