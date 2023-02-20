class globalAnimControl {
    #animPlaying = false;
    #animIdxh = [];
    #animIdxv = [];
    #animUpdate = [];
    #animReset = [];
    #animPlay = [];
    #animPause = [];
    #onThisSlideElemIdxs = [];
    #animUpdateIntIdx = null;
    #animUpdateCounter = 0;
    #animUpdateDt = 1;

    // Functions for animations to register themselves so that update and pause can be controlled
    registerAnim(idxh, idxv, animPlay, animUpdate, animPause, animReset) {
        this.#animIdxh.push(idxh);
        this.#animIdxv.push(idxv);
        this.#animUpdate.push(animUpdate);
        this.#animReset.push(animReset);
        this.#animPlay.push(animPlay);
        this.#animPause.push(animPause);
    }

    // Function to find indices to the elements that are on the current slide
    #getCurrentElemIdxs() {
        this.#onThisSlideElemIdxs = [];
        let slideIdxs = Reveal.getIndices();
        for (let i = 0; i < this.#animIdxh.length; ++i)
            if (slideIdxs.h == this.#animIdxh[i] && slideIdxs.v == this.#animIdxv[i])
                this.#onThisSlideElemIdxs.push(i);
    }

    // Function to call the update functions of the animations that are on the current slide
    #callUpdateFuns() {
        this.#animUpdateCounter += this.#animUpdateDt;
        for (let i = 0; i < this.#onThisSlideElemIdxs.length; ++i)
            this.#animUpdate[this.#onThisSlideElemIdxs[i]](this.#animUpdateCounter, this.#animUpdateDt);
    }

    // Function to call the play functions of the animations that are on the current slide
    #callPlayFuns() {
        for (let i = 0; i < this.#onThisSlideElemIdxs.length; ++i)
            this.#animPlay[this.#onThisSlideElemIdxs[i]]();
    }

    // Function to call the pause functions of the animations that are on the current slide
    #callPauseFuns() {
        for (let i = 0; i < this.#onThisSlideElemIdxs.length; ++i)
            this.#animPause[this.#onThisSlideElemIdxs[i]]();
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
            this.#animReset[this.#onThisSlideElemIdxs[i]]();
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
        window.dispatchEvent(new Event('resize'));
        this.callResetFuns();
        this.#getCurrentElemIdxs();
    }

    // Function to handle the slides ready event
    handleSlidesReady() {
        if (this.#animIdxh.length)
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
    init = null;
    update = null;
    reset = null;
    #initAnimIntIdx = null;
    constructor(elemID, vars, initFun, playFun, updateFun, pauseFun, resetFun) {
        this.id = elemID;
        this.data = vars;
        this.init = (typeof initFun == 'function') ? initFun : null;
        this.update = (typeof updateFun == 'function') ? updateFun : null;
        this.reset = (typeof resetFun == 'function') ? resetFun : null;
        this.play = (typeof playFun == 'function') ? playFun : null;
        this.pause = (typeof pauseFun == 'function') ? pauseFun : null;

        if (this.init != null && this.update != null && this.reset != null && this.play != null && this.pause != null)
            this.#initAnimIntIdx = setInterval(this.#initializeAnimation.bind(this), 100);
        else
            throw elemID + ": Incorrect construction arguments.\n";
    }

    // Function for the animation to initialize itself
    #initializeAnimation() {
        if (document.readyState === 'complete') {
            this.elem = document.getElementById(this.id);
            if (this.elem != null) {
                this.slide = this.elem.closest('section');
                if (this.slide != null) {
                    clearInterval(this.#initAnimIntIdx);
                    this.init();
                    animControl.registerAnim(Reveal.getIndices(this.slide).h, Reveal.getIndices(this.slide).v, this.play.bind(this), this.update.bind(this), this.pause.bind(this), this.reset.bind(this));
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