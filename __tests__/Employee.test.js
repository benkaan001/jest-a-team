

const { string } = require('yargs');
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Ben', 1, 'ben@noemail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets the name of the employee', () => {
    const employee = new Employee('Ben', 1, 'ben@noemail.com');

    expect(employee.getName()).toEqual(expect.any(String));

});
