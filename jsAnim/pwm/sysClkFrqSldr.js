// Define all the necessary data into one structure
var pwmSysClkFrqSldrVars = {
    htmlInputId: 'pwmSysClkFrqSldr',
    sldrElem: null,
    sldrVal: 10,
}

// Define necessary functions
function updatepwmSysClkFrqSldrVal() {
    pwmSysClkFrqSldrVars.sldrVal = parseFloat(pwmSysClkFrqSldrVars.sldrElem.value);
    pwmSysClkFrqSldrVars.sldrElem.nextElementSibling.value = pwmSysClkFrqSldrVars.sldrVal.toFixed(1);
}

function playpwmsysClkFrqSldrAnim() {
    pwmSysClkFrqSldrVars.sldrElem.disabled = false;
    pwmSysClkFrqSldrVars.sldrElem.addEventListener('input', updatepwmSysClkFrqSldrVal);
}

function resetpwmsysClkFrqSldrAnim() {
    pwmSysClkFrqSldrVars.sldrVal = 10;
    pwmSysClkFrqSldrVars.sldrElem.value = 10;
    pwmSysClkFrqSldrVars.sldrElem.nextElementSibling.value = pwmSysClkFrqSldrVars.sldrVal.toFixed(1);
    pwmSysClkFrqSldrVars.sldrElem.disabled = true;
    pwmSysClkFrqSldrVars.sldrElem.removeEventListener('input', updatepwmSysClkFrqSldrVal);
}

function initpwmsysClkFrqSldr() {
    pwmSysClkFrqSldrVars.sldrElem = document.getElementById(pwmSysClkFrqSldrVars.htmlInputId);
    pwmSysClkFrqSldrVars.sldrElem.value = 10;
    pwmSysClkFrqSldrVars.sldrElem.nextElementSibling.value = pwmSysClkFrqSldrVars.sldrVal.toFixed(1);
    pwmSysClkFrqSldrVars.sldrElem.disabled = true;
}

// Register this element with jsAnim.js
registerAnimation(0, 2, initpwmsysClkFrqSldr, playpwmsysClkFrqSldrAnim, resetpwmsysClkFrqSldrAnim);