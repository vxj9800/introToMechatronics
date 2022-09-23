// Define all the necessary data into one structure
var pwmTopRegVars = {
    htmlInputId: 'pwmTopReg',
    regElem: null,
    regVal: 1,
}

// Define necessary functions
function findpwmTopRegElem() {
    pwmTopRegVars.regElem = document.getElementById(pwmTopRegVars.htmlInputId);
    pwmTopRegVars.regElem.value = '1';
}

function updatepwmTopRegVal() {
    pwmTopRegVars.regVal = parseInt(pwmTopRegVars.regElem.value);
    if (pwmTopRegVars.regVal == 0 || isNaN(pwmTopRegVars.regVal)) {
        pwmTopRegVars.regVal = 1;
        pwmTopRegVars.regElem.value = '1';
    }
    if (pwmTopRegVars.regVal > 65535) {
        pwmTopRegVars.regVal = 65535;
        pwmTopRegVars.regElem.value = '65535';
    }
}

function playpwmTopRegAnim() {
    pwmTopRegVars.regElem.readOnly = false;
    pwmTopRegVars.regElem.addEventListener('change', updatepwmTopRegVal);
}

function resetpwmTopRegAnim() {
    pwmTopRegVars.regVal = 1;
    pwmTopRegVars.regElem.value = '1';
    pwmTopRegVars.regElem.readOnly = true;
    pwmTopRegVars.regElem.removeEventListener('change', updatepwmTopRegVal);
}

function initpwmTopReg() {
    findpwmTopRegElem();
    pwmTopRegVars.regElem.readOnly = true;
}

// Register this element with jsAnim.js
registerAnimation(0, 3, initpwmTopReg, playpwmTopRegAnim, resetpwmTopRegAnim);