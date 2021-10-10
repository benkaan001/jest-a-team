

const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Ben', 001, 'ben@noemail.com');

    expect( typeof employee.name).toBe('string');
    expect(employee.id).toEqual(expect.any(Number));
    expect( typeof employee.email).toBe('string');
});