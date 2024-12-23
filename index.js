// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'Enter Project Title',

    },

    {
        type: 'input',
        name: 'description',
        message: 'Enter a Description',
    },

    {
        type: 'input',
        name: 'installation_instructions',
        message: 'Enter installation instructions',
    },

    {
        type: 'input',
        name: 'usage_information',
        message: 'Enter usage information',
    },

    {
        type: 'input',
        name: 'contribution_guidelines',
        message: 'Enter contribution guidelines',
    },

    {
        type: 'input',
        name: 'test_instructions',
        message: 'Enter test instructions',
    },

    {
        type: 'list',
        name: 'license',
        message: 'Enter a License',
        choices: ['Apache 2.0', 'GNU GPLv3', 'MIT', 'MPL 2.0', 'BSD 3-Clause', 'none'],

    },

    {
        type: 'input',
        name: 'github_username',
        message: 'Enter your git hub username',

    },

    {
        type: 'input',
        name: 'email',
        message: 'Enter your your email address',
    },





];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {



    fs.writeFile(fileName, generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log("readme generated!"));


}

// TODO: Create a function to initialize app
function init() {

    console.log('Welcome to Professional README Generator');

    //const temp = inquirer.prompt(questions).then((answer) =>{}
    const temp = inquirer.createPromptModule();
   
    temp(questions).then((answers) => {

        const filename = `${answers.title.toLowerCase().split(' ').join('')}.md`;
        writeToFile(filename, answers);
    });


}

// Function call to initialize app
init();
