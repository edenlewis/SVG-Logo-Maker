const triangle = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');
const circle = new Circle();
shape.setColor("blue");
expect(shape.render()).toEqual('<circle="cx="50" cy="50" r="40" fill="blue"/>');
const square = new Square();
shape.setColor("blue");
expect(shape.render()).toEqual('<rect x="50" y="20" width="150" height="150" fill="blue"/>');