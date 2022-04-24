test('add manager office number', () => {
    const office = new Office('1');

    expect(office.number).toBe('1');
});

test('add employee', () => {
    const employee = new Employee("Haley");

    expect(employee.name).toBe("Haley");
    expect(employee.id).toBe(number);
    expect(employee.email).toBe(email);
})
