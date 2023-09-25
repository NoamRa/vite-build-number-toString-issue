export function setupRepro(element) {
  const someNumber = 123456789;
  
  // bundled, this code will be 123456789.toString()
  const someNumberString = someNumber.toString();

  element.innerHTML = `my number is ${someNumberString} `;
  debugger;
}
