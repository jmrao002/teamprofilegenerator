const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const generateHTML = require("./src/html-template");

const teamMembers = [];

function createManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the team manager's name?",
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the team manager's id?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the team manager's email?",
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the team manager's office number?",
      },
    ])
    .then((answers) => {
      // create manager object
      const manager = new Manager(
        answers.managerId,
        answers.managerName,
        answers.managerEmail,
        answers.managerOfficeNumber
      );
      teamMembers.push(manager);
      createTeam();
      // send variable to template
      // const htmlPageContent = generateHTML(teamMembers);
      // createFile(htmlPageContent);
    });
}

function createEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the engineer's name?",
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is the engineer's id?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email?",
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is the engineer's github?",
      },
    ])
    .then((answers) => {
      // create manager object
      const engineer = new Engineer(
        answers.engineerId,
        answers.engineerName,
        answers.engineerEmail,
        answers.engineerOfficeNumber
      );
      teamMembers.push(engineer);
      createTeam();
      // send variable to template
      // const htmlPageContent = generateHTML(teamMembers);
      // createFile(htmlPageContent);
    });
}

function createIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is the intern's name?",
      },
      {
        type: "input",
        name: "einternId",
        message: "What is the intern's id?",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email?",
      },
      {
        type: "input",
        name: "internGithub",
        message: "What is the intern's school?",
      },
    ])
    .then((answers) => {
      // create manager object
      const intern = new Intern(
        answers.internId,
        answers.internName,
        answers.internEmail,
        answers.internOfficeNumber
      );
      teamMembers.push(intern);
      createTeam();
      // send variable to template
      // const htmlPageContent = generateHTML(teamMembers);
      // createFile(htmlPageContent);
    });
}

function createTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "memberChoice",
        message: "What team member would you like to create?",
        choices: ["Engineer", "Intern", "I'm done with the team"],
      },
    ])
    .then((userChoice) => {
      if (userChoice.memberChoice === "Engineer") {
        createEngineer();
      } else if (userChoice.memberChoice === "Intern") {
        createIntern();
      } else {
        buildTeam();
      }
    });
}

// take array of team and send it to the create file
function buildTeam() {
  console.log();
  // const htmlPageContent = generateHTML(teamMembers);
  // createFile(htmlPageContent);
}

createManager();

function createFile(htmlCode) {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFileSync(outputPath, htmlCode, "utf-8");
}
