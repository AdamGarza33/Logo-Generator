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