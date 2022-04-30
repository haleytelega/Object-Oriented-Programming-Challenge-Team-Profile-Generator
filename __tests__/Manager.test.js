const Manager = require('../lib/Manager');

test('add manager office number', () => {
    const manager = new Manager('haley', 3215, 'gmail.com', '1');

    expect(manager.officeNumber).toEqual('1')
})

test('add manager role', () => {
    const manager = new Manager('haley', 3215, 'gmail.com', '1');
    expect(manager.getRole()).toBe("Manager");
});

test('get office number', () => {
    const manager = new Manager('haley', 3215, 'gmail.com', '1');
    expect(manager.getOfficeNumber()).toBe("1");
})