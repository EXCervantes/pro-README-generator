// Necessary packages and modules
const inquirer = require("inquirer");
const colors = require("colors");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
        validate: function (answer) {
            if (answer.length > 1) return true;
            return console.log("Please enter a valid title for your project.");
        }
    },
    {
        type: "input",
        message: "Write a description of your project",
        name: "description",
        validate: function (answer) {
            if (answer.length > 1) return true;
            return console.log("Please enter a description for your project.");
        }
    },
    {
        type: "input",
        message: "What are the steps required to install your project for the Installation section?",
        name: "install",
        default: "N/A",
    },
    {
        type: "input",
        message: "What are the steps required to use your project for the Usage section?",
        name: "usage",
        validate: function (answer) {
            if (answer.length > 1) return true;
            return console.log("Please enter a how to use your project.");
        }
    },
    {
        type: "input",
        message: "How would you like to contribute to this project?",
        name: "contribute",
        default: "N/A",
    },
    {
        type: "input",
        message: "What are some of your tests for your project to be listed under Tests?",
        name: "tests",
        default: "N/A",
    },
    {
        type: "input",
        message: "What is you github username? (Please omit the @)",
        name: "github",
        validate: function (answer) {
            if (answer.length > 1) return true;
            return console.log("A valid GitHub username is required.");
        }
    },
    {
        type: "input",
        message: "What is you email address?",
        name: "email",
        validate: function (answer) {
            if (answer.length > 1) return true;
            return console.log("A valid email is required.");
        }
    },
    {
        type: "list",
        message: "Choose a license for your project.",
        name: "license",
        choices: [
            "None",
            "Apache License 2.0",
            "GNU GPLv3",
            "MIT License",
            "BSD 2-Clause 'Simplified' License",
            "BSD 3-Clause 'New' or 'Revised' License",
            "Boost Software License 1.0",
            "Creative Commons Zero v1.0 Universal",
            "Eclipse Public License 2.0",
            "GNU AGPLv3",
            "GNU GPLv2",
            "GNU LGPLv2.1",
            "Mozilla Public License 2.0",
            "The Unlicense",
        ],
    },
];

// Write Markdown file to system
function writeToFile(fileName, data) {
    const readMe = generateMarkdown(data);

    fs.writeFile(fileName, readMe, (err) =>
        err
            ? console.log(colors.bgBrightRed(err))
            : console.log(colors.bgBrightGreen("Success! Enjoy your shiny new README."))
    );
}

// Initialize app and generating README.md
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile("DemoREADME.md", data)
        });
}

// Call the initialization function
init();
