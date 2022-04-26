const generatePage = require('./src/page-template');

const inquirer = require('inquirer');

const managerQuestions = () => {
    inquirer
    .prompt([
    {
        type: 'input',
        name: 'managerName',
        message: 'What is the managers name?'
    },
    {
        type: 'input',
        name: 'managerID',
        message: 'Managers ID Number:'
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'Managers Email:'
    },
    {
        type: 'input',
        name: 'managerOffice',
        message: 'Managers Office Number:'
    }
]);
};

const employeeQuestions = (questionData) => {
    if(!questionData.employees){
        questionData.employees = [];
    }
    return inquirer.prompt([
        {
            type: 'list',
            name: 'employeeType',
            message: 'Employee Type:',
            choices: ["Engineer", "Intern", "Finish"]
        },
        {
            type: 'input',
            name: 'engineerName',
            message: 'Engineer Name:'
        },
        {
            type: 'input',
            name: 'engineerID',
            message: 'Engineer ID Number:'
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'Engineer Email:'
        },
        {
            type: 'input',
            name: 'engineerGitHub',
            message: 'Engineer GitHub username:'
        },
        {
            type: 'input',
            name: 'internName',
            message: 'Intern Name:'
        },
        {
            type: 'input',
            name: 'internID',
            message: 'Intern ID Number:'
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'Intern Email:'
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'Intern School'
        }
    ])
    .then(employeeData => {
        console.log(employeeData);
        questionData.employees.push(employeeData);
        console.log(questionData);
        if(employeeData.employeeType){
            return employeeQuestions(questionData);
        } else {
            return employeeQuestions;
        }
    })
};

employeeQuestions();