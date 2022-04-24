test('add manager office number', () => {
    const office = new Office('1');

    expect(office.number).toBe('1');
});