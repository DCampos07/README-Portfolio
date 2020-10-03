// function to generate markdown for README
const generateMarkdown = (data) => {
  return `
  #### License:
   ${data.licences}

  # Title:
   ${data.title}

  ## Description:
   ${data.description}

  ## Table of Contents:
   * [GitHub Repo](#userName)
   * [E-mail](#email)
   * [Installation](#dependencies)
   * [Commands](#test)
   * [Usage](#usingRepo)
   * [Contributions](#contributions)

  ## Contact Information:
    ${data.userName} ${data.email}

  ## Installation:
   ${data.dependencies}

  ## Usage:
   ${data.usingRepo}

  ## Credits:
  ${data.credits}

  ## Contributions:
  ${data.contributions}

  ## Tests:
  ${data.test}
  
  ## Questions and Info:
  ${data.questions}
`;
}
module.exports = generateMarkdown;
