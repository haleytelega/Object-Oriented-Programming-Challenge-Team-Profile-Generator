const { expect } = require("@jest/globals");

test('intern school', () => {
    const school = new School('Fake School');

    expect(school.name).toBe('Fake School');
})