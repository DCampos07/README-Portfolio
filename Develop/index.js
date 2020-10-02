const fs = require('fs');
const inquirer = require('inquirer');

 // Write the user response to a file by chaining the below callback method to the prompt above.
  



// array of questions for user
const questions = inquirer
.prompt([
  {
    type: 'input',
    name: 'username',
    message: 'What is your Github username?'
  },
  {
    type: 'input',
    message: 'email',
    name: 'What is your e-mail address?',
  },
  {
    type: 'input',
    message: 'project',
    name: 'What is your projects name?',
  }
  {
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project'
  },
  {
    type: 'checklist',
    message: 'licences',
    message: 'What kind of licenses shourld your project have?',
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
            {
    type: 'input',
    message: 'dependencies',
    name: 'What command should be run to install dependencies?',
  }
  {
    type: 'input',
    message: 'test',
    name: 'What command should be run to run tests?',
  }
  {
    type: 'input',
    message: 'using repo',
    name: 'What does the user need to know about using the repo?',
  }
  {
    type: 'input',
    message: 'contributing',
    name: 'What does the user need to know about using the repo?',
  }

])


// function to write README file
.then(function(data) {
    // Bonus: Generate the name of your user file from their input
    const filename =
      data.name
        .toLowerCase()
        .split(' ')
        .join('') + '.json';

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {
      if (err) {
        return console.log(err);
      }

      console.log('Success!');
    });
  });

// function to initialize program
function init() {

}

// function call to initialize program
init();
