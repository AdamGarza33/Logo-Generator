// Import modules
const fs = require('fs');
const inquirer = require('inquirer');
const {circle, square, triangle} = require('./lib/shapes.js');
const Shapes = require('./lib/shapes.js')

class SVG {
    constructor() {
        this.text = ''
        this.shape = ''
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shape}${this.text}</svg>`
    }
    settext(text, color) {
        this.text = `<text x= '150' y= '125' font-size= '60' text-anchor= 'middle' fill= '${color}'>${text}</text>`
    }
    setshape(shape) {
        this.shape =shape.render()
    }
}

// Array of questions
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 characters:'
    },
    {
        type: 'input',
        name: 'color',
        message: 'Text Color| Enter color keyword or a hexadecimal number:'
    },
    {
        type: 'input',
        name: 'shape',
        message: 'Shape Color| Enter color keyword or a hexadecimal number:'
    },
    {
        type: 'list',
        name: 'shape-image',
        message:'Shape| Choose a shape that you would like to use:',
        choices: ['Circle', 'Square', 'Triangle']
    }
];

// write data to file
function init() {
    inquirer
    .prompt(questions).then((answers) => {
        fs.writeFile('./deliverable/logo.svg', answers.circle.triangle.square, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('Congrats, you generated a logo.svg!')
            }
        })
    })
}
init();

// function writeToFile(data) {
//     const fileName = './deliverable/logo.svg'
// 	console.log("Writing [" + data + "] to file [" + fileName + "]")
//     filesystem.writeFile(fileName, data, function (err) {
//         if (err) {
//             return console.log(err);
//         }
//         console.log("Congrats, you generated a logo.svg!");
//     });
// }

