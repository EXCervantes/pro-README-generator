// Generate License badge and URL
function licenseBadge(license) {
    let licenseUrlString = ""
    if (license === "None") {
        licenseUrlString = ""
    }
    if (license === "Apache License 2.0") {
        licenseUrlString = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    };
    if (license === "GNU GPLv3") {
        licenseUrlString = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    };
    if (license === "MIT License") {
        licenseUrlString = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    };
    if (license === "BSD 2-Clause 'Simplified' License") {
        licenseUrlString = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
    }
    if (license === "BSD 3-Clause 'New' or 'Revised' License") {
        licenseUrlString = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    }
    if (license === "Boost Software License 1.0") {
        licenseUrlString = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
    }
    if (license === "Creative Commons Zero v1.0 Universal") {
        licenseUrlString = `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`
    }
    if (license === "Eclipse Public License 2.0") {
        licenseUrlString = `[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://opensource.org/license/EPL-2.0)`
    }
    if (license === "GNU AGPLv3") {
        licenseUrlString = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
    }
    if (license === "GNU General Public License 2.0") {
        licenseUrlString = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
    };
    if (license === "GNU LGPLv2.1") {
        licenseUrlString = `[![License: LGPL v2.1](https://img.shields.io/badge/License-LGPL_v2.1-blue.svg)](https://www.gnu.org/licenses/old-licenses/lgpl-2.1)`
    }
    if (license === "Mozilla Public License 2.0") {
        licenseUrlString = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    }
    if (license === "The Unlicense") {
        licenseUrlString = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
    }
    return licenseUrlString;
};

// Generate License section
function renderLicenseSection(license) {
    let licenseSection = ""
    if (license === "None") {
        licenseSection = "This project is not covered by any license."
    }
    if (license === "Apache License 2.0") {
        licenseSection = `This project is licensed under the ${license}. Please see the [License](https://opensource.org/licenses/Apache-2.0) page for more info.`
    };
    if (license === "GNU GPLv3") {
        licenseSection = `This project is licensed under the ${license}. Please see the [License](https://www.gnu.org/licenses/gpl-3.0) page for more info.`
    };
    if (license === "MIT License") {
        licenseSection = `This project is licensed under the ${license}. Please see the [License](https://opensource.org/licenses/MIT) page for more info.`
    };
    if (license === "BSD 2-Clause 'Simplified' License") {
        licenseSection = `This project is licensed under the ${license}. Please see the [License](https://opensource.org/licenses/BSD-2-Clause) page for more info.`
    }
    if (license === "BSD 3-Clause 'New' or 'Revised' License") {
        licenseSection = `This project is licensed under the ${license}. Please see the [License](https://opensource.org/licenses/BSD-3-Clause) page for more info.`
    }
    if (license === "Boost Software License 1.0") {
        licenseSection = `This project is licensed under the ${license}. Please see the [License](https://www.boost.org/LICENSE_1_0.txt) page for more info.`
    }
    if (license === "Creative Commons Zero v1.0 Universal") {
        licenseSection = `This project is licensed under the ${license}. Please see the [License](http://creativecommons.org/publicdomain/zero/1.0/) page for more info.`
    }
    if (license === "Eclipse Public License 2.0") {
        licenseSection = `This project is licensed under the ${license}. Please see the [License](https://opensource.org/license/EPL-2.0) page for more info.`
    }
    if (license === "GNU AGPLv3") {
        licenseSection = `This project is licensed under the ${license}. Please see the [License](https://www.gnu.org/licenses/agpl-3.0) page for more info.`
    }
    if (license === "GNU General Public License 2.0") {
        licenseSection = `This project is licensed under the ${license}. Please see the [License](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html) page for more info.`
    };
    if (license === "GNU LGPLv2.1") {
        licenseSection = `This project is licensed under the ${license}. Please see the [License](https://www.gnu.org/licenses/old-licenses/lgpl-2.1) page for more info.`
    }
    if (license === "Mozilla Public License 2.0") {
        licenseSection = `This project is licensed under the ${license}. Please see the [License](https://opensource.org/licenses/MPL-2.0) page for more info.`
    }
    if (license === "The Unlicense") {
        licenseSection = `This project is licensed under the ${license}. Please see the [License](http://unlicense.org/) page for more info.`
    }
    return licenseSection;
}


// Generate the Markdown structure
function generateMarkdown(data) {
    return `# ${data.title}
    
${licenseBadge(data.license)}
    
## Description
  
${data.description}

## Table of Contents:

1. [Description](#description) 
2. [Installation](#installation)
3. [Usage](#usage)  
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)
  
## Installation
  
${data.install}
  
## Usage
  
${data.usage}
  
## License
  
${renderLicenseSection(data.license)}

## Contributing
  
${data.contribute}
  
## Tests
  
${data.tests}
  
## Questions

### What is my GitHub?
My GitHub can be found at [${data.github}](https://github.com/${data.github}).
  
### What is my E-mail?
If you have addition questions please contact me at my email ${data.email}.`
}

module.exports = generateMarkdown;
