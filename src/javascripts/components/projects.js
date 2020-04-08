import projectData from '../../helpers/data/projectData';
import utils from '../../helpers/utils';

const projectCardBuilder = () => {
  const projects = projectData.getProjects();
  let domString = '';
  projects.forEach((project) => {
    domString += '<div class="card mb-5 col-lg-5" id="project-cards" style="width: 18rem;">';
    domString += `<img src=${project.screenshot} class="card-img-top project-cards m-0" alt="...">`;
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title">${project.title}</h5>`;
    // domString += `<p class="card-text">${project.description}</p>`;
    domString += `<a href="#${project.url}" class="btn btn-primary text-center">Url</a>`;
    domString += `<a href="#${project.githubUrl}" class="btn btn-primary text-center">gitHub Url</a>`;
    domString += '</div>';
    domString += '</div>';
  });

  utils.printToDom('projects-page', domString);
};

export default { projectCardBuilder };
