const { test, expect } = require('@jest/globals');
const exp = require('constants');
const Intern = require('../lib/Intern');

test('gets the school name of the Intern',() => {
    const intern = new Intern('Intern', 4, 'intern@noemail.com', 'University of Texas');

    expect(intern.school).toEqual(expect.any(String));

    });

test ('gets the school of the intern', () => {

    const intern = new Intern('intern', 4, 'intern@noemail.com', 'University of Texas');

    expect(intern.getSchool()).toEqual(expect.any(String));
});

test ('overrides the role of the intern', () => {

    const intern = new Intern ('intern', 4, 'intern@noemail.com', 'University of Texas');

    expect(intern.getRole()).toEqual('Intern');
})