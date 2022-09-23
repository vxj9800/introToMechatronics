// Define all the necessary data into one structure
var pwmClkDtSldr3Vars = {
    htmlInputId: 'pwmClkDtSldr3',
    sldrElem: null,
    sldrVal: 0.01,
}

// Define necessary functions
function updatepwmClkDtSldr3Val() {
    pwmClkDtSldr3Vars.sldrVal = parseFloat(pwmClkDtSldr3Vars.sldrElem.value);
}

function playpwmClkDtSldr3Anim() {
    pwmClkDtSldr3Vars.sldrElem.disabled = false;
    pwmClkDtSldr3Vars.sldrElem.addEventListener('input', updatepwmClkDtSldr3Val);
}

function resetpwmClkDtSldr3Anim() {
    pwmClkDtSldr3Vars.sldrVal = 0.01;
    pwmClkDtSldr3Vars.sldrElem.value = 0.01;
    pwmClkDtSldr3Vars.sldrElem.disabled = true;
    pwmClkDtSldr3Vars.sldrElem.removeEventListener('input', updatepwmClkDtSldr3Val);
}

function initpwmClkDtSldr3() {
    pwmClkDtSldr3Vars.sldrElem = document.getElementById(pwmClkDtSldr3Vars.htmlInputId);
    pwmClkDtSldr3Vars.sldrElem.value = 0.01;
    pwmClkDtSldr3Vars.sldrElem.disabled = true;
}

// Register this element with jsAnim.js
registerAnimation(0, 4, initpwmClkDtSldr3, playpwmClkDtSldr3Anim, resetpwmClkDtSldr3Anim);