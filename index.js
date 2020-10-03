// Write the user response to a file by chaining the below callback method to the prompt above.
const fs = require('fs');

const markDown = require("./generateMarkdown");

const inquirer = require('inquirer');

// array of questions for user
const questions = () => {
  return inquirer.prompt([

    {
      type: 'input',
      name: 'github',
      message: 'What is your Github username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your e-mail address?',
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is your projects name?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please write a short description of your project:',
    },
    {
      type: 'checkbox',
      name: 'licences',
      message: 'What kind of licenses should your project have?',
      choices:
        [{
          message: "Artistic license 2.0",
          key: "Artistic license 2.0",
          value:
            "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
        },
        {
          message: "MIT",
          key: "MIT",
          value:
            "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        },
        {
          message: "ISC",
          key: "ISC",
          value:
            "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
        },
        {
          message: "IBM Public license",
          key: "IBM Public license",
          value:
            "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
        },
        {
          message: "Mozilla Public license",
          key: "Mozilla Public license",
          value:
            "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
        },
        ],
    },
    {
      type: 'input',
      name: 'repo',
      message: 'What does the user need to know about using the repo?',
    },
    {
      type: 'input',
      name: 'questions',
      message: 'Please provide any further information needed for your project:',
    },
    {
      type: 'checkbox',
      name: 'media',
      message: 'Please check any media you would like to add to your project:',
      choices:
      [{
        message: "Video Media",
        key: "Video Media",
        value:
          "[![README walkthrough.mp4](https://github.com/DCampos07/README-Portfolio/blob/main/assets/README%20walkthrough.mp4)",
      },
      {
        message: "Screenshot",
        key: "Screenshot",
        value:
          "[![README-screenshot.png](https://github.com/DCampos07/README-Portfolio/blob/main/assets/README-screenshot.png)",
    },  
  ],
},
  ]);
}

questions().then((answers) => {
  console.log(answers);

  var template = markDown(answers);
  writeToFile("README.md", template);
});

// function to write README file
function writeToFile(fileName, data) {

  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log('Success!');
  });
}
