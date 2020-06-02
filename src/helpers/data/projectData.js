const projects = [
  {
    title: 'Tamagotchi',
    screenshot: 'https://i.imgur.com/PkkLaUy.png',
    description: 'A recreation of the classic hit kids virtual game, Tamagotchi. This project allowed us to practice using SASS. We only used SASS for all of the styling for this project. Our Tamagotchi game included four quadrants, each for a different feature in our game. Each quadrant included a real live progress bar that updated after each event was clicked.', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: 'HTML, CSS, SASS, Vanilla JavaScript, jQuery, Github',
    available: true,
    url: 'https://tamagotchi-e85d3.web.app', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: 'https://github.com/stephencastaneda/tamagotchiproject',
  },
  {
    title: 'Textual Healing App',
    screenshot: 'https://i.imgur.com/FbHoSdt.png',
    description: 'This project is a basic messaging app that allows you to create messages and delete messages. This app also features a dark mode and large text option. This project utilized a plethora of vanilla javascript methods. Our app uses seed data that displays on page load. There are radio buttons to select a user before typing your message. After you type your message, there is a button that allows you to delete your message.',
    technologiesUsed: 'HTML, CSS, SASS, Vanilla JavaScript, jQuery, Github',
    available: true,
    url: 'https://chatty-app-13ba4.web.app', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: 'https://github.com/nss-evening-cohort-11/chatty-butterworts',
  },
  {
    title: 'Star Destroyer',
    screenshot: 'https://i.imgur.com/oVpJEF0.png',
    description: 'A project that features all missions, personnel, weapons, enemies, and sectors in our very own Star Wars galaxy. Users are able to create a mission. As well as edit the mission planetery sector and enemy target. Users can also add personnel and weapons for their missions.', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: 'HTML, CSS, VS Code, React, Bootstrap, jQuery, firebase, Github',
    available: true,
    url: 'https://star-wars-484f4.web.app', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: 'https://github.com/nss-evening-cohort-11/nutshell-ewoks-droids',
  },
  {
    title: 'Sports Roster',
    screenshot: 'https://i.imgur.com/Gfr02Cm.png',
    description: 'This is the second app I created with React. This project features a team roster for the Los Angeles Lakers. Users can create, edit, and add players as they wish.', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: 'HTML, SASS, VS Code, Github, Bootstrap, jQuery, firebase, Github',
    available: true,
    url: 'https://sports-roster-a619c.web.app', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: 'https://github.com/stephencastaneda/sports-roster',
  },
];

const getProjects = () => projects;


export default { getProjects };
