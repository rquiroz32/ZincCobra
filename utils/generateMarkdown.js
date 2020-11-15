// function to generate markdown for README
function generateMarkdown(data) {

  let licObj = [
    { lic: "GNU GPL v3", badge: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)" },
    { lic: "GNU GPL v2", badge: "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)" },
    { lic: "GNU AGPL v3", badge: "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)" },
    { lic: "IBM Public License Version 1.0", badge: "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)" },
    { lic: "The MIT License", badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" }
  ]

  let badge

  for (i = 0; i < licObj.length; i++) {
    if (data.licenses === licObj[i].lic) {

      badge = licObj[i].badge

      


    }
  }

  return `# ${data.title}         ${badge}
## Description
${data.description}

## Table of Contents

*[Installation](#installation)
*[Usage](#usage)
*[Contributing](#Contributing)
*[Testing](#Testing)
*[Questions](#Questions)


## Installation
${data.installInstructions}

## Usage
${data.usageInfo}

## Contributing
${data.contributionGuidelines}

## Testing
${data.testingInstructions}

## Questions
* https://github.com/${data.userGitName}
* or email me at: ${data.userEmail}




`;
}

module.exports = generateMarkdown;

/*
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)

[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
 */
