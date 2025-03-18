// Factorail Calculation
function factorial(n) {
    if (n < 0) 
      throw new Error("Error: Enter a positive number");
    if (n === 0)
      return 1;
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result; 
  }
  
  // Testing the function
  try {
    console.log(factorial(5));
    console.log(factorial(0));   
    console.log(factorial(-5)); 
  } catch (error) {   
    console.log("Error!", error.message);
  }
  