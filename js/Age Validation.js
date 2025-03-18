// Validating age function
function Age(age) {
    if (typeof age !== "number") {
        throw new Error("Enter a valid number");
    }
    
    if (age < 0 || age > 100) {
        throw new Error("Age must be between 0 and 100");
    }
    console.log("Age is valid");
}

// testing the function
try {
    Age(10);
    Age("fff");
} catch (error) {
    console.log("Error !", error.message);
}
try {
    Age(101);
} catch (error) {
    console.log("Error !", error.message);
}