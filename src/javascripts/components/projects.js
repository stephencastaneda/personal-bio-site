const createProjectCards = () => {
  let domString = '';
 for(let i = 0; i < projects.length; i++){
  if (projects[i].available != false) {
  domString += '<div class="projectcards">';
  domString +=   `<header><h1 class="name">${projects[i].title}</h1></header>`;
  domString +=   `<p> <img src="${projects[i].screenshot}"></p>`;
  domString +=   `<section class="color"> ${projects[i].description}</section>`;
  domString +=   `<p class="skill"> ${projects[i].technologiesUsed}</p>`;
  domString +=   `<p id="available"></p>`;
  domString +=   `<a href=" ${projects[i].url}">GitHub</a>`;
 domString +=   `<a href=" ${projects[i].githubUrl}">GITHUB URL</a>`;
domString += '</div>';
              }
  
          }
          console.log(domString)
          printToDom('projectsPage', domString);
      }
      createProjectCards();