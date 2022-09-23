// Define all the necessary data into one structure
var pwmTopReg2Vars = {
    htmlInputId: 'pwmTopReg2',
    regElem: null,
    regVal: 1,
}

// Define necessary functions
function findpwmTopReg2Elem() {
    pwmTopReg2Vars.regElem = document.getElementById(pwmTopReg2Vars.htmlInputId);
    pwmTopReg2Vars.regElem.value = '1';
}

function updatepwmTopReg2Val() {
    pwmTopReg2Vars.regVal = parseInt(pwmTopReg2Vars.regElem.value);
    if (pwmTopReg2Vars.regVal == 0 || isNaN(pwmTopReg2Vars.regVal)) {
        pwmTopReg2Vars.regVal = 1;
        pwmTopReg2Vars.regElem.value = '1';
    }
    if (pwmTopReg2Vars.regVal > 65635) {
        pwmTopReg2Vars.regVal = 65635;
        pwmTopReg2Vars.regElem.value = '65635';
    }
}

function playpwmTopReg2Anim() {
    pwmTopReg2Vars.regElem.readOnly = false;
    pwmTopReg2Vars.regElem.addEventListener('change', updatepwmTopReg2Val);
}

function resetpwmTopReg2Anim() {
    pwmTopReg2Vars.regVal = 1;
    pwmTopReg2Vars.regElem.value = '1';
    pwmTopReg2Vars.regElem.readOnly = true;
    pwmTopReg2Vars.regElem.removeEventListener('change', updatepwmTopReg2Val);
}

function initpwmTopReg2() {
    findpwmTopReg2Elem();
    pwmTopReg2Vars.regElem.readOnly = true;
}

// Register this element with jsAnim.js
registerAnimation(0, 4, initpwmTopReg2, playpwmTopReg2Anim, resetpwmTopReg2Anim);