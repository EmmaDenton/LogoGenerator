const inquirer = require('inquirer');
const fs = require('fs');
const fileName = 'Logo.svg';

const questions = [
  {
    type: 'input',
     name: 'text',
     message: 'Which 3 letters should be used in the logo?',
   },
   {
    type: 'input',
     name: 'textColour',
     message: 'What colour should the text be?',
   },
   {
     type: 'list',
     name: 'shape',
     message: 'What shape should the logo be?',
     choices: ['circle', 'rectangle', 'triangle'],
   },
   {
    type: 'input',
     name: 'shapeColour',
     message: 'What colour should the shape be?',
   },
 ];

const generateSVG = ({
text, textColour, shape, shapeColour
}) => {
  if (shape === circle)
   return 
   `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
   <circle cx="100" cy="100" r="50" fill="${shapeColour}" /><text x="80" y="120" font-size="70px" fill="${textColour}">${text}</text>
    </svg>`
  if (shape === rectangle)
  return
  `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
  <rect cx="100" cy="100" r="50" fill="${shapeColour}" />    <text x="80" y="120" font-size="70px" fill=""${textColour}">${text}</text>
  </svg>`
  if (shape === triangle)
  return
  `<svg height="200" width="300"> <polygon points="50 15, 100 100, 0 100" style="fill:${shapeColour}" /> <text x="80" y="120" font-size="70px" fill="${textColour}">${text}</text> </svg>`
 };

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
  );
}

function init() {
  inquirer.prompt(questions).then((answers) => {
     const data = generateSVG(answers);
    writeToFile(fileName, data);
   });
 }

init();
