let display = document.getElementById('display');
let memory = 0;

// Append number or dot to display
function appendNumber(num) {
  display.value += num;
}

// Append operator (+, -, *, /, %)
function appendOperator(op) {
  display.value += op;
}

// Clear display
function clearDisplay() {
  display.value = '';
}

// Square root
function squareRoot() {
  try {
    display.value = Math.sqrt(eval(display.value));
  } catch {
    display.value = 'Error';
  }
}

// Evaluate expression
function calculate() {
  try {
    let expression = display.value;
    let result = expression.includes('%') ? eval(expression.replace('%', '/100')) : eval(expression);
    display.value = result;
  } catch {
    display.value = 'Error';
  }
}

// Memory functions
function memoryAdd() {
  try {
    const result = eval(display.value);
    if (!isNaN(result) && result !== undefined) {
      memory += parseFloat(result);
      alert("Added to memory: " + result); // Optional visual feedback
    } else {
      alert("Invalid expression.");
    }
  } catch (e) {
    alert("Error: " + e.message);
  }
}


function memorySubtract() {
  try {
    const result = eval(display.value);
    if (!isNaN(result) && result !== undefined) {
      memory -= parseFloat(result);
      alert("Subtracted from memory: " + result); // Optional
    } else {
      alert("Invalid expression.");
    }
  } catch (e) {
    alert("Error: " + e.message);
  }
}

function memoryRecall() {
  display.value = memory.toString();
}

function memoryClear() {
  memory = 0;
}



// Keyboard support
document.addEventListener('keydown', (e) => {
  const key = e.key;
  if (!isNaN(key) || key === '.') appendNumber(key);
  else if (['+', '-', '*', '/'].includes(key)) appendOperator(key);
  else if (key === 'Enter' || key === '=') calculate();
  else if (key === 'Escape') clearDisplay();
  else if (key === 'Backspace') display.value = display.value.slice(0, -1);
  else if (key === '%') appendOperator('%');
});
