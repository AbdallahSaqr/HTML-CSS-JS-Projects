class Employee {
    constructor(id, name, salary, position) {
        this.id = id;
        this.name = name;
        this.position = position;
        let _salary = salary; // Private salary variable

        // Getter function to access private salary
        this.getSalary = function () {
            return _salary;
        };

        // Setter function to update salary safely
        this.setSalary = function (newSalary) {
            if (newSalary > 0) {
                _salary = newSalary;
            } else {
                console.log("Invalid salary amount!");
            }
        };
    }

    work() {
        return `${this.name} is working.`;
    }
}

// Manager class
class Manager extends Employee {
    constructor(id, name, salary) {
        super(id, name, salary, "Manager");
    }
    
    work() {
        return `${this.name} is managing the team.`;
    }
}

// Developer class
class Developer extends Employee {
    constructor(id, name, salary) {
        super(id, name, salary, "Developer");
    }
    
    work() {
        return `${this.name} is writing code.`;
    }
}

// Intern class (Inheritance + Polymorphism)
class Intern extends Employee {
    constructor(id, name, salary) {
        super(id, name, salary, "Intern");
    }
    
    work() {
        return `${this.name} is learning new skills.`;
    }
}

// Testing the classes
const emp1 = new Manager(1, "Ahmed", 10000);
console.log(`ID: ${emp1.id}, Name: ${emp1.name}, Salary: ${emp1.getSalary()}, Position: ${emp1.position}`);
console.log(emp1.work());

const emp2 = new Developer(2, "Anas", 8000);
console.log(`ID: ${emp2.id}, Name: ${emp2.name}, Salary: ${emp2.getSalary()}, Position: ${emp2.position}`);
console.log(emp2.work());

const emp3 = new Intern(3, "Mai", 5000);
console.log(`ID: ${emp3.id}, Name: ${emp3.name}, Salary: ${emp3.getSalary()}, Position: ${emp3.position}`);
console.log(emp3.work());
