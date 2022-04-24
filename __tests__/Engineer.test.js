test('add github username', () => {
    const github = new GitHub('test');

    expect(github).toBe('test');
});

test('add employee', () => {
    const employee = new Employee("Haley");

    expect(employee.name).toBe("Haley");
    expect(employee.id).toBe(number);
    expect(employee.email).toBe(email);
})
