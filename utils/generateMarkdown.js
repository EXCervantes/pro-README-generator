// function to generate markdown for README
function licenseBadge(data) {
    const licenseType = data.license[0];
    let licenseString = " "
    if (licenseType === "None") {
        licenseString = `![License: None](assets/images/License-None.jpg)`
    }
    if (licenseType === "Apache License 2.0") {
        licenseString = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    };
    if (licenseType === "GNU GPLv3") {
        licenseString = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    };
    if (licenseType === "MIT License") {
        licenseString = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    };
    if (licenseType === "BSD 2-Clause 'Simplified' License") {
        licenseString = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
    }
    if (licenseType === "BSD 3-Clause 'New' or 'Revised' License") {
        licenseString = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    }
    if (licenseType === "Boost Software License 1.0") {
        licenseString = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
    }
    if (licenseType === "Creative Commons Zero v1.0 Universal") {
        licenseString = `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`
    }
    if (licenseType === "Eclipse Public License 2.0") {
        licenseString = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
    }
    if (licenseType === "GNU AGPLv3") {
        licenseString = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
    }
    if (licenseType === "GNU General Public License 2.0") {
        licenseString = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
    };
    if (licenseType === "GNU LGPLv2.1") {
        licenseString = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
    }
    if (licenseType === "Mozilla Public License 2.0") {
        licenseString = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    }
    if (licenseType === "The Unlicense") {
        licenseString = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
    }
    return licenseString
};

function generateMarkdown(data) {
    return `# ${data.title}
    
  ${licenseBadge(data)}
    
  ## Description
  
  ${data.description}

  ## Table of Contents:
  
  1. [Description](#description) 
  2. [Installation](#Installation)
  3. [Usage](#Usage)  
  4. [License](#License)
  5. [Contributing](#Contributing)
  6. [Tests](#Tests)
  7. [Questions](#Questions)
  
  ## Installation
  
  ${data.install}
  
  ## Usage
  
  ${data.usage}
  
  ## License
  
  ${licenseBadge(data)}

  ## Contributing
  
  ${data.contribute}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions

  ### GitHub
  [${data.github}](https://github.com/${data.github})
  
  ### E-mail
  ${data.email}`
}

module.exports = generateMarkdown;
