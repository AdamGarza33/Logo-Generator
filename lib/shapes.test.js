// Import class circle, square, triangle from shapes.js
const {circle, square, triangle} = require('./shapes');

// Test case checks

// circle
describe('circle', () => {
    const shape = new circle();
    var color = ('blue')
    shape.setColor(color);
    expect(shape.render()).toEqual(`cx= '150' cy= '100' r= '100' height= '100%' width= '100%' fill= '${this.color}'>`);
});

// square
describe('square', () => {
    const shape = new square();
    var color = ('yellow')
    shape.setColor(color);
    expect(shape.render()).toEqual(`<rect x= '50' height= '200' width= '200' fill='${this.color}'>`);
});

// triangle 
describe('triangle', () => {
    const shape = new triangle();
    var color = ('orange')
    shape.setColor(color);
    expect(shape.render()).toEqual(`<polygon height= '100%' width= '100%' points= '0,200 300,200, 150,0' fill = '${this.color}'>`);
});