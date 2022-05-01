const generatePage = require('./src/page-template');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const inquirer = require('inquirer');
const team = [];
const fs = require('fs');

const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: 'What is the managers name?',
        validate: managerNameInput => {
            if (managerNameInput) {
                return true;
            } else {
                console.log("Please enter manager name.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerID',
        message: 'Managers ID Number:',
        validate: managerIdInput => {
            if (managerIdInput) {
                return true;
            } else {
                console.log("Please enter manager id.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'Managers Email:',
        validate: managerEmailInput => {
            if (managerEmailInput) {
                return true;
            } else {
                console.log("Please enter manager email.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerOffice',
        message: 'Managers Office Number:',
        validate: managerOfficeInput => {
            if (managerOfficeInput) {
                return true;
            } else {
                console.log("Please enter manager office number.");
                return false;
            }
        }
    }
]

const menu = [ {
    type: 'list',
    name: 'employeeType',
    message: 'Employee Type:',
    choices: ["Engineer", "Intern", "Finish"]
}];

const engineerQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'Engineer Name:',
            validate: engineerNameInput => {
                if (engineerNameInput) {
                    return true;
                } else {
                    console.log("Please enter engineer name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerID',
            message: 'Engineer ID Number:',
            validate: engineerIdInput => {
                if (engineerIdInput) {
                    return true;
                } else {
                    console.log("Please enter engineer id.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'Engineer Email:',
            validate: engineerEmailInput => {
                if (engineerEmailInput) {
                    return true;
                } else {
                    console.log("Please enter engineer email.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerGitHub',
            message: 'Engineer GitHub username:',
            validate: engineerGithubInput => {
                if (engineerGithubInput) {
                    return true;
                } else {
                    console.log("Please enter engineer GitHub username.");
                    return false;
                }
            }
        }
    ])
    .then(ans => {
        const engineer = new Engineer(ans.engineerName, ans.engineerID, ans.engineerEmail, ans.engineerGitHub);
        team.push(engineer);
        createTeam();
        })
        .catch(err => {
            return console.log(err);
        });
    };  

const internQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'Intern Name:',
            validate: internNameInput => {
                if (internNameInput) {
                    return true;
                } else {
                    console.log("Please enter intern name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internID',
            message: 'Intern ID Number:',
            validate: internIdInput => {
                if (internIdInput) {
                    return true;
                } else {
                    console.log("Please enter intern id.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'Intern Email:',
            validate: internEmailInput => {
                if (internEmailInput) {
                    return true;
                } else {
                    console.log("Please enter intern email.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'Intern School',
            validate: internSchoolInput => {
                if (internSchoolInput) {
                    return true;
                } else {
                    console.log("Please enter intern school.");
                    return false;
                }
            }
        }
    ])    
    .then(ans => {
        const intern = new Intern(ans.internName, ans.internID, ans.internEmail, ans.internSchool);
        team.push(intern);
        createTeam();
        })
        .catch(err => {
            return console.log(err);
        });
};  

function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if (err) {
            return console.log(err);
        }
    })
};

function createManager() {
    inquirer.prompt(managerQuestions)
    .then(ans => {
        team.push(new Manager(ans.managerName, ans.managerID, ans.managerEmail, ans.managerOffice));
    createTeam();
    });
}

function createTeam (){
    inquirer.prompt(menu)
    .then(function (userInput) {
        switch(userInput.employeeType){
            case "Engineer":
                engineerQuestions();
                break;
            case "Intern":
                internQuestions();
                break;
            case "Finish":
                writeToFile(`index.html`, generatePage(team));
        }
    })

};


createManager();