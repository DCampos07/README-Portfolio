 // Write the user response to a file by chaining the below callback method to the prompt above.
 const fs = require('fs');

 const markDown = require("./Develop/utils/generateMarkdown");

 const inquirer = require('inquirer');

// array of questions for user
const questions = () => {
 return inquirer.prompt([
  
  { type: 'input',
    name: 'username',
    message: 'What is your Github username?',
  },
  { type: 'input',
    name: 'email',
    message: 'What is your e-mail address?',
  },
  { type: 'input',
    name: 'title',
    message: 'What is your projects name?',
  },
  { type: 'input',
    name: 'description',
    message: 'Please write a short description of your project',
  },
  { type: 'checklist',
    name: 'licences',
    message: 'What kind of licenses should your project have?',
                choices:
                    [
                    'Artistic license 2.0',
                    'MIT',
                    'ISC',
                    'Microsoft Public license',
                    'Mozilla Public license',
                    'Academic Free license',
                    ],
  },
  { type: 'input',
    name: 'dependencies',
    message: 'What command should be run to install dependencies?',
  },
  { type: 'input',
    name: 'test',
    message: 'What command should be run to run tests?',
  },
  { type: 'input',
    name: 'usingRepo',
    message: 'What does the user need to know about using the repo?',
  },
  { type: 'input',
    name: 'contributions',
    message: 'What contributions did you have for this project?',
  },
]);}

questions().then((answers) => {
    console.log(answers);

    var template = markDown(answers);
    writeToFile("challenge.md",template);
});

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(filename, data, function (err) {
      if (err) {
        return console.log(err);
      }

      console.log('Success!');
    });
  }
