// Define all the necessary data into one structure
var pwmDivClkFrqSldr2Vars = {
    htmlInputId: 'pwmDivClkFrqSldr2',
    sldrElem: null,
    sldrVal: 100,
}

// Define necessary functions
function updatepwmDivClkFrqSldr2Val() {
    pwmDivClkFrqSldr2Vars.sldrVal = parseFloat(pwmDivClkFrqSldr2Vars.sldrElem.value);
    pwmDivClkFrqSldr2Vars.sldrElem.nextElementSibling.value = pwmDivClkFrqSldr2Vars.sldrVal.toFixed(1);
}

function playpwmDivClkFrqSldr2Anim() {
    pwmDivClkFrqSldr2Vars.sldrElem.disabled = false;
    pwmDivClkFrqSldr2Vars.sldrElem.addEventListener('input', updatepwmDivClkFrqSldr2Val);
}

function resetpwmDivClkFrqSldr2Anim() {
    pwmDivClkFrqSldr2Vars.sldrVal = 100;
    pwmDivClkFrqSldr2Vars.sldrElem.value = 100;
    pwmDivClkFrqSldr2Vars.sldrElem.nextElementSibling.value = pwmDivClkFrqSldr2Vars.sldrVal.toFixed(1);
    pwmDivClkFrqSldr2Vars.sldrElem.disabled = true;
    pwmDivClkFrqSldr2Vars.sldrElem.removeEventListener('input', updatepwmDivClkFrqSldr2Val);
}

function initpwmDivClkFrqSldr2() {
    pwmDivClkFrqSldr2Vars.sldrElem = document.getElementById(pwmDivClkFrqSldr2Vars.htmlInputId);
    pwmDivClkFrqSldr2Vars.sldrElem.value = 100;
    pwmDivClkFrqSldr2Vars.sldrElem.nextElementSibling.value = pwmDivClkFrqSldr2Vars.sldrVal.toFixed(1);
    pwmDivClkFrqSldr2Vars.sldrElem.disabled = true;
}

// Register this element with jsAnim.js
registerAnimation(0, 4, initpwmDivClkFrqSldr2, playpwmDivClkFrqSldr2Anim, resetpwmDivClkFrqSldr2Anim);