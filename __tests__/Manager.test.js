test('add manager office number', () => {
    const manager = new Manager('haley', 3215, 'gmail.com');

    expect(manager.getOffice()).toEqual(manager.officeNumber)
})

// test('add manager', () => {
//     const manager = new Manager("Haley");

//     expect(manager.name).toBe("Haley");
//     expect(manager.id).toBe(number);
//     expect(manager.email).toBe(email);
// })
