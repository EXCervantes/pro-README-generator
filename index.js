const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

inquirer
    .prompt([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title",
        },
        {
            type: "input",
            message: "Write a description of your project",
            name: "description",
        },
        {
            type: "input",
            message: "What are the steps required to install your project for the Installation section?",
            name: "install",
        },
        {
            type: "input",
            message: "What are the steps required to use your project for the Usage section?",
            name: "usage",
        },
        {
            type: "input",
            message: "How would you like to contribute?",
            name: "contribute",
        },
        {
            type: "input",
            message: "What are some of your tests for your project to be listed under Tests?",
            name: "tests",
        },
        {
            type: "input",
            message: "What is you github username? (Please omit the @)",
            name: "github",
            validate: function (answer) {
                if (answer.length >= 1) return true;
                return console.log("A valid GitHub username is required.");
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
    ])
    .then((data) => {
        const readMe = generateMarkdown(data);

        fs.writeFile("README.md", readMe, (err) =>
            err
                ? console.log(colors.bgBrightRed(err))
                : console.log(colors.bgBrightGreen("Success!"))
        );
    });

function init() {
    fs.writeFile()
};

init();

// function generateReadmeMarkdown({
//     name,
//     location,
//     hobby,
//     food,
//     github,
//     linkedin,
//     langs,
// }) {
//     return