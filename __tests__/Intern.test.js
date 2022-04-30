const Intern = require('../lib/Intern');

test('add intern school', () => {
    const intern = new Intern('haley', 3215, 'gmail.com', 'testSchool');
    expect(intern.schoolName).toEqual('testSchool');
})

test('get intern school', () => {
    const intern = new Intern('haley', 3215, 'gmail.com', 'testSchool');
    expect(intern.getSchool()).toBe("testSchool");
})

test('get intern role', () => {
    const intern = new Intern('haley', 3215, 'gmail.com', 'testSchool');
    expect(intern.getRole()).toBe("Intern");
})