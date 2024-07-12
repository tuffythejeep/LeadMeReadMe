const inquirer = require("inquirer");
const fs = require("fs");
inquirer
  .prompt([
    {
      type: "text",
      message: "What is your name?",
      name: "nameInput",
    },
    {
      type: "text",
      message: "Where are you from?",
      name: "locationInput",
    },
    {
      type: "text",
      message: "What is your favorite hobby?",
      name: "hobbyInput",
    },
    {
      type: "text",
      message: "What is your favorite food?",
      name: "foodInput",
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
