// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  let badge = ' ';

  if (license === 'Apache 2.0')
    badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]${renderLicenseLink(license)}\n\n`;
  else if (license === 'MIT')
    badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]${renderLicenseLink(license)}\n\n`;
  else if (license === 'MPL 2.0')
    badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]${renderLicenseLink(license)}\n\n`;
  else if (license === 'BSD 3-Clause')
    badge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]${renderLicenseLink(license)}\n\n`;
  else if (license === undefined || license === null || license === 'none')
    badge = '';

  return badge;



}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  //'Apache 2.0', 'GNU GPLv3', 'MIT','MPL 2.0','BSD 3-Clause','none'
  let link = ' ';

  if (license === 'Apache 2.0')
    link = '(https://opensource.org/licenses/Apache-2.0)';
  else if (license === 'GNU GPLv3')
    link = '(https://www.gnu.org/licenses/gpl-3.0)';
  else if (license === 'MIT')
    link = '(https://opensource.org/licenses/MIT)';
  else if (license === 'MPL 2.0')
    link = '(https://opensource.org/licenses/MPL-2.0)';
  else if (license === 'BSD 3-Clause')
    link = '(https://opensource.org/licenses/BSD-3-Clause)';
  else if (license === undefined || license === null || license === 'none')
    link = ' ';

  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === undefined || license === null || license === 'none')
    return ' ';
  else
    return `\n\n## License\n\n${license}`;

}

function renderlicenseTableOfContents(license) {
  if (license === undefined || license === null || license === 'none')
    return ' ';
  else
    return `\n\n[License](#license)`;

}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  const markdownDisplay = `${renderLicenseBadge(data.license)}# ${data.title}\n\n## Description\n\n${data.description}
    \n\n## Table of Contents\n
    \n[Description](#description)
    \n[Installation](#installation)
    \n[Usage](#usage)
    \n[Contributing](#contributing)${renderlicenseTableOfContents(data.license)}
    \n[Tests](#tests)
    \n[Questions](#questions)
    \n\n## Installation\n\n${data.installation_instructions}\n\n## Usage\n\n${data.usage_information}
    \n\n## Contributing\n\n${data.contribution_guidelines}${renderLicenseSection(data.license)}
    \n\n## Tests\n\n${data.test_instructions}\n\n## Questions\n\n[My GitHub Profile](https://github.com/${data.github_username})
    \nreach me with additional questions: ${data.email}
    `;

 
  return markdownDisplay;


}

export default generateMarkdown;
