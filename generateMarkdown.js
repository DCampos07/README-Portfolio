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
   * [GitHub Repo](#user)
   * [E-mail](#email)
   * [Installation](#dependencies)
   * [Commands](#test)
   * [Usage](#usage)
   * [Contributions](#contributions)
   * [Questions](#questions)
   * [Project Media](#media)


  ## Contact Information:
    ${data.userName} ${data.email}

  ## Installation:
   ${data.dependencies}

  ## Usage:
   ${data.usingRepo}

  ## Contributions:
  ${data.contributions}

  ## Tests:
  ${data.test}
  
  ## Questions and Info:
  ${data.questions}
  
  ### Project Media:
  ${data.media}
`;
}
module.exports = generateMarkdown;
