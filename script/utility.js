function elementToValue(id) {
  const element = document.getElementById(id);
  const text = element.innerText;
  const num = parseFloat(text);

  return num;
}

