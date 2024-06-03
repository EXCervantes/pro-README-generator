# Pro (Professional) README Generator
   
## Description

Here is an application for generating a professional looking README.md via prompts with questions for a user. This utilizes the packages "Inquirer", "File System (FS)", and "Colors". In addition, uses those packages with the Node language manager to generate the README markdown file using the collected data from the questions posed to the user.
  
## Installation

First to use this application head to the [Professional README Generator](https://github.com/EXCervantes/pro-README-generator) and clone the repository. To learn how to clone a repository checkout this guide [Cloning a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

Then you must create a `package.json` in VSCode. You must have `node` installed on your system. Go [here](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs) for instructions on how to do so.

Then in the Terminal run `npm install` to install both the `inquirer@8.2.4` and `colors` packages. For help on how to these click [here](https://www.npmjs.com/package/inquirer/v/8.2.4) for `inquirer` or [here](https://www.npmjs.com/package/colors) for `colors`. Finally to initialize this application run `node index.js` in the Terminal.
  
## Usage
  
To run the application open the Terminal or GitBash in VSCode and run `node index.js`. The application will ask a series of questions about the project using the `inquirer` package.

Once the data is entered, the application will generate a README markdown file using the code from the `generateMarkdown.js` and will write the file via `fs.writeFile` titled `DemoREADME.md`. On that README users will find a badge based on their selection for the "License" question. There is an example of a file created with this application that can be found [here](/DemoREADME.md).

### Video Demonstrating Application In Use



### Screenshots

![Screenshot Page 1](assets/images/personalblogscreenshot1.jpg)
![Screenshot Page 2](assets/images/personalblogscreenshot2.jpg)

## Credits

Referenced for demonstration of the `inquirer` package in action and to understand how a default value works.

"_node.js - How to set default value for an answer using inquirer? - Stack Overflow_. (2018, October 16). Stack Overflow. Retrieved May 30, 2024, from https://stackoverflow.com/questions/52842442/how-to-set-default-value-for-an-answer-using-inquirer

Used for the GitHub license badges found in the README markdown generator.

Himsel, Lukas, _Markdown License badges_, (2022, May 6), GitHub Gist webpage, https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
  
## License

GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007

See LICENSE for more info
