const Employee = require('../lib/Employee');

test('add employee', () => {
    const employee = new Employee("Haley");
    expect(employee.getName()).toBe("Haley");
});

test('add employee id', () => {
    const id = new Employee("Haley", "123");
    expect(id.getId()).toBe("123");
});

test('add employee email', () => {
    const email = new Employee("Haley", "123", "Haley@gmail.com");
    expect(email.getEmail()).toBe("Haley@gmail.com")
});

test('add employee role', () => {
    const role = new Employee("Haley", "123", "Haley@gmail.com", "Engineer");
    expect(role.getRole()).toBe("Engineer");
});