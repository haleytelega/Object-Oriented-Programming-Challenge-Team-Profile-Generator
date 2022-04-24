const { expect } = require("@jest/globals");

test('intern school', () => {
    const school = new School('Fake School');

    expect(school.name).toBe('Fake School');
})

test('add employee', () => {
    const employee = new Employee("Haley");

    expect(employee.name).toBe("Haley");
    expect(employee.id).toBe(number);
    expect(employee.email).toBe(email);
})
