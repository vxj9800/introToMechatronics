// Define all the necessary data into one structure
var pwmClkDtSldrVars = {
    htmlInputId: 'pwmClkDtSldr',
    sldrElem: null,
    sldrVal: 0.01,
}

// Define necessary functions
function updatepwmClkDtSldrVal() {
    pwmClkDtSldrVars.sldrVal = parseFloat(pwmClkDtSldrVars.sldrElem.value);
}

function playpwmClkDtSldrAnim() {
    pwmClkDtSldrVars.sldrElem.disabled = false;
    pwmClkDtSldrVars.sldrElem.addEventListener('input', updatepwmClkDtSldrVal);
}

function resetpwmClkDtSldrAnim() {
    pwmClkDtSldrVars.sldrVal = 0.01;
    pwmClkDtSldrVars.sldrElem.value = 0.01;
    pwmClkDtSldrVars.sldrElem.disabled = true;
    pwmClkDtSldrVars.sldrElem.removeEventListener('input', updatepwmClkDtSldrVal);
}

function initpwmClkDtSldr() {
    pwmClkDtSldrVars.sldrElem = document.getElementById(pwmClkDtSldrVars.htmlInputId);
    pwmClkDtSldrVars.sldrElem.value = 0.01;
    pwmClkDtSldrVars.sldrElem.disabled = true;
}

// Register this element with jsAnim.js
registerAnimation(0, 2, initpwmClkDtSldr, playpwmClkDtSldrAnim, resetpwmClkDtSldrAnim);