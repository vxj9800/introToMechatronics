// Define all the necessary data into one structure
var pwmCcRegVars = {
    htmlInputId: 'pwmCcReg',
    regElem: null,
    regVal: 0,
}

// Define necessary functions
function findpwmCcRegElem() {
    pwmCcRegVars.regElem = document.getElementById(pwmCcRegVars.htmlInputId);
    pwmCcRegVars.regElem.value = '0';
}

function updatepwmCcRegVal() {
    pwmCcRegVars.regVal = parseInt(pwmCcRegVars.regElem.value);
    if (isNaN(pwmCcRegVars.regVal)) {
        pwmCcRegVars.regVal = 0;
        pwmCcRegVars.regElem.value = '0';
    }
    if (pwmCcRegVars.regVal > 65535) {
        pwmCcRegVars.regVal = 65535;
        pwmCcRegVars.regElem.value = pwmCcRegVars.regVal.toString();
    }
}

function playpwmCcRegAnim() {
    pwmCcRegVars.regElem.readOnly = false;
    pwmCcRegVars.regElem.addEventListener('change', updatepwmCcRegVal);
}

function resetpwmCcRegAnim() {
    pwmCcRegVars.regVal = 0;
    pwmCcRegVars.regElem.value = '0';
    pwmCcRegVars.regElem.readOnly = true;
    pwmCcRegVars.regElem.removeEventListener('change', updatepwmCcRegVal);
}

function initpwmCcReg() {
    findpwmCcRegElem();
    pwmCcRegVars.regElem.readOnly = true;
}

// Register this element with jsAnim.js
registerAnimation(0, 4, initpwmCcReg, playpwmCcRegAnim, resetpwmCcRegAnim);