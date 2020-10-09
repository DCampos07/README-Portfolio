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
   
   * [Usage](#usage)

   * [Credits](#credits)
   
   * [Project Media](#media)


  ## Contact Information:
  ${data.github} 
  ${data.email}

  ## Installation:
    ${data.installation}

  ## Usage:
    ${data.usage}
  
  ## Credits:
  ${data.credits}

  ### License:
  ${data.licences}

  ## Project Media:
  ${data.media}
`;
}
module.exports = generateMarkdown;
