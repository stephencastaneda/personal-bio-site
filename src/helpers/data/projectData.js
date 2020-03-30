// const projects = [
//   {
//     title: 'Cool Project',
//     screenshot: 'http://gotoflashgames.com/files/file/033.jpg',
//     description: 'This is the best project', // A good project description includes 'the what', 'the why', and 'the how'.
//     technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
//     available: true,
//     url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
//     githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
// },
// {
//     title: "Cool Project",
//     screenshot: "http://gotoflashgames.com/files/file/033.jpg",
//     description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
//     technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
//     available: false,
//     url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
//     githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
// },
//
//     title: "Cool Project",
//     screenshot: "http://gotoflashgames.com/files/file/033.jpg",
//     description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
//     technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
//     available: false,
//     url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
//     githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
// },
// {
//     title: "Cool Project",
//     screenshot: "http://gotoflashgames.com/files/file/033.jpg",
//     description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
//     technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
//     available: false,
//     url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
//     githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
// },
// {
//     title: "Cool Project",
//     screenshot: "http://gotoflashgames.com/files/file/033.jpg",
//     description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
//     technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
//     available: true,
//     url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
//     githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
// },
// ]
// const printToDom = (divID, textToPrint) => {
//     const selectedDiv = document.getElementById(divID);
//     selectedDiv.innerHTML = textToPrint
// };
//     const createProjectCards = () => {
//         let domString = '';
//         for(let i = 0; i < projects.length; i++){
//             if (projects[i].available != false) {

//                 domString += '<div class="projectcards">';
//                 domString +=   `<header><h1 class="name">${projects[i].title}</h1></header>`;
//                 domString +=   `<p> <img src="${projects[i].screenshot}"></p>`;
//                 domString +=   `<section class="color"> ${projects[i].description}</section>`;
//                 domString +=   `<p class="skill"> ${projects[i].technologiesUsed}</p>`;
//                 domString +=   `<p id="available"></p>`;
//                 domString +=   `<a href=" ${projects[i].url}">GitHub</a>`;
//                 domString +=   `<a href=" ${projects[i].githubUrl}">GITHUB URL</a>`;
//                 domString += '</div>';
//             }

//         }
//         console.log(domString)
//         printToDom('projectsPage', domString);
//     }
//     createProjectCards();
