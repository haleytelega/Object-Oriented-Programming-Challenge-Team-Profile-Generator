const Engineer = require('../lib/Engineer');

test('add engineer github username', () => {
    const engineer = new Engineer('haley', 3215, 'gmail.com', 'githubHaley');
    expect(engineer.githubUserName).toEqual('githubHaley');
})

test('get engineer github username', () => {
    const engineer = new Engineer('haley', 3215, 'gmail.com', 'githubHaley');
    expect(engineer.getGitHub()).toBe('githubHaley');
})

test('get engineer role', () => {
    const engineer = new Engineer('haley', 3215, 'gmail.com', 'githubHaley');
    expect(engineer.getRole()).toBe("Engineer");
})