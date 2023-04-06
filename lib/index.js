// Import modules
const fs = require('fs');
const inquirer = require('inquirer');
const {circle, square, triangle} = require('./lib/shapes');
const { default: Choices } = require('inquirer/lib/objects/choices');

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
