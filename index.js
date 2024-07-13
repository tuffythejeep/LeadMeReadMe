const inquirer = require("inquirer");
const fs = require("fs");
inquirer
  .prompt([
    {
      type: "text",
      message: "Please provide a clear and descriptive title for your project:",
      name: "titleInput",
    },
    {
      type: "text",
      message: "Provide an overview of your project, explaining its purpose, features, and other relevant info:",
      name: "descriptionInput",
    },
    {
      type: "text",
      message: "Provide instructions on how to install and set up the project locally:",
      name: "installationInput",
    },
    {
      type: "text",
      message: "List guidelines on how to use the project, including commands or special configurations:",
      name: "usageInput",
    },
    {
      type: "text",
      message: "Provide guidelines for contributors, including info on how to submit changes or report issues:",
      name: "contributionInput",
    },
     {
      type: "text",
      message: "Please list any individuals, libraries, or resources used in your project:",
      name: "creditsInput",
    },
    {
      type: "text",
      message: "Please provide info about the project's license, outlining how others can contribute to your project:",
      name: "licenseInput",
    },
    {
      type: "text",
      message: "Provide info on how to run tests and ensure the project's functionality:",
      name: "testsInput",
    },
    {
      type: "text",
      message: "Enter your GitHub Username, so others can find you there:",
      name: "githubInput",
    },
    {
      type: "text",
      message: "Enter your LinkedIn URL for any other questions or concerns:",
      name: "linkedinInput",
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
      licenseInput,
      testsInput,
      githubInput,
      linkedinInput,
    } = response;
    const mdContent = `
# Title
${titleInput}

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
${contributionInput}}

## Credits <a name="my-credits"></a>
${creditsInput}

## License <a name="my-license"></a>
${licenseInput}

## Tests <a name="my-tests"></a>
${testsInput}

## Questions <a name="my-questions"></a>
GitHub: <a href="https://github.com/${githubInput}">${githubInput}</a> in case you want to find me on github!
LinkedIn: <a href="https://www.linkedin.com/in/${linkedinInput}">${linkedinInput}</a> in case you have any other questions or concerns.
    `;
    fs.writeFile("OutputReadMe.md", mdContent, (error) => {
      if (error) {
        console.error("Error writing file:", error);
      } else {
        console.log("OutputReadMe.md generated successfully!");
      }
    });
  });