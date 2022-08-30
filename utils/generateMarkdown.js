const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'GNU':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'MPL':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      break;
    case 'Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
    default: 
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case 'MIT':
      return '[MIT License](https://opensource.org/licenses/MIT)';
      break;
    case 'GNU':
      return '[GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'MPL':
      return '[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)';
      break;
    case 'Unlicense':
      return '[The Unlicense](http://unlicense.org/)';
    default: 
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if(data.license){
    let text = fs.readFileSync(`./utils/licenses/${data.license}.txt`).toString();
    const year = new Date().getFullYear();
    text = text.replace('[.year.]', ''+year);
    text = text.replace('[.name.]', `${data.gitHubUsername}`);
    return text;
  }
  return '';
}

function generateTableOfContents() {
  return `  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)`
}

function generateMarkdown(data) {
  const toc = generateTableOfContents();
  const licenseText = renderLicenseSection(data);
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

${toc}

## Installation

${data.installation}

## Usage

${data.usage}

## License

${licenseText}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

${data.contact}

  - GitHub: [${data.gitHubUsername}](https://github.com/${data.gitHubUsername})

  - Email: [${data.email}](mailto:${data.email})
`;
};

module.exports = {generateMarkdown};
