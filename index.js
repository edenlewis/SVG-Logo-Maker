const inquirer = require("inquirer");
const fs = require("fs")
const {Triangle, Circle, Square} = require("./libs/shapes")
inquirer.prompt([
    {
      type: "list",
      name: "chosenShape",
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "What color would you like your shape?(please format rgb, hex, or color name)",
    },
    {
      type: "input",
      name: "text",
      message: "What three letters would you like in your logo?",
    },
    {
      type: "input",
      name: "textColor",
      message: "What color would you like your text?",
    },
  ])
  .then(({ text, textColor, chosenShape, shapeColor }) => {
    let shape;
    switch (chosenShape) {
      case "Circle":
        shape = new Circle();
        break;
      case "Triangle":
        shape = new Triangle();
        break;
      default:
        shape = new Square();
        break;
    } 
    shape.setColor(shapeColor);

    let svg =
    `<svg version="1.1" width="300" height="210" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
   <text x="150" y="130" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
 </svg>
    `;

    return fs.writeFile("logo.svg", svg, (err) => {err ? console.log(err): console.log("success")}
    );

  });
