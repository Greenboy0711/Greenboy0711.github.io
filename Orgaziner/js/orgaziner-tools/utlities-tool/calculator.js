let answer = 0;
let previousEquation = "";
let currentEquation = "";
const equation = { num1: null, operation: null, num2: null, answer: null };
const equationHistory = [];
const calculatorKeys = [];

const getCalculatorKeys = () => {
  const keys1 = document.getElementsByClassName("calculator-key1");
  const keys2 = document.getElementsByClassName("calculator-key2");
  const keys3 = document.getElementsByClassName("calculator-key3");

  for (let i = 0; i < keys1.length; i++) {
    calculatorKeys.push(keys1[i].id);
  }
  for (let i = 0; i < keys2.length; i++) {
    calculatorKeys.push(keys2[i].id);
  }
  for (let i = 0; i < keys3.length; i++) {
    calculatorKeys.push(keys3[i].id);
  }
};

function delay(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

document.addEventListener("keydown", async function (event) {
  if (event.key === "Enter") {
    enterEquation();
    return;
  }
  for (let i = 0; i < calculatorKeys.length; i++) {
    const calculatorKey = calculatorKeys[i];
    if (event.key === calculatorKey) {
      const key = document.getElementById(event.key);
      if (
        event.key === "+" ||
        event.key === "-" ||
        event.key === "*" ||
        event.key === "/" ||
        event.key === "^"
      ) {
        keyOperation(event.key);
      } else if (event.key === "!") {
        keyModify(event.key);
      } else {
        keyClick(event.key);
      }
      key.style.transform = "translateY(5%) scale(95%)";
      key.style.boxShadow = "none";
      key.style.opacity = "0.5";
      await delay(155);
      key.style.transform = "";
      key.style.boxShadow = "";
      key.style.opacity = "";
      break;
    }
  }
});

const keyClick = (key) => {
  if (key === "Backspace") {
    if (!currentEquation) {
      previousEquation = "";
      answer = 0;
    } else {
      if (equation.num2) {
        equation.num2 = null;
      } else if (equation.operation) {
        equation.operation = null;
      } else if (equation.num1) {
        equation.num1 = null;
      }
      currentEquation = currentEquation.substring(
        0,
        currentEquation.length - 1
      );
    }
  } else if (key === "Delete") {
    equation.num1 = null;
    equation.num2 = null;
    equation.operation = null;
    equation.answer = null;
    currentEquation = "";
    previousEquation = "";
    answer = 0;
  } else if (key === "Switch") {
    if (equation.num1 && equation.operation) {
      equation.num2 = -equation.num2;
      currentEquation = equation.num2;
    } else {
      equation.num1 = -equation.num1;
      currentEquation = equation.num1;
    }
  } else if (key === "Pi") {
    if (equation.num1 === null) {
      previousEquation = "";
    }
    if (equation.operation) {
      equation.num2 = Math.PI;
    } else {
      equation.num1 = Math.PI;
    }
    currentEquation = Math.PI;
  } else if (key === "E") {
    if (equation.num1 === null) {
      previousEquation = "";
    }
    if (equation.operation) {
      equation.num2 = Math.E;
    } else {
      equation.num1 = Math.E;
    }
    currentEquation = Math.E;
  } else {
    if (equation.num1 === null) {
      previousEquation = "";
    }
    if (currentEquation.length >= 38) {
      return;
    }
    answer = 0;
    currentEquation += key;
    if (!equation.num1 === null || equation.operation) {
      equation.num2 = parseFloat(currentEquation);
    } else {
      equation.num1 = parseFloat(currentEquation);
    }
  }
  render();
};

const keyOperation = (key) => {
  if (equation.num2) {
    enterEquation();
  } else {
    if (!answer == 0) {
      equation.num1 = answer;
      previousEquation = answer + key;
    } else if (equation.operation) {
      previousEquation = equation.num1 + key;
    } else if (!equation.num1) {
      equation.num1 = 0;
      previousEquation = equation.num1 + key;
    } else {
      currentEquation += key;
      previousEquation = currentEquation;
    }
    equation.operation = key;
    currentEquation = "";
    answer = 0;
    render();
  }
};

const keyModify = (key) => {
  let number;
  if (equation.num2) {
    number = equation.num2;
  } else if (equation.num1) {
    number = equation.num1;
  } else {
    number = answer;
  }

  currentEquation = number + key;

  if (key === "!") {
    if (number === 0 || number === 1) {
      number = 1;
    } else if (number < 0) {
    } else {
      for (let i = number - 1; i > 1; i--) {
        number *= i;
      }
    }
  } else if (key === "||") {
  }

  if (equation.num2) {
    equation.num2 = number;
  } else if (equation.num1) {
    equation.num1 = number;
  } else {
    equation.num1 = number;
  }
  answer = 0;
  render();
};

function enterEquation() {
  if (currentEquation) {
    if (equation.operation === "+") {
      equation.answer = equation.num1 + equation.num2;
    } else if (equation.operation === "-") {
      equation.answer = equation.num1 - equation.num2;
    } else if (equation.operation === "*") {
      equation.answer = equation.num1 * equation.num2;
    } else if (equation.operation === "/") {
      equation.answer = equation.num1 / equation.num2;
    } else if (equation.operation === "^") {
      equation.answer = equation.num1 ** equation.num2;
    }
    if (equation.operation) {
      previousEquation =
        equation.num1.toString() +
        equation.operation +
        equation.num2.toString();
    } else {
      equation.answer = equation.num1;
      previousEquation = currentEquation;
    }
    equationHistory.push(equation);
    answer = equation.answer;
    equation.num1 = null;
    equation.num2 = null;
    equation.operation = null;
    equation.answer = null;
    currentEquation = "";
    render();
  }
}

async function render() {
  const answerDisplay = document.getElementById("answer-display");
  if (currentEquation) {
    answerDisplay.style.transform = "translateY(-2.5%) scale(101%)";
    await delay(110);
    console.log(currentEquation + " First if");
    answerDisplay.innerText = currentEquation;
    answerDisplay.style.transform = "";
  } else {
    answerDisplay.style.transform = "translateY(-2.5%) scale(101%)";
    await delay(110);
    answerDisplay.innerText = answer;
    answerDisplay.style.transform = "";
  }
  const equationDisplay = document.getElementById("equation-display");
  equationDisplay.innerText = previousEquation;
}

getCalculatorKeys();
render();
