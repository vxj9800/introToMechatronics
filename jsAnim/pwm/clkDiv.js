// Define all the necessary data into one structure
var pwmClkDivVars = {
    htmlDivId: 'pwmClkDiv',
    htmlDivElem: null,
    clkDivIntVal: 1,
    clkDivFrcVal: 0,
    animInResetState: true,
    dt: 0.01,
}

function findpwmClkDivElement() {
    pwmClkDivVars.htmlDivElem = document.getElementById(pwmClkDivVars.htmlDivId);
}

// Define function to update the structure values
function updatepwmClkDivVals() {
    pwmClkDivVars.clkDivIntVal = pwmClkDivRegVars.regIntVal;
    pwmClkDivVars.clkDivFrcVal = pwmClkDivRegVars.regFrcVal;
    pwmClkDivVars.htmlDivElem.innerHTML = `Clock<br>Divider<br>${pwmClkDivVars.clkDivIntVal}<sup>${pwmClkDivVars.clkDivFrcVal}</sup>&frasl;<sub>${16}</sub>`;
}

// Define necessary functions
function playpwmClkDivAnim() {
    pwmClkDivVars.animInResetState = false;
    pwmClkDivVars.animId = setInterval(updatepwmClkDivVals, 100);
}

function resetpwmClkDivAnim() {
    if (!pwmClkDivVars.animInResetState) {
        pwmClkDivVars.clkDivIntVal = 1;
        pwmClkDivVars.clkDivFrcVal = 0;
        clearInterval(pwmClkDivVars.animId);
        updatepwmClkDivVals();
        pwmClkDivVars.animInResetState = true;
    }
}

function initpwmClkDiv() {
    findpwmClkDivElement();
    pwmClkDivVars.htmlDivElem.innerHTML = `Clock<br>Divider<br>${pwmClkDivVars.clkDivIntVal}<sup>${pwmClkDivVars.clkDivFrcVal}</sup>&frasl;<sub>${16}</sub>`;
}

// Register this animation with jsAnim.js
registerAnimation(0, 2, initpwmClkDiv, playpwmClkDivAnim, resetpwmClkDivAnim);