class globalAnimControl {
    #animPlaying = false;
    #animObjs = new Array();
    #onThisSlideElemIdxs = [];
    #animUpdateIntIdx = null;
    #animUpdateCounter = 0;
    #animUpdateDt = 1;

    // Functions for animations to register themselves so that update and pause can be controlled
    registerAnim(animObj) {
        this.#animObjs.push(animObj);
    }

    // Function to find indices to the elements that are on the current slide
    #getCurrentElemIdxs() {
        this.#onThisSlideElemIdxs = [];
        let slideIdxs = Reveal.getIndices();
        for (let i = 0; i < this.#animObjs.length; ++i)
            if (slideIdxs.h == this.#animObjs[i].idxh && slideIdxs.v == this.#animObjs[i].idxv)
                this.#onThisSlideElemIdxs.push(i);
    }

    // Function to call the update functions of the animations that are on the current slide
    #callUpdateFuns() {
        this.#animUpdateCounter += this.#animUpdateDt;
        for (let i = 0; i < this.#onThisSlideElemIdxs.length; ++i)
            if (typeof this.#animObjs[this.#onThisSlideElemIdxs[i]].update === "function")
                this.#animObjs[this.#onThisSlideElemIdxs[i]].update(this.#animUpdateCounter, this.#animUpdateDt);
    }

    // Function to call the play functions of the animations that are on the current slide
    #callPlayFuns() {
        for (let i = 0; i < this.#onThisSlideElemIdxs.length; ++i)
            if (typeof this.#animObjs[this.#onThisSlideElemIdxs[i]].play === "function")
                this.#animObjs[this.#onThisSlideElemIdxs[i]].play();
    }

    // Function to call the pause functions of the animations that are on the current slide
    #callPauseFuns() {
        for (let i = 0; i < this.#onThisSlideElemIdxs.length; ++i)
            if (typeof this.#animObjs[this.#onThisSlideElemIdxs[i]].pause === "function")
                this.#animObjs[this.#onThisSlideElemIdxs[i]].pause();
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
        for (let i = 0; i < this.#onThisSlideElemIdxs.length; ++i)
            if (typeof this.#animObjs[this.#onThisSlideElemIdxs[i]].reset === "function")
                this.#animObjs[this.#onThisSlideElemIdxs[i]].reset();
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
    handleSlideChange() {
        this.callResetFuns();
        this.#getCurrentElemIdxs();
    }

    // Function to handle the slides ready event
    handleSlidesReady() {
        if (this.#animObjs.length)
            this.#getCurrentElemIdxs();
        else
            setTimeout(this.handleSlidesReady.bind(this), 500);
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