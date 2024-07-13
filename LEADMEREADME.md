# Title

## Table of Contents

- [Description](#my-description)

- [Installation Instructions](#my-installation)

- [Usage Information](#my-usage)

- [Contribution Guidelines](#my-contributions)

- [Credits](#my-credits)

- [License](#my-license)

- [Tests](#my-tests)

- [Questions](#my-questions)

## Description <a name="my-description"></a>

## Installation <a name="my-installation"></a>

## Usage <a name="my-usage"></a>

## Contributions <a name="my-contributions"></a>

## Credits <a name="my-credits"></a>

## License <a name="my-license"></a>

## Tests <a name="my-tests"></a>

## Questions <a name="my-questions"></a>


const inquirer = require("inquirer");
const fs = require("fs");
inquirer
  .prompt([
    {
      type: "text",
      message: "Please provide a clear and descriptive title for the project.",
      name: "descriptionInput",
    },
    {
      type: "text",
      message: "Please provide instructions on how to install and set up the project locally.",
      name: "installationInput",
    },
    {
      type: "text",
      message: "Pleasen list guidelines on how to use the project, including any commands or configurations.",
      name: "usageInput",
    },
    {
      type: "text",
      message: "Please provide guidelines for contributors, including information on how to submit changes or report issues.",
      name: "contributionInput",
    },
     {
      type: "text",
      message: "Please provide acknowledgment of any individuals, libraries, or resources used in the project.",
      name: "creditsInput",
    },
    {
      type: "text",
      message: "Please provide information about the project's license, outlining how others can use and contribute to the project.",
      name: "licenseInput",
    },
    {
      type: "text",
      message: "Please provide Information on how to run tests and ensure the project's functionality.",
      name: "testsInput",
    },
    {
      type: "text",
      message: "Enter your GitHub Username:",
      name: "gihubInput",
    },
    {
      type: "text",
      message: "Enter your LinkedIn URL:",
      name: "linkedinInput",
    },
  ])
  .then((response) => {
    const {
      nameInput,
      locationInput,
      hobbyInput,
      foodInput,
      githubInput,
      linkedinInput,
    } = response;
    const htmlContent = `
      <html>
        <head>
          <title>Portfolio</title>
        </head>
        <body>
          <h1>${nameInput}'s Portfolio</h1>
          <p>Location: ${locationInput}</p>
          <p>Hobby: ${hobbyInput}</p>
          <p>Favorite Food: ${foodInput}</p>
          <p>GitHub: <a href="https://github.com/${githubInput}">${githubInput}</a></p>
          <p>LinkedIn: <a href="${linkedinInput}">${linkedinInput}</a></p>
        </body>
      </html>
    `;
    fs.writeFile("portfolio.html", htmlContent, (error) => {
      if (error) {
        console.error("Error writing file:", error);
      } else {
        console.log("Portfolio generated successfully!");
      }
    });
  });
