
const Engineer = require ('../lib/Engineer');

test('gets the github account of the engineer', () => {
    const engineer = new Engineer('engineer', 3, 'engineer@noemail.com', 'benkaan001');

    expect(engineer.github).toEqual(expect.any(String));

});

test('gets the github link of the engineer', () => {
    const engineer = new Engineer('engineer', 3, 'engineer@noemail.com', 'benkaan001');

    expect(engineer.getGithub()).toEqual('https://github.com/benkaan001');
});

test ('overrides the role of the engineer', () => {
    const engineer = new Engineer('engineer', 3, 'engineer@noemail.com', 'benkaan001');

    expect(engineer.getRole()).toEqual(expect.any(String));
});

