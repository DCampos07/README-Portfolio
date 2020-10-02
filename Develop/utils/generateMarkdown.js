// function to generate markdown for README
function generateMarkdown(data) {
  return `

  ### License
   ${data.licenses}

  # Title
   ${data.title}

  ## Description
   ${data.description}

  ## Table of Contents
   * [Project Name](#username)
   * [Contact Information](#email)
   * [Description](#description)
   * [Installation](#dependencies)
   * [Commands](#test)
   * [Usage](#using-repo)
   * [Contributions]

  ## Installation
   ${data.dependencies}

  ## Usage
   ${data.using-repo}

  ## Credits
  ${data.credits}

  ## Contributions
  ${data.contributions}

  ## Tests
  ${data.test}
  
  ## Questions and Info
  ${data.info1}
  ${data.info2}
`;
}

module.exports = generateMarkdown;
