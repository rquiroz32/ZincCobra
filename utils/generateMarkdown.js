// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # ${data.description}

  ${data.installInstructions}

`;
}

module.exports = generateMarkdown;
