const buttons = document.querySelectorAll("button");
const inputField = document.getElementById("result")

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    const buttonValue = buttons[i].textContent;
    if (buttonValue === "C") {
      clearResult();
    }else if(buttonValue==="="){
        calculateResult()
    }
    else{
        appendValue(buttonValue)
    }
  });
}

function clearResult(){
inputField.value = ""
}
function calculateResult(){
    inputField.value = eval(inputField.value)

}
function appendValue(buttonValue){
inputField.value = inputField.value +buttonValue
}