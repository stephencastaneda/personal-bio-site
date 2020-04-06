const projects = [
  {
    title: 'Tamagotchi',
    screenshot: 'https://i.imgur.com/PkkLaUy.png',
    description: 'For this project, we created our very own version of the first virtual game to ever exist, the Tamagotchi. This project allowed us to practice using SASS. We only used SASS for all of the styling for this project. Our Tamagotchi game included four quadrants, each for a different feature in our game. Each quadrant included a real live progress bar that updated after each event was clicked.', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: 'HTML, CSS, SASS, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://github.com/nss-evening-cohort-8/js-part-deux', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: 'https://github.com/stephencastaneda/tamagotchiproject',
  },
  {
    title: 'Textual Healing App',
    screenshot: 'https://i.imgur.com/FbHoSdt.png',
    description: 'This project is a basic messaging app that allows you to create messages and delete messages. This app also features a dark mode and large text option. This project utilized a plethora of vanilla javascript methods. Our app uses seed data that displays on page load. There are radio buttons to select a user before typing your message. After you type your message, there is a button that allows you to delete your message.',
    technologiesUsed: 'HTML, CSS, SASS, Vanilla JavaScript, Version Control with Github',
    available: false,
    url: 'https://github.com/nss-evening-cohort-8/js-part-deux', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: 'https://github.com/nss-evening-cohort-11/chatty-butterworts',
  },
  {
    title: 'Cool Project',
    screenshot: 'http://gotoflashgames.com/files/file/033.jpg',
    description: 'This is the best project', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: false,
    url: 'https://github.com/nss-evening-cohort-8/js-part-deux', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux',
  },
  {
    title: 'Cool Project',
    screenshot: 'http://gotoflashgames.com/files/file/033.jpg',
    description: 'This is the best project', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: false,
    url: 'https://github.com/nss-evening-cohort-8/js-part-deux', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux',
  },
  {
    title: 'Cool Project',
    screenshot: 'http://gotoflashgames.com/files/file/033.jpg',
    description: 'This is the best project', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://github.com/nss-evening-cohort-8/js-part-deux', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux',
  },
];

const getProjects = () => projects;


export default { getProjects };
