const { test } = require('@jest/globals');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');


// require prompt questions 


const promptUser = () => { 
    return inquirer.prompt([
        {
        type: 'text',
        name:'manager name',
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
        name:'manager id',
        message: "Please enter manager's ID number:",
        validate: managerID => {
            if(managerID) {
                return true;
            } else {
                console.log('Please enter an ID number!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'manager email',
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
        name: 'manager office number',
        message: "Please enter manager's office phone number:",
        validate: managerOfficeNumber => {
            if ( isNaN (managerOfficeNumber)) {
                console.log ('Please enter an office phone number!');
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmAdd',
        message: "Would you like to add a team member?",
        default: true,
        validate: confirmAdd => {
            if (confirmAdd) {
                return true;
            } else {
                console.log('You have chosen to not add additional roles!');
                return false;
            }
        }
    },
    {
        type:'checkbox',
        name: 'add employee',
        when: ({confirmAdd}) => confirmAdd,
        message: "Please select the type of employee you would like to add:",
        choices: ['engineer', 'intern'],
    }
    
])
};

