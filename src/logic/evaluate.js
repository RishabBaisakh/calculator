function evaluate(numberOne, numberTwo, operator) {
  console.log("operator => ", operator, "one => ", numberOne);
  switch (operator) {
    case "+":
      return numberOne + numberTwo;
    case "-":
      return numberOne - numberTwo;
    case "*":
      return numberOne * numberTwo;
    case "÷":
      return numberOne / numberTwo;
    case "%":
      return numberOne * (numberTwo / 100);
  }

  return null;
}

export default evaluate;
