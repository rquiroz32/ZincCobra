///dependencies///
const inquirer = require('inquirer')
const fs = require("fs")
const generateMarkdown = require('./utils/generateMarkdown')

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your Project?"
    },
    {
        type: 'input',
        name: 'description',
        message: "Please enter a description for your project?"
    },
    {
        type: 'input',
        name: 'installInstructions',
        message: "What are the installation instructions for your project?"
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: "Please enter in usage information.",
    },
    {
        type: 'list',
        name: 'contributionGuidelines',
        message: "What guidlines would you like to set for contribution?",
        choices: ["To report bugs or suggest enhancements please use my contact info listed further down below", "Code of Conduct: all communication should be friendly and professional, any deviation from these guidelines will result in termination of privileges."]
    },
    {
        type: 'input',
        name: 'testingInstructions',
        message: 'Please enter in instructions for testing'
    },
    {
        type: 'list',
        name: 'licenses',
        message: "Please select a license you would like to use.",
        choices: ["To report bugs or suggest enhancements please use my contact info listed further down below", "Code of Conduct: all communication should be friendly and professional, any deviation from these guidelines will result in termination of privileges."]
    },
    {
        type: 'input',
        name: 'userGitName',
        message: "What is your GitHub username?"
    },
    {
        type: 'input',
        name: 'userEmail',
        message: "What is your email?"
    },
];

// function to write README file

function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    console.log("Initializing Program")

    inquirer.prompt(questions).then((data) => {
        //console.log(data)
        let fileName = `${data.title.toLowerCase().split(' ').join('')}.ReadMe.md`
        let output = generateMarkdown(data)
        //writeToFile(fileName, data);
      
    })
}
// function call to initialize program

init();
