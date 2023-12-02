const { Triangle, Circle, Square } = require("./shapes");

describe("Test the Triangle class", () => {
  test("will this render the shape element", () => {
    const triangle = new Triangle();
    triangle.setColor("blue");
    expect(triangle.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue"/>'
    );
  });
});
describe("Test the Triangle class", () => {
  test("will this render the shape element", () => {
    const square = new Square();
    square.setColor("blue");
    expect(square.render()).toEqual(
      '<rect x="50" y="20" width="300" height="300" fill="blue"/>'
    );
  });
});
describe("Test the Circle class", () => {
  test("will this render the shape element", () => {
    const circle = new Circle();
    circle.setColor("blue");
    expect(circle.render()).toEqual(
      '<circle cx="200" cy="200" r="180" fill="blue"/>'
    );
  });
});
// const square = new Square();
