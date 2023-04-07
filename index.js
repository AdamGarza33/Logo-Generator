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
        this.shape = shape.render(shape)
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

function init() {
    inquirer
    .prompt(questions).then((answers) => {
        // Create an SVG object
        const logo = new SVG();

        // Set text properties based on user's answers
        logo.settext(answers.text, answers.color);

        // Set shape properties based on user's answers
        let selectedShape;
        let shapeName;
        switch (answers['shape-image']) {
            case 'Circle':
                shapeName = 'circle'
                selectedShape = new Shapes.Circle(answers.shape);
                break;
            case 'Square':
                shapeName = 'rect'
                selectedShape = new Shapes.Square(answers.shape);
                break;
            case 'Triangle':
                shapeName = 'polygon'
                selectedShape = new Shapes.Triangle(answers.shape);
                break;
            default:
                console.error('Invalid shape selected');
                return;
        }
        
        selectedShape.setShape(shapeName)
        selectedShape.setColor(answers.shape);
        logo.setshape(selectedShape);

        // Render the SVG content and save it to a file
        fs.writeFile('./deliverable/logo.svg', logo.render(), (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('Congrats, you generated a logo.svg!')
            }
        })
    })
}
init();



// write data to file









// function init() {
//     inquirer
//     .prompt(questions).then((answers) => {
//         fs.writeFile('./deliverable/logo.svg', answers.circle.triangle.square, (err) => {
//             if (err) {
//                 console.error(err);
//             } else {
//                 console.log('Congrats, you generated a logo.svg!')
//             }
//         })
//     })
// }
// init();

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

