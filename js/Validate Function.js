function validateObject(obj, schema) {
    for (let property in schema) {  
        if (!(property in obj)) {   
            return false; 
        }

        let expectedType = schema[property];  
        let actualValue = obj[property];  

        
        if (expectedType === "array") {
            if (!Array.isArray(actualValue)) return false;  
        } 
        
        else if (typeof expectedType === "object") {
            if (typeof actualValue !== "object" || actualValue === null) return false;
            if (!validateObject(actualValue, expectedType)) return false;
        } 
       
        else if (typeof actualValue !== expectedType) {
            return false;
        }
    }
    return true; 
}

// Testing the function

const schema = { 
    name: "string", 
    age: "number", 
    isStudent: "boolean", 
    address: { 
        city: "string", 
        zip: "number", 
    }, 
}; 

const validObj = { 
    name: "John", 
    age: 25, 
    isStudent: true, 
    address: { 
        city: "New York", 
        zip: 10001, 
    }, 
}; 

const invalidObj = { 
    name: "John", 
    age: "twenty-five", 
    isStudent: true, 
    address: { 
        city: "New York", 
        zip: "10001", 
    }, 
}; 

console.log(validateObject(validObj, schema));  
console.log(validateObject(invalidObj, schema)); 
