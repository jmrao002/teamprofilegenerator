const generateTeam = (team) => {
  const generateManager = (manager) => {
    return `<div class="bxs-01 f-1 m">
    <div class="bgc-blue c-white fz-18 p">
    <div class="fw-600">${manager.getName()}</div>
    <div class="ai-c d-f mt--">
        <svg aria-hidden="true" focusable="false" class="h-24 w-24" role="img"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path class="f-white"
                d="M127.1 146.5c1.3 7.7 8 13.5 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18-3.8-28.2-16.4-54.2-36.6-74.7-14.4-14.7-23.6-33.3-26.4-53.5C111.8 5.9 105 0 96.8 0H80.4C70.6 0 63 8.5 64.1 18c3.9 31.9 18 61.3 40.6 84.4 12 12.2 19.7 27.5 22.4 44.1zm112 0c1.3 7.7 8 13.5 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18-3.8-28.2-16.4-54.2-36.6-74.7-14.4-14.7-23.6-33.3-26.4-53.5C223.8 5.9 217 0 208.8 0h-16.4c-9.8 0-17.5 8.5-16.3 18 3.9 31.9 18 61.3 40.6 84.4 12 12.2 19.7 27.5 22.4 44.1zM400 192H32c-17.7 0-32 14.3-32 32v192c0 53 43 96 96 96h192c53 0 96-43 96-96h16c61.8 0 112-50.2 112-112s-50.2-112-112-112zm0 160h-16v-96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48z">
            </path>
        </svg>
        <div class="ml--">${manager.getRole()}</div>
    </div>
    </div>
    <div class="p">
        <div class="bdc-gray bdls-s bdrs-s bdts-s bdw-1 p-">ID: ${manager.getId()}</div>
        <div class="bdc-gray bdls-s bdrs-s bdts-s bdw-1 p-">Email: ${manager.getEmail()}</div>
        <div class="bdc-gray bdbs-s bdls-s bdrs-s bdts-s bdw-1 p-">Office Number: ${manager.getOfficeNumber()}</div>
    </div>
    </div>`;
  };

  const generateEngineer = (engineer) => {
    return `<div class="bxs-01 f-1 m">
    <div class="bgc-blue c-white fz-18 p">
    <div class="fw-600">${engineer.getName()}</div>
    <div class="ai-c d-f mt--">
        <svg aria-hidden="true" focusable="false" class="h-24 w-24" role="img"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path class="f-white"
                d="M127.1 146.5c1.3 7.7 8 13.5 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18-3.8-28.2-16.4-54.2-36.6-74.7-14.4-14.7-23.6-33.3-26.4-53.5C111.8 5.9 105 0 96.8 0H80.4C70.6 0 63 8.5 64.1 18c3.9 31.9 18 61.3 40.6 84.4 12 12.2 19.7 27.5 22.4 44.1zm112 0c1.3 7.7 8 13.5 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18-3.8-28.2-16.4-54.2-36.6-74.7-14.4-14.7-23.6-33.3-26.4-53.5C223.8 5.9 217 0 208.8 0h-16.4c-9.8 0-17.5 8.5-16.3 18 3.9 31.9 18 61.3 40.6 84.4 12 12.2 19.7 27.5 22.4 44.1zM400 192H32c-17.7 0-32 14.3-32 32v192c0 53 43 96 96 96h192c53 0 96-43 96-96h16c61.8 0 112-50.2 112-112s-50.2-112-112-112zm0 160h-16v-96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48z">
            </path>
        </svg>
        <div class="ml--">${engineer.getRole()}</div>
    </div>
    </div>
    <div class="p">
        <div class="bdc-gray bdls-s bdrs-s bdts-s bdw-1 p-">ID: ${engineer.getId()}</div>
        <div class="bdc-gray bdls-s bdrs-s bdts-s bdw-1 p-">Email: ${engineer.getEmail()}</div>
        <div class="bdc-gray bdbs-s bdls-s bdrs-s bdts-s bdw-1 p-">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></div>
    </div>
    </div>`;
  };

  const generateIntern = (intern) => {
    return `<div class="bxs-01 f-1 m">
    <div class="bgc-blue c-white fz-18 p">
    <div class="fw-600">${intern.getName()}</div>
    <div class="ai-c d-f mt--">
        <svg aria-hidden="true" focusable="false" class="h-24 w-24" role="img"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path class="f-white"
                d="M127.1 146.5c1.3 7.7 8 13.5 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18-3.8-28.2-16.4-54.2-36.6-74.7-14.4-14.7-23.6-33.3-26.4-53.5C111.8 5.9 105 0 96.8 0H80.4C70.6 0 63 8.5 64.1 18c3.9 31.9 18 61.3 40.6 84.4 12 12.2 19.7 27.5 22.4 44.1zm112 0c1.3 7.7 8 13.5 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18-3.8-28.2-16.4-54.2-36.6-74.7-14.4-14.7-23.6-33.3-26.4-53.5C223.8 5.9 217 0 208.8 0h-16.4c-9.8 0-17.5 8.5-16.3 18 3.9 31.9 18 61.3 40.6 84.4 12 12.2 19.7 27.5 22.4 44.1zM400 192H32c-17.7 0-32 14.3-32 32v192c0 53 43 96 96 96h192c53 0 96-43 96-96h16c61.8 0 112-50.2 112-112s-50.2-112-112-112zm0 160h-16v-96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48z">
            </path>
        </svg>
        <div class="ml--">${intern.getRole()}</div>
    </div>
    </div>
    <div class="p">
        <div class="bdc-gray bdls-s bdrs-s bdts-s bdw-1 p-">ID: ${intern.getId()}</div>
        <div class="bdc-gray bdls-s bdrs-s bdts-s bdw-1 p-">Email: ${intern.getEmail()}</div>
        <div class="bdc-gray bdbs-s bdls-s bdrs-s bdts-s bdw-1 p-">School: ${intern.getSchool()}</div>
    </div>
    </div>`;
  };

  const html = [];
  html.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
      .join("")
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
      .join("")
  );
  return html.join("");
};

module.exports = (team) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./main.css">
    <title>The Team</title>
</head>
<body>
    <!-- header of the team -->
    <header class="bgc-tomato c-white d-f fz-24 jc-c p">My Team</header>
    <!-- team cards -->
    <section class="d-f fw-w jc-c mt+">
            ${generateTeam(team)}
    </section>
</body>
</html>`;
};
