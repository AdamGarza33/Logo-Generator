// Class Shapes w/ constructor initializing the color and the color value
class Shapes {

    constructor() {
        this.color = '';
        this.shape = '';
    }
    setColor(color) {
        this.color = (color);
    }
    setShape(shape){
        this.shape = shape;
    }
    render() {
        console.log('this.shape', this.shape);
        return `<${this.Shapes} cx= '150' cy= '100' r= '100' height= '100%' width= '100%' fill= '${this.color}'></${this.shape}>`
    }
}

// cirlce class extends Shapes and makes a SVG circle w/ position, size, and the fill color
class Circle extends Shapes {
    render() {
        return `<circle cx= '150' cy= '100' r= '100' height= '100%' width= '100%' fill= '${this.color}'></circle>`
    }
}

// square class extends Shapes and creates an SVG rectangle (square) w/ position, size, and the fill color
class Square extends Shapes {
    render() {
        return `<rect x= '50' height= '200' width= '200' fill='${this.color}'></rect>`
    }
}

// triangle class extends Shapes and creates an SVG Polygon (triangle) w/ position, size, and the fill color
class Triangle extends Shapes {
    render() {
        return `<polygon height= '100%' width= '100%' points= '0,200 300,200, 150,0' fill = '${this.color}'></polygon>`
    }
};

module.exports = {Circle, Square, Triangle}