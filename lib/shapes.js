// Class Shapes w/ constructor initializing the color and the color value
class Shapes {

    constructor() {
        this.color = '';
    }
    setColor(color) {
        this.color = (color);
    }
}

// cirlce class extends Shapes and makes a SVG circle w/ position, size, and the fill color
class circle extends Shapes {
    render() {
        return `<circle cx= '150' cy= '100' r= '100' height= '100%' width= '100%' fill= '${this.color}'>`
    }
}

// square class extends Shapes and creates an SVG rectangle (square) w/ position, size, and the fill color
class square extends Shapes {
    render() {
        return `<rect x= '50' height= '200' width= '200' fill='${this.color}'>`
    }
}

// triangle class extends Shapes and creates an SVG Polygon (triangle) w/ position, size, and the fill color
class triangle extends Shapes {
    render() {
        return `<polygon height= '100%' width= '100%' points= '0,200 300,200, 150,0' fill = '${this.color}'>`
    }
};

module.exports = {circle, square, triangle}