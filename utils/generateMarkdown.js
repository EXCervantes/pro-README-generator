// Generate License badge and text for License section
function licenseBadge(data) {
    const licenseType = data.license;
    let licenseUrlString = ""
    let licenseText = ""
    if (licenseType === "None") {
        licenseUrlString = `![License: None](assets/images/License-None.jpg)`
        licenseText = "This project is not covered by any license."
    }
    if (licenseType === "Apache License 2.0") {
        licenseUrlString = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
        licenseText = `This project is licensed under the ${data.license}. Please see the [License](https://opensource.org/licenses/Apache-2.0) page for more info.`
    };
    if (licenseType === "GNU GPLv3") {
        licenseUrlString = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
        licenseText = `This project is licensed under the ${data.license}. Please see the [License](https://www.gnu.org/licenses/gpl-3.0) page for more info.`
    };
    if (licenseType === "MIT License") {
        licenseUrlString = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
        licenseText = `This project is licensed under the ${data.license}. Please see the [License](https://opensource.org/licenses/MIT) page for more info.`
    };
    if (licenseType === "BSD 2-Clause 'Simplified' License") {
        licenseUrlString = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
        licenseText = `This project is licensed under the ${data.license}. Please see the [License](https://opensource.org/licenses/BSD-2-Clause) page for more info.`
    }
    if (licenseType === "BSD 3-Clause 'New' or 'Revised' License") {
        licenseUrlString = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
        licenseText = `This project is licensed under the ${data.license}. Please see the [License](https://opensource.org/licenses/BSD-3-Clause) page for more info.`
    }
    if (licenseType === "Boost Software License 1.0") {
        licenseUrlString = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
        licenseText = `This project is licensed under the ${data.license}. Please see the [License](https://www.boost.org/LICENSE_1_0.txt) page for more info.`
    }
    if (licenseType === "Creative Commons Zero v1.0 Universal") {
        licenseUrlString = `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`
        licenseText = `This project is licensed under the ${data.license}. Please see the [License](http://creativecommons.org/publicdomain/zero/1.0/) page for more info.`
    }
    if (licenseType === "Eclipse Public License 2.0") {
        licenseUrlString = `[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://opensource.org/license/EPL-2.0)`
        licenseText = `This project is licensed under the ${data.license}. Please see the [License](https://opensource.org/license/EPL-2.0) page for more info.`
    }
    if (licenseType === "GNU AGPLv3") {
        licenseUrlString = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
        licenseText = `This project is licensed under the ${data.license}. Please see the [License](https://www.gnu.org/licenses/agpl-3.0) page for more info.`
    }
    if (licenseType === "GNU General Public License 2.0") {
        licenseUrlString = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
        licenseText = `This project is licensed under the ${data.license}. Please see the [License](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html) page for more info.`
    };
    if (licenseType === "GNU LGPLv2.1") {
        licenseUrlString = `[![License: LGPL v2.1](https://img.shields.io/badge/License-LGPL_v2.1-blue.svg)](https://www.gnu.org/licenses/old-licenses/lgpl-2.1)`
        licenseText = `This project is licensed under the ${data.license}. Please see the [License](https://www.gnu.org/licenses/old-licenses/lgpl-2.1) page for more info.`
    }
    if (licenseType === "Mozilla Public License 2.0") {
        licenseUrlString = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
        licenseText = `This project is licensed under the ${data.license}. Please see the [License](https://opensource.org/licenses/MPL-2.0) page for more info.`
    }
    if (licenseType === "The Unlicense") {
        licenseUrlString = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
        licenseText = `This project is licensed under the ${data.license}. Please see the [License](http://unlicense.org/) page for more info.`
    }
    return { licenseUrlString, licenseText };
};

// Generate the Markdown structure
function generateMarkdown(data) {
    return `# ${data.title}
    
${licenseBadge(data).licenseUrlString}
    
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
  
${licenseBadge(data).licenseText}

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
