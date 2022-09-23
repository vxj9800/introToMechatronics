// Define all the necessary data into one structure
var pwmCtrReg2Vars = {
    htmlInputId: 'pwmCtrReg2',
    regElem: null,
    regVal: 0,
    tData: new Array(1000),
    pwmData: new Array(1000),
    dt: 0.01,
    animInResetState: true, // Defines if the animation is in reset state or not
    animId: null,   // Interval id to play and reset animation
}

// Define necessary functions
function findpwmCtrReg2Elem() {
    pwmCtrReg2Vars.regElem = document.getElementById(pwmCtrReg2Vars.htmlInputId);
    pwmCtrReg2Vars.regElem.value = pwmCtrReg2Vars.regVal.toString();
}

function updatepwmCtrReg2Val() {
    pwmCtrReg2Vars.dt = pwmClkDtSldr3Vars.sldrVal;
    for (let i = 0; i < pwmCtrReg2Vars.tData.length; ++i) {
        pwmCtrReg2Vars.tData[i] += pwmCtrReg2Vars.dt;
        let tVal = pwmCtrReg2Vars.tData[i];
        tVal = (tVal < 0) ? 0 : tVal;
        pwmCtrReg2Vars.pwmData[i] = (((tVal * pwmDivClkFrqSldr2Vars.sldrVal) % (pwmTopReg2Vars.regVal + 1)) < pwmCcRegVars.regVal) ? 1 : 0;
    }
    pwmCtrReg2Vars.regVal = Math.floor(pwmCtrReg2Vars.tData[pwmCtrReg2Vars.tData.length - 1] * pwmDivClkFrqSldr2Vars.sldrVal) % (pwmTopReg2Vars.regVal + 1);
    pwmCtrReg2Vars.regElem.value = pwmCtrReg2Vars.regVal.toString();
}

function playpwmCtrReg2Anim() {
    pwmCtrReg2Vars.animInResetState = false;
    pwmCtrReg2Vars.animId = setInterval(updatepwmCtrReg2Val, 20);
}

function resetpwmCtrReg2Anim() {
    if (!pwmCtrReg2Vars.animInResetState) {
        pwmCtrReg2Vars.regVal = 0;
        pwmCtrReg2Vars.regElem.value = pwmCtrReg2Vars.regVal.toString();
        clearInterval(pwmCtrReg2Vars.animId);
        pwmCtrReg2Vars.animInResetState = true;
        for (let i = 0; i < pwmCtrReg2Vars.tData.length; ++i) {
            pwmCtrReg2Vars.tData[i] = (i / pwmCtrReg2Vars.tData.length) - 1;
            pwmCtrReg2Vars.pwmData[i] = 0;
        }
    }
}

function initpwmCtrReg2() {
    findpwmCtrReg2Elem();
    pwmCtrReg2Vars.regElem.readOnly = true;
    for (let i = 0; i < pwmCtrReg2Vars.tData.length; ++i) {
        pwmCtrReg2Vars.tData[i] = (i / pwmCtrReg2Vars.tData.length) - 1;
        pwmCtrReg2Vars.pwmData[i] = 0;
    }
}

// Register this element with jsAnim.js
registerAnimation(0, 4, initpwmCtrReg2, playpwmCtrReg2Anim, resetpwmCtrReg2Anim);