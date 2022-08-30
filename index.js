// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {type: 'input',
        name: 'title',
        message: 'Enter project TITLE: '},
    {type: 'input',
        name: 'description',
        message: 'Enter project DESCRIPTION: '},
    {type: 'input',
        name: 'installation',
        message: 'Enter project INSTALLATION instructions: '},
    {type: 'input',
        name: 'usage',
        message: 'Enter project USAGE information: '},
    {type: 'input',
        name: 'contributing',
        message: 'Enter project CONTRIBUTING guidlines: '},
    {type: 'input',
        name: 'tests',
        message: 'Enter project TESTS instructions: '},
    {type: 'list',
        name: 'license',
        message: 'Select project LICENSE: ',
        choices: ['MIT','GNU','MPL','Unlicense']},
    {type: 'input',
        name: 'gitHubUsername',
        message: 'Enter your GITHUB USERNAME: '},
    {type: 'input',
        name: 'email',
        message: 'Enter your EMAIL address: '},
    {type: 'input',
        name: 'contact',
        message: 'Enter instructions to CONTACT you: '},
    ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
        fs.writeFile(fileName, generateMarkdown.generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log('Success!')
        );
}

// TODO: Create a function to initialize app
function init() {

    inquirer
        .prompt([ ...questions ])
        .then((response) => {
            writeToFile('./output/README.md', response)
        });
}

// Function call to initialize app
init();
