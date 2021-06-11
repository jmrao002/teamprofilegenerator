const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const generateHTML = require("./src/html-template");

inquirer
  .prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is the team managers name?",
    },
  ])
  .then((answers) => {
    // set variables
    console.log(answers);
    // send variblae to template
    const htmlPageContent = generateHTML(answers);
    createFile(htmlPageContent);
  });

function createFile(htmlCode) {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFileSync(outputPath, htmlCode, "utf-8");
}
