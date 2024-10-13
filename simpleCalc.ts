function simpleCalc(a: number, b: number, operation: string): number | null {
  switch (operation) {
    case "+":
      return a + b;
      break;
    case "-":
      return a - b;
      break;
    case "*":
      return a * b;
      break;
    case "/":
      return a / b;
      break;

    default:
      return null;
      break;
  }
}

console.log(simpleCalc(1, 2, "+"));
console.log(simpleCalc(5, 2, "-"));
console.log(simpleCalc(3, 2, "*"));
console.log(simpleCalc(8, 2, "/"));
console.log(simpleCalc(7, 2, "/"));
