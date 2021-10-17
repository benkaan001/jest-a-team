
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('gets the office number of the manager', () => {
    const manager = new Manager('manager', 2, 'manager@noemail.com', 8881110000);
    expect(manager.officeNumber). toEqual(expect.any(Number));
});

test('overrides getRole prototype to return manager', () => {
    const manager = new Manager('manager', 2, 'manager@noemail.com', 8881110000);

    expect(manager.getRole()).toEqual('Manager');
})