// function to generate markdown for README
const generateMarkdown = (data) => {
  return `

  # Title:
   ${data.title}

  ## Description:
   ${data.description}

  ## Table of Contents:
   * [GitHub Repo](#user)
   * [E-mail](#email)
   * [Licenses](#licences)
   * [Usage](#usage)
   * [Questions](#questions)
   * [Project Media](#media)


  ## Contact Information:
    ${data.userName} ${data.email}

  ## Usage:
   ${data.usingRepo}
  
  ## Questions and Info:
  ${data.questions}
  
  ### License:
  ${data.licences}

  ## Project Media:
  ${data.media}
`;
}
module.exports = generateMarkdown;
