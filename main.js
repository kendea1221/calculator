const result = document.querySelector(".result");  
function calculate() {
    result.value = new Function("return " + result.value)();
}
