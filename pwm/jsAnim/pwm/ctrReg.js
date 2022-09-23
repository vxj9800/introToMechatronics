// Define all the necessary data into one structure
var pwmCtrRegVars = {
    htmlInputId: 'pwmCtrReg',
    regElem: null,
    regVal: 0,
    animInResetState: true, // Defines if the animation is in reset state or not
    animId: null,   // Interval id to play and reset animation
}

// Define necessary functions
function findpwmCtrRegElem() {
    pwmCtrRegVars.regElem = document.getElementById(pwmCtrRegVars.htmlInputId);
    pwmCtrRegVars.regElem.value = pwmCtrRegVars.regVal.toString();
}

function updatepwmCtrRegVal() {
    pwmCtrRegVars.regVal = Math.floor(pwmDivClk2Vars.data[0].x[0] * pwmDivClk2Vars.clkFrq) % (pwmTopRegVars.regVal + 1);
    pwmCtrRegVars.regElem.value = pwmCtrRegVars.regVal.toString();
}

function playpwmCtrRegAnim() {
    pwmCtrRegVars.animInResetState = false;
    pwmCtrRegVars.animId = setInterval(updatepwmCtrRegVal, 20);
}

function resetpwmCtrRegAnim() {
    if (!pwmCtrRegVars.animInResetState) {
        pwmCtrRegVars.regVal = 0;
        pwmCtrRegVars.regElem.value = pwmCtrRegVars.regVal.toString();
        clearInterval(pwmCtrRegVars.animId);
        pwmCtrRegVars.animInResetState = true;
    }
}

function initpwmCtrReg() {
    findpwmCtrRegElem();
    pwmCtrRegVars.regElem.readOnly = true;
}

// Register this element with jsAnim.js
registerAnimation(0, 3, initpwmCtrReg, playpwmCtrRegAnim, resetpwmCtrRegAnim);