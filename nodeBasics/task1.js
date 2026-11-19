
function getArea(width, height) {
    return width * height;
}

// Function Declaration
console.log("Function Declaration:", getArea(5, 10));

// Function Expression
const getAreaExpression = function(width, height) {
    return width * height;
};

console.log("Function Expression:", getAreaExpression(5, 10));

// Arrow Function
const getAreaArrow = (width, height) => {
    return width * height;
};

console.log("Arrow Function:", getAreaArrow(5, 10));
