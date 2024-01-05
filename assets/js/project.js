// Projects section.
let projects = [
/*     {
        image: "",
        title: "",
        techstack: "",
        description: "",
        url: ""
    }, */
    {
        image: "/images/github.jpg",
        title: "More details on GitHub...",
        url: "https://github.com/ODurcain"
    }
];

// Iteratively create image grids for the "Projects" section.
function createProjectGrids(project) {
    // Create a div element for the project item.
    const projectItem = document.createElement("div");
    projectItem.classList.add("projects-item");

    // Create an image element for the project item.
    const projectImage = document.createElement("img");
    projectImage.classList.add("projects-img");
    projectImage.src = project.image;

    // Create a title element for the project item.
    const projectTitle = document.createElement("h3");
    projectTitle.classList.add("projects-title");
    projectTitle.textContent = project.title;
    projectImage.addEventListener("click", function() {
        window.location.assign(project.url);
    });

    // Create a tech stack element for the project item.
    const projectTechStack = document.createElement("h3");
    projectTechStack.classList.add("projects-techstack");
    
    // If the project has a tech stack, then display it.
    if (project.techstack !== undefined) {
        projectTechStack.textContent = "Tools used: " +  project.techstack;
    }

    // Create a description element for the project item.
    const projectDesc = document.createElement("h4");
    projectDesc.classList.add("projects-desc");
    projectDesc.textContent = project.description;

    // Append the image, title, and description elements to the project item.
    projectItem.appendChild(projectImage); 
    projectItem.appendChild(projectTitle);
    projectItem.appendChild(projectTechStack);
    projectItem.appendChild(projectDesc);
    return projectItem;
}

// Get the project grid element.
const projectGrid = document.getElementById("projects-grid");

// Add project items to the grid.
projects.forEach(project => {
    const projectItem = createProjectGrids(project);
    projectGrid.appendChild(projectItem);
});