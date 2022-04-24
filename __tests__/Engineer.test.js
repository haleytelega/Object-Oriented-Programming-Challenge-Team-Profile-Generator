test('add github username', () => {
    const github = new GitHub('test');

    expect(github).toBe('test');
});