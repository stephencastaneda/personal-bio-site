import projectData from '../../helpers/data/projectData';
import utils from '../../helpers/utils';

const popupInit = () => {
  $('[data-toggle="popover"]').popover();
};

const projectCardBuilder = () => {
  const projects = projectData.getProjects();
  let domString = '';
  projects.forEach((project) => {
    domString += '<div class="card mb-5 col-lg-5" id="project-cards" style="width: 18rem;">';
    domString += `<img src=${project.screenshot} class="card-img-top project-cards m-0" alt="...">`;
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title">${project.title}</h5>`;
    // domString += `<p class="card-text">${project.description}</p>`;
    // domString += '<div class="overlay">';
    // domString += `${project.description}`;
    // domString += '<div>';
    domString += '<div class="overlay">';
    domString += `<div class="description-text"><span>${project.description}</span></div>`;
    domString += `<button type="button" class="btn btn-secondary popover-button" data-trigger="focus" data-container="body" data-toggle="popover" data-placement="right" data-content="${project.technologiesUsed}">`;
    domString += 'TECH USED';
    domString += '</button>';
    domString += '</div>';
    domString += '<button class="btn btn-dark website-link-btn mr-2"><i class="fas fa-globe"></i></a></button>';
    domString += `<a class="btn btn-dark git-hub-btn" href="${project.githubUrl}"><i class="fab fa-github"></i></a>`;
    domString += '</div>';
    domString += '</div>';
  });

  utils.printToDom('projects-page', domString);
  $('body').on('click', '.popover-button', popupInit);
};

export default { projectCardBuilder };
