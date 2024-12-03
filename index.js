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
        name: 'Description',
        message: 'Enter a Description',
    },

    {
        type: 'input',
        name: 'Installation',
        message: 'Enter installation instructions',
    },

    {
        type: 'input',
        name: 'Usage',
        message: 'Enter usage information',
    },

    {
        type: 'input',
        name: 'Contributing',
        message: 'Enter contribution guidelines',
    },

    {
        type: 'input',
        name: 'Tests',
        message: 'Enter test instructions',
    },

    { type: 'list', 
        name: 'License',
        message: 'Enter a License',
        choices: ['Apache 2.0', 'GNU GPLv3', 'MIT','MPL 2.0','BSD 3-Clause','none'],
        
    },

    {
        type: 'input',
        name:  'gitHubUserName',
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

    
    //fs.appendFile(fileName, JSON.stringify(data,null,'\n'),(err) =>
       // fs.appendFile(fileName, generateMarkdown(data),(err) =>
        fs.appendFile(fileName, generateMarkdown(data),(err) =>
    err ? console.error(err) : console.log("readme generated!"));  
    

}

// TODO: Create a function to initialize app
function init() {
    
console.log('Welcome to Professional README Generator');

const temp = inquirer.createPromptModule();
//const temp = inquirer.prompt(questions).then((answer) =>{}
    temp(questions).then((answers) =>{
   
    const filename =`${answers.title.toLowerCase().split(' ').join('')}.md`;
    writeToFile(filename, answers);
});


}

// Function call to initialize app
init();
