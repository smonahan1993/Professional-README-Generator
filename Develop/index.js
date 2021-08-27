// TODO: Include packages needed for this application
var generateMarkdown = require("./generateMarkdown");
var fs = require("fs");
var inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input", 
        message: "What is your project title?",
        name: "title"
    },{
        type: "input",
        message: "Please enter a description of your project.",
        name: "description"
    },{
        type: "input",
        message: "What are the installation instructions?",
        name: "installation"
    },{
        type: "input",
        message: "What is the project's usage information?",
        name: "usage"
    },{
        type: "input",
        message: "What are the contribution guidelines?",
        name: "contribution"
    },{
        type: "input",
        message: "What are the test instructions?",
        name: "test"
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponse, data) => {   
        console.log("Making ReadMe");
        fs.writeFileSync("ReadMe.md", inquirerResponse, data);
    })
    .catch((err) => {
        console.log(err);
    })
}

// Function call to initialize app
init();
