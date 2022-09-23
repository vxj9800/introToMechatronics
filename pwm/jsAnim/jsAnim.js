// Define all the necessary data into one structure
var jsAnimVars = {
    animPlaying: false,
    animRegistry: [],
    currentAnimIdxs: [],
}

// Define functions
// Function for the animation to register itself
function registerAnimation(indexh, indexv, initAnimFun, playAnimFun, resetAnimFun) {
    jsAnimVars.animRegistry.push({ idxh: indexh, idxv: indexv, initFun: initAnimFun, playFun: playAnimFun, resetFun: resetAnimFun });
}

// Function to play and pause animation on the respective slied
function playResetAnim() {
    if (jsAnimVars.animPlaying) {
        for (let i = 0; i < jsAnimVars.currentAnimIdxs.length; ++i)
            jsAnimVars.animRegistry[jsAnimVars.currentAnimIdxs[i]].resetFun();
    } else {
        for (let i = 0; i < jsAnimVars.currentAnimIdxs.length; ++i)
            jsAnimVars.animRegistry[jsAnimVars.currentAnimIdxs[i]].playFun();
    }
    jsAnimVars.animPlaying = !jsAnimVars.animPlaying;
}

// Function to change key binding as slide changes
function processSlideChangeEvnt(event) {
    jsAnimVars.currentAnimIdxs = [];
    Reveal.removeKeyBinding(32);
    for (let i = 0; i < jsAnimVars.animRegistry.length; ++i) {
        jsAnimVars.animRegistry[i].resetFun();
        jsAnimVars.animPlaying = false;
        if (jsAnimVars.animRegistry[i].idxh == event.indexh && jsAnimVars.animRegistry[i].idxv == event.indexv) {
            jsAnimVars.currentAnimIdxs.push(i);
            Reveal.addKeyBinding({ keyCode: 32, key: 'space', descriptio: 'Paly or Reset the animations' }, playResetAnim);
        }
    }
    if (jsAnimVars.currentAnimIdxs.length != 0)
        playResetAnim();
}

// Function to initialize animation javascripts when a slide is ready
function initializeAnimations() {
    for (let i = 0; i < jsAnimVars.animRegistry.length; ++i) {
        jsAnimVars.animRegistry[i].initFun();
    }
}