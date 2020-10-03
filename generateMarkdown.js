// function to generate markdown for README
const generateMarkdown = (data) => {
  return `

  # Title:
   ${data.title}

  ## Description:
   ${data.description}

  ## Table of Contents:
   * [GitHub Repo](#github)
   * [E-mail](#email)
   * [Licenses](#licences)
   * [Usage](#repo)
   * [Questions](#questions)
   * [Project Media](#media)


  ## Contact Information:
    ${data.github} ${data.email}

  ## Usage:
   ${data.repo}
  
  ## Questions and Info:
  ${data.questions}
  
  ### License:
  ${data.licences}

  ## Project Media:
  ${data.media}
`;
}
module.exports = generateMarkdown;
