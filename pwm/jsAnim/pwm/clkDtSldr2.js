// Define all the necessary data into one structure
var pwmClkDtSldr2Vars = {
    htmlInputId: 'pwmClkDtSldr2',
    sldrElem: null,
    sldrVal: 0.01,
}

// Define necessary functions
function updatepwmClkDtSldr2Val() {
    pwmClkDtSldr2Vars.sldrVal = parseFloat(pwmClkDtSldr2Vars.sldrElem.value);
}

function playpwmClkDtSldr2Anim() {
    pwmClkDtSldr2Vars.sldrElem.disabled = false;
    pwmClkDtSldr2Vars.sldrElem.addEventListener('input', updatepwmClkDtSldr2Val);
}

function resetpwmClkDtSldr2Anim() {
    pwmClkDtSldr2Vars.sldrVal = 0.01;
    pwmClkDtSldr2Vars.sldrElem.value = 0.01;
    pwmClkDtSldr2Vars.sldrElem.disabled = true;
    pwmClkDtSldr2Vars.sldrElem.removeEventListener('input', updatepwmClkDtSldr2Val);
}

function initpwmClkDtSldr2() {
    pwmClkDtSldr2Vars.sldrElem = document.getElementById(pwmClkDtSldr2Vars.htmlInputId);
    pwmClkDtSldr2Vars.sldrElem.value = 0.01;
    pwmClkDtSldr2Vars.sldrElem.disabled = true;
}

// Register this element with jsAnim.js
registerAnimation(0, 3, initpwmClkDtSldr2, playpwmClkDtSldr2Anim, resetpwmClkDtSldr2Anim);