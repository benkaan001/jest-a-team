const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
// const generateHTML = require('./src/generateHTML');

const teamArry =[];

// require prompt questions to get Manager's Info First


const getManager = () => { 
    return inquirer.prompt([
        {
        type: 'text',
        name:'name',
        message: "Please enter team manager's name:",
        validate: managerName => {
            if(managerName) {
                return true;
            } else {
                console.log('Please enter a name!');
                return false;
            }
        }
    },
    {
        type:'text',
        name:'id',
        message: "Please enter manager's ID number:",
        validate: managerID => {
            if(isNaN(managerID)) {
                console.log('Please enter a valid numeric ID number!');
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter manager's email adress:",
        validate: managerEmail => {
            const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(managerEmail);
            if(emailValidation) {
                return true;
            } else {
                console.log('Please enter an email!');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Please enter manager's office phone number:",
        validate: managerOfficeNumber => {
            if ( isNaN (managerOfficeNumber)) {
                console.log ('Please enter an office phone number!');
                return false;
            } else {
                return true;
            }
        }
    }
    
])
.then(userInput4Manager => {
    const {name, id, email, officeNumber} = userInput4Manager;
    const manager = new Manager (name, id, email, officeNumber);

    teamArry.push(manager);



})
};



const getEmployees = () => {

   return inquirer.prompt ([
        {
            type:'text',
            name:'role',
            message: 'Please select the role of the employee:',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'text',
            name: 'name',
            message: 'Please enter the name of the employee:',
            validate: nameInfo => {
                if(nameInfo) {
                    return true;
                } else {
                    console.log ('Please enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'id',
            message: 'Please enter the ID number of the employee:',
            validate: idInfo => {
                if (isNaN(idInfo)) {
                    console.log ('Please enter a valid numeric value for the ID of the employee!');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'text',
            name: 'email',
            message: 'Please enter the email address of the employee:',
            validate: employeeEmail => {
                const emailValidate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(employeeEmail);
                if(emailValidate) {
                    return true;
                } else {
                    console.log('Please enter an email!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            when: (input) => input.role === 'Intern',
            name: 'school',
            message: 'Please enter the school name for the Intern:',
            validate: schoolInput => {
                if(schoolInput) {
                    return true;
                } else {
                    console.log('Please enter a school name!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            when: (input) => input.role === 'Engineer',
            name: 'github',
            message: 'Please etner the github user name for the Engineer:',
            validate: githubInput => {
                if(githubInput){
                    return true;
                } else{
                    console.log('Please enter a github user name!');
                    return false;
                }
            }
        },

        {
            type: 'confirm',
            name: 'confirmAdd',
            message: 'Would you like to add more employees?',
            default: false,
            validate: confirmAdd => {
                    if (confirmAdd) {
                        return true;
                    } else {
                        console.log('You have chosen to not add additional roles!');
                        return false;
                        }
                    }
        }

        
    ])
    .then (userInput4Employees => {
        let {role, name, id, email, school, github, confirmAdd} = userInput4Employees;

        if (role === 'Intern') {
            employee = new Intern (name, id, email, school);
        } else if ( role === 'Engineer') {
            employee = new Engineer (name,id, email, github)
        }

        teamArry.push(employee);

        if (confirmAdd) {
            return getEmployees(teamArry);
        } else {
            return teamArry;
        }


        
        
    })
};

// getManager();

// getEmployees();

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => { 
        if (err) {
            reject(err);

            return;
        }
        resolve({
            ok:true,
            message: 'Your HTML has been successfully generated!'

        });
        });
    });
};

getManager()
.then(getEmployees)
.then (teamArry => {
    return generateHTML (teamArry);
})
.then(pageHTML => {
    return writeFile(pageHTML);
})
.catch(err => {
    console.log(err);
});




