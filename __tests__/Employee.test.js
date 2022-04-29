const Employee = require('./lib/Employee');

test('add employee', () => {
    const employee = new Employee("Haley");
    expect(employee.getName()).toBe("Haley");
});

test('add employee id', () => {
    const id = new Id("123");
    expect(id.getId()).toBe("123");
});

test('add employee email', () => {
    const email = new Email("Haley@gmail.com");
    expect(email.getEmail()).toBe("Haley@gmail.com")
});

test('add employee role', () => {
    const role = new Role("Engineer");
    expect(role.getRole()).toBe("Engineer");
});