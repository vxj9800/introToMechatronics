// Define all the necessary data into one structure
var pwmClkDivRegVars = {
    htmlInputIntId: 'pwmClkDivRegInt',
    htmlInputFrcId: 'pwmClkDivRegFrc',
    regIntElem: null,
    regFrcElem: null,
    regIntVal: 1,
    regFrcVal: 0,
}

// Define necessary functions
function findpwmClkDivRegElem() {
    pwmClkDivRegVars.regIntElem = document.getElementById(pwmClkDivRegVars.htmlInputIntId);
    pwmClkDivRegVars.regFrcElem = document.getElementById(pwmClkDivRegVars.htmlInputFrcId);
    pwmClkDivRegVars.regIntElem.value = '1';
    pwmClkDivRegVars.regFrcElem.value = '0';
}

function updatepwmClkDivRegIntVal() {
    pwmClkDivRegVars.regIntVal = parseInt(pwmClkDivRegVars.regIntElem.value);
    if (pwmClkDivRegVars.regIntVal == 0 || isNaN(pwmClkDivRegVars.regIntVal)) {
        pwmClkDivRegVars.regIntVal = 1;
        pwmClkDivRegVars.regIntElem.value = '1';
    }
    if (pwmClkDivRegVars.regIntVal > 255) {
        pwmClkDivRegVars.regIntVal = 255;
        pwmClkDivRegVars.regIntElem.value = '255';
    }
}

function updatepwmClkDivRegFrcVal() {
    pwmClkDivRegVars.regFrcVal = parseInt(pwmClkDivRegVars.regFrcElem.value);
    if (isNaN(pwmClkDivRegVars.regFrcVal)) {
        pwmClkDivRegVars.regFrcVal = 0;
        pwmClkDivRegVars.regFrcElem.value = '0';
    }
    if (pwmClkDivRegVars.regFrcVal > 15) {
        pwmClkDivRegVars.regFrcVal = 15;
        pwmClkDivRegVars.regFrcElem.value = '15';
    }
}

function playpwmClkDivRegAnim() {
    pwmClkDivRegVars.regIntElem.readOnly = false;
    pwmClkDivRegVars.regFrcElem.readOnly = false;
    pwmClkDivRegVars.regIntElem.addEventListener('change', updatepwmClkDivRegIntVal);
    pwmClkDivRegVars.regFrcElem.addEventListener('change', updatepwmClkDivRegFrcVal);
}

function resetpwmClkDivRegAnim() {
    pwmClkDivRegVars.regIntVal = 1;
    pwmClkDivRegVars.regFrcVal = 0;
    pwmClkDivRegVars.regIntElem.value = '1';
    pwmClkDivRegVars.regFrcElem.value = '0';
    pwmClkDivRegVars.regIntElem.readOnly = true;
    pwmClkDivRegVars.regFrcElem.readOnly = true;
    pwmClkDivRegVars.regIntElem.removeEventListener('change', updatepwmClkDivRegIntVal);
    pwmClkDivRegVars.regFrcElem.removeEventListener('change', updatepwmClkDivRegFrcVal);
}

function initpwmClkDivReg() {
    findpwmClkDivRegElem();
    pwmClkDivRegVars.regIntElem.readOnly = true;
    pwmClkDivRegVars.regFrcElem.readOnly = true;
}

// Register this element with jsAnim.js
registerAnimation(0, 2, initpwmClkDivReg, playpwmClkDivRegAnim, resetpwmClkDivRegAnim);