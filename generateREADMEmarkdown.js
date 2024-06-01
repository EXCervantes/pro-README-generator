// function to generate markdown for README
function licenseBadge(data) {
    const licenseType = data.license[0];
    let licenseString = " "
    if (licenseType === "None") {
        licenseString = `![License: None]`
    }
    if (licenseType === "Apache License 2.0") {
        licenseString = `![License: Apache License 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
    };
    if (licenseType === "GNU General Public License 3.0") {
        licenseString = `![License: GNU General Public License 3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)`
    };
    if (licenseType === "MIT") {
        licenseString = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
    };
    if (licenseType === "BSD 2-Clause 'Simplified' License") {
        licenseString = `![License: BSD 2-Clause 'Simplified' License]`
    }
    if (licenseType === "BSD 3-Clause 'New' or 'Revised' License") {
        licenseString = `![License: BSD 3-Clause 'New' or 'Revised' License]`
    }
    if (licenseType === "Boost Software License 1.0") {
        licenseString = `![License: Boost Software License 1.0]`
    }
    if (licenseType === "Creative Commons Zero v1.0 Universal") {
        licenseString = `![License: Creative Commons Zero v1.0 Universal]`
    }
    if (licenseType === "Eclipse Public License 2.0") {
        licenseString = `![License: Eclipse Public License 2.0]`
    }
    if (licenseType === "GNU AGPLv3") {
        licenseString = `![License: GNU AGPLv3]`
    }
    if (licenseType === "GNU General Public License 2.0") {
        licenseString = `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`
    };
    if (licenseType === "GNU LGPLv2.1") {
        licenseString = `![License: GNU LGPLv2.1]`
    }
    if (licenseType === "Mozilla Public License 2.0") {
        licenseString = `![License: Mozilla Public License 2.0]`
    }
    if (licenseType === "The Unlicense") {
        licenseString = `![License: The Unlicense]`
    }
    return licenseString
};

function generateMarkdown(data) {
    return `# ${data.title}
  
  ## Table of Contents:
    1. [Description](#description) 
    2. [Installation](#Installation)
    3. [Usage](#Usage)  
    4. [Contributing](#Contributing)
    5. [Tests](#Tests)
    6. [License](#License)
    7. [GitHub](#GitHub)
    8. [E-mail](#E-mail)
  
  ## Description
  ${data.description} 
  
  ## Installation
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## License
  ${licenseBadge(data)}
  
  ## GitHub
  ${data.github}
  
  ## E-mail
  ${data.email}`
}

module.exports = generateMarkdown;
