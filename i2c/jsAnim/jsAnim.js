class globalAnimControl {
    #animPlaying = false;
    #animObjs = new Array();
    #animUpdateIntIdx = null;
    #animUpdateCounter = 0;
    #animUpdateDt = 1;      // This exists for the update function that depend on ode solvers. It can be used to change the integration time step on the fly.

    // Functions for animations to register themselves so that update and pause can be controlled
    registerAnim(animObj) {
        this.#animObjs.push(animObj);
    }

    // Function to find indices to the elements that are on the current slide
    #setCurrentSlideElems(idxh, idxv) {
        for (let animObj of this.#animObjs)
            if (idxh == animObj.idxh && idxv == animObj.idxv)
                animObj.onCurrentSlide = true;
            else
                animObj.onCurrentSlide = false;
    }

    // Function to call the update functions of the animations that are on the current slide
    #callUpdateFuns() {
        this.#animUpdateCounter += this.#animUpdateDt;
        for (let animObj of this.#animObjs)
            if (animObj.onCurrentSlide && (typeof animObj.update === "function"))
                animObj.update(this.#animUpdateCounter, this.#animUpdateDt, animObj.onCurrentFragm);
    }

    // Function to call the play functions of the animations that are on the current slide
    #callPlayFuns() {
        for (let animObj of this.#animObjs)
            if (animObj.onCurrentSlide && (typeof animObj.play === "function"))
                animObj.play();
    }

    // Function to call the pause functions of the animations that are on the current slide
    #callPauseFuns() {
        for (let animObj of this.#animObjs)
            if (animObj.onCurrentSlide && (typeof animObj.pause === "function"))
                animObj.pause();
    }

    // Function to call the reset functions of the animations that are on the current slide
    callResetFuns() {
        if (this.#animPlaying) {
            clearInterval(this.#animUpdateIntIdx);
            this.#animPlaying = false;
            this.#callPauseFuns();
        }
        this.#animUpdateCounter = 0;
        this.#animUpdateDt = 1;
        for (let animObj of this.#animObjs)
            if (animObj.onCurrentSlide && (typeof animObj.reset === "function"))
                animObj.reset();
    }

    // Function to update and pause animation on the respective slied
    playPauseAnim() {
        if (this.#animPlaying) {
            clearInterval(this.#animUpdateIntIdx);
            this.#animPlaying = false;
            this.#callPauseFuns();
        }
        else {
            this.#callPlayFuns();
            this.#animPlaying = true;
            this.#animUpdateIntIdx = setInterval(this.#callUpdateFuns.bind(this), 16);
        }
    }

    // Function to handle the slide change event
    handleSlideChange(event) {
        this.callResetFuns();
        this.#setCurrentSlideElems(event.indexh, event.indexv);
    }

    // Function to handle the slides ready event
    handleSlidesReady(event) {
        if (this.#animObjs.length)
            this.#setCurrentSlideElems(event.indexh, event.indexv);
        else
            setTimeout(this.handleSlidesReady.bind(this, event), 500);
    }

    // Function to handle the fragment shown event
    handleFragShown(event) {
        if (this.#animObjs.length){
            for (let frag of event.fragments)
                for (let animObj of this.#animObjs)
                    if (frag.id == animObj.id){
                        animObj.onCurrentFragm = true;
                        if (typeof animObj.fragShown === "function")
                            animObj.fragShown();
                    }
        }
        else
            setTimeout(this.handleFragShown.bind(this, event), 500);
    }

    // Function to handle the fragment hidden event
    handleFragHidden(event) {
        for (let frag of event.fragments)
            for (let animObj of this.#animObjs)
                if (frag.id == animObj.id){
                    animObj.onCurrentFragm = false;
                    if (typeof animObj.fragHidden === "function")
                        animObj.fragHidden();
                }
    }

    // Change global time speed
    increaseAnimUpdateDt() {
        this.#animUpdateDt += 0.1;
    }
    decreaseAnimUpdateDt() {
        this.#animUpdateDt -= 0.1;
        if (this.#animUpdateDt < 0) {
            this.#animUpdateDt = 0;
        }
    }
}

class anim {
    #initAnimIntIdx = null;
    constructor(elemID) {
        this.id = elemID;
        this.#initAnimIntIdx = setInterval(this.#initializeAnimation.bind(this), 100);
    }

    // Function for the animation to initialize itself
    #initializeAnimation() {
        if (document.readyState === 'complete') {
            this.elem = document.getElementById(this.id);
            if (this.elem != null) {
                let slide = this.elem.closest('section');
                if (slide != null) {
                    this.idxh = Reveal.getIndices(slide).h;
                    this.idxv = Reveal.getIndices(slide).v;
                    this.onCurrentSlide = false;
                    this.onCurrentFragm = false;
                    clearInterval(this.#initAnimIntIdx);
                    if (typeof this.init === "function")
                        this.init();
                    animControl.registerAnim(this);
                }
                else {
                    clearInterval(this.#initAnimIntIdx);
                    throw this.id + ": This element is not inside a 'section' element.";
                }
            }
            else {
                clearInterval(this.#initAnimIntIdx);
                throw this.id + ": This element doesn't exist.";
            }
        }
    }
}

let animControl = new globalAnimControl();