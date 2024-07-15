const inquirer = require("inquirer");
const fs = require("fs");

const licenses = {
  "MIT License": {
    badge:
      "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
    notice:
      "This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.",
  },
  "GNU GPLv3": {
    badge:
      "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)",
    notice:
      "This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.",
  },
  "Apache License 2.0": {
    badge:
      "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)",
    notice:
      "This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.",
  },
  "Mozilla Public License 2.0": {
    badge:
      "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)",
    notice:
      "This project is licensed under the Mozilla Public License 2.0 - see the [LICENSE](LICENSE) file for details.",
  },
};

inquirer
  .prompt([
    {
      type: "text",
      message: "Please provide a clear and descriptive title for your project:",
      name: "titleInput",
    },
    {
      type: "text",
      message:
        "Provide an overview of your project, explaining its purpose, features, and other relevant info:",
      name: "descriptionInput",
    },
    {
      type: "text",
      message:
        "Provide instructions on how to install and set up the project locally:",
      name: "installationInput",
    },
    {
      type: "text",
      message:
        "List guidelines on how to use the project, including commands or special configurations:",
      name: "usageInput",
    },
    {
      type: "text",
      message:
        "Provide guidelines for contributors, including info on how to submit changes or report issues:",
      name: "contributionInput",
    },
    {
      type: "text",
      message:
        "Please list any individuals, libraries, or resources used in your project:",
      name: "creditsInput",
    },
    {
      type: "list",
      message: "Please choose a license for your project:",
      name: "licenseChoice",
      choices: Object.keys(licenses),
    },
    {
      type: "text",
      message:
        "Provide info on how to run tests and ensure the project's functionality:",
      name: "testsInput",
    },
    {
      type: "text",
      message: "Enter your GitHub Username, so others can find you there:",
      name: "githubInput",
    },
    {
      type: "text",
      message:
        "Enter your LinkedIn URL, so others can connect with you professionally:",
      name: "linkedinInput",
    },
    {
      type: "text",
      message: "Enter your email address for additional questions:",
      name: "emailInput",
    },
  ])
  .then((response) => {
    const {
      titleInput,
      descriptionInput,
      installationInput,
      usageInput,
      contributionInput,
      creditsInput,
      licenseChoice,
      testsInput,
      githubInput,
      linkedinInput,
      emailInput,
    } = response;

    const licenseBadge = licenses[licenseChoice].badge;
    const licenseNotice = licenses[licenseChoice].notice;

    const mdContent = `
${licenseBadge}

# ${titleInput}

## Table of Contents

- [Description](#my-description)

- [Installation Instructions](#my-installation)

- [Usage Information](#my-usage)

- [Contribution Guidelines](#my-contributions)

- [Credits](#my-credits)

- [License](#my-license)

- [Tests](#my-tests)

- [Questions?](#my-questions)

## Description <a name="my-description"></a>
${descriptionInput}

## Installation <a name="my-installation"></a>
${installationInput}

## Usage <a name="my-usage"></a>
${usageInput}

## Contributions <a name="my-contributions"></a>
${contributionInput}

## Credits <a name="my-credits"></a>
${creditsInput}

## License <a name="my-license"></a>
${licenseNotice}

## Tests <a name="my-tests"></a>
${testsInput}

## Questions <a name="my-questions"></a>
GitHub: <a href="https://github.com/${githubInput}">${githubInput}</a> in case you want to find me on GitHub!
LinkedIn: <a href="https://www.linkedin.com/in/${linkedinInput}">${linkedinInput}</a> if you want to communicate with me professionally.
Email: <a href="mailto:${emailInput}">${emailInput}</a> if you have additional questions.
    `;

    fs.writeFile("OutputReadMe.md", mdContent, (error) => {
      if (error) {
        console.error("Error writing file:", error);
      } else {
        console.log("OutputReadMe.md generated successfully!");
      }
    });
  });
