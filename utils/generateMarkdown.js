// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license===undefined||license===null||license==='none')
return ' ';
else
return `\n\n## License\n\n${license}`;

}

function renderlicenseTableOfContents(license) {
  if (license===undefined||license===null||license==='none'){
  return ' ';
  }
    
  else
  return `\n\n- [License](#License)`;

}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  //title, Description, Table of Contents, Installation, Usage, Contributing, and Tests
 // const markdownDisplay = ({data}) => {

  /*
    const title = `# ${data.title}`;
    const descriptionTitle = `## Description`;
    const Description = `${data.Description}`;
    
const markdownDisplay = title +'\n\n'+ descriptionTitle+'\n\n'+Description;
    if(data!==null)
      return '\n\n'+markdownDisplay
    
   
    return markdownDisplay;
    */ 
    
/*
    const markdownDisplay = 
    `# ${data.title}\n\n## Description\n\n${data.Description}
    \n\n## Table of Contents\n\n
    - [Description](#Description)
    - [Installation](#Installation)
    - [Usage](#Usage)
    - [Contributing](#Contributing)
    - [License](#License)
    - [Tests](#Tests)
    - [Questions](#Questions)
    \n\n## Installation\n\n${data.Installation}\n\n## Usage\n\n${data.Usage}
    \n\n## Contributing\n\n${data.Contributing}\n\n## License\n\n${data.License}
    \n\n## Tests\n\n${data.Tests}\n\n## Questions\n\n[My GitHub Profile](https://github.com/${data.gitHubUserName})
    \nreach me with additional questions: ${data.email}
    
    
    
    `;
    */
    const markdownDisplay = 
    `# ${data.title}\n\n## Description\n\n${data.Description}
    \n\n## Table of Contents\n
    \n- [Description](#Description)
    \n- [Installation](#Installation)
    \n- [Usage](#Usage)
    \n- [Contributing](#Contributing)${renderlicenseTableOfContents(data.License)}
    \n- [Tests](#Tests)
    \n- [Questions](#Questions)
    \n\n## Installation\n\n${data.Installation}\n\n## Usage\n\n${data.Usage}
    \n\n## Contributing\n\n${data.Contributing}${renderLicenseSection(data.License)}
    \n\n## Tests\n\n${data.Tests}\n\n## Questions\n\n[My GitHub Profile](https://github.com/${data.gitHubUserName})
    \nreach me with additional questions: ${data.email}
    
    
    
    `;

    if(data!==null)
      return `${markdownDisplay}\n\n`;
    else
    return markdownDisplay;
    
}

export default generateMarkdown;
