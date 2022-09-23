// Define all the necessary data into one structure
var pwmDivClkFrqSldrVars = {
    htmlInputId: 'pwmDivClkFrqSldr',
    sldrElem: null,
    sldrVal: 10,
}

// Define necessary functions
function updatepwmDivClkFrqSldrVal() {
    pwmDivClkFrqSldrVars.sldrVal = parseFloat(pwmDivClkFrqSldrVars.sldrElem.value);
    pwmDivClkFrqSldrVars.sldrElem.nextElementSibling.value = pwmDivClkFrqSldrVars.sldrVal.toFixed(1);
}

function playpwmDivClkFrqSldrAnim() {
    pwmDivClkFrqSldrVars.sldrElem.disabled = false;
    pwmDivClkFrqSldrVars.sldrElem.addEventListener('input', updatepwmDivClkFrqSldrVal);
}

function resetpwmDivClkFrqSldrAnim() {
    pwmDivClkFrqSldrVars.sldrVal = 10;
    pwmDivClkFrqSldrVars.sldrElem.value = 10;
    pwmDivClkFrqSldrVars.sldrElem.nextElementSibling.value = pwmDivClkFrqSldrVars.sldrVal.toFixed(1);
    pwmDivClkFrqSldrVars.sldrElem.disabled = true;
    pwmDivClkFrqSldrVars.sldrElem.removeEventListener('input', updatepwmDivClkFrqSldrVal);
}

function initpwmDivClkFrqSldr() {
    pwmDivClkFrqSldrVars.sldrElem = document.getElementById(pwmDivClkFrqSldrVars.htmlInputId);
    pwmDivClkFrqSldrVars.sldrElem.value = 10;
    pwmDivClkFrqSldrVars.sldrElem.nextElementSibling.value = pwmDivClkFrqSldrVars.sldrVal.toFixed(1);
    pwmDivClkFrqSldrVars.sldrElem.disabled = true;
}

// Register this element with jsAnim.js
registerAnimation(0, 3, initpwmDivClkFrqSldr, playpwmDivClkFrqSldrAnim, resetpwmDivClkFrqSldrAnim);