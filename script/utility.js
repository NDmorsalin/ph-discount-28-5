function elementToValue(id) {
  const element = document.getElementById(id);
  const text = element.innerText;
  const num = parseFloat(text);

  return num;
}

function inputValue(id){
  const element = document.getElementById(id);
  const text = element.value || 0;
  const num = parseFloat(text);
  
  element.value = ''
  return num;
}

function inputValueText(id){
  const element = document.getElementById(id);
  const text = element.value || '';
  
  element.value = ''
  return text;
}