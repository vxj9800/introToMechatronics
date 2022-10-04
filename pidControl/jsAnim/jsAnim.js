class globalAnimControl {
    #animPlaying = false;
    #animIdxh = [];
    #animIdxv = [];
    #animUpdate = [];
    #animReset = [];
    #animIsReset = [];
    #animUpdateIntIdx = null;
    #animUpdateCounter = 0;
    #animUpdateDt = 1;

    // Functions for animations to register themselves so that update and pause can be controlled
    registerAnim(idxh, idxv, animUpdate, animReset) {
        this.#animIdxh.push(idxh);
        this.#animIdxv.push(idxv);
        this.#animUpdate.push(animUpdate);
        this.#animReset.push(animReset);
        this.#animIsReset.push(true);
    }

    // Function to call the update functions of the animations that are on the current slide
    #callUpdateFuns() {
        this.#animUpdateCounter += this.#animUpdateDt;
        let slideIdxs = Reveal.getIndices();
        for (let i = 0; i < this.#animIdxh.length; ++i) {
            if (slideIdxs.h == this.#animIdxh[i] && slideIdxs.v == this.#animIdxv[i]) {
                this.#animUpdate[i](this.#animUpdateCounter);
                this.#animIsReset[i] = false;
            }
            else if (!this.#animIsReset[i]) {
                this.#animReset[i]();
                this.#animIsReset[i] = true;
            }
        }
    }

    // Function to call the reset functions of the animations that are on the current slide
    callResetFuns() {
        this.#animUpdateCounter = 0;
        this.#animUpdateDt = 1;
        clearInterval(this.#animUpdateIntIdx);
        this.#animPlaying = false;
        for (let i = 0; i < this.#animIdxh.length; ++i) {
            if (!this.#animIsReset[i]) {
                this.#animReset[i]();
                this.#animIsReset[i] = true;
            }
        }
    }

    // Function to update and pause animation on the respective slied
    playPauseAnim() {
        if (this.#animPlaying) {
            clearInterval(this.#animUpdateIntIdx);
            this.#animPlaying = false;
        }
        else {
            this.#animUpdateIntIdx = setInterval(this.#callUpdateFuns.bind(this), 16);
            this.#animPlaying = true;
        }
    }

    // Change global time speed
    increaseAnimUpdateDt(val) {
        this.#animUpdateDt += 0.1;
    }
    decreaseAnimUpdateDt(val) {
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
    constructor(elemID, vars, initFun, updateFun, resetFun) {
        this.id = elemID;
        this.data = vars;
        this.init = (typeof initFun == 'function') ? initFun : null;
        this.update = (typeof updateFun == 'function') ? updateFun : null;
        this.reset = (typeof resetFun == 'function') ? resetFun : null;

        if (this.init != null && this.update != null && this.reset != null)
            this.#initAnimIntIdx = setInterval(this.#initializeAnimation.bind(this), 100);
        else
            throw elemID + ": Incorrect construction arguments.\n";
    }

    // Function for the animation to initialize itself
    #initializeAnimation() {
        this.elem = document.getElementById(this.id);
        if (this.elem != null) {
            this.slide = this.elem.closest('section');
            if (this.slide != null) {
                clearInterval(this.#initAnimIntIdx);
                this.init();
                animControl.registerAnim(Reveal.getIndices(this.slide).h, Reveal.getIndices(this.slide).v, this.update.bind(this), this.reset.bind(this));
            }
            else {
                clearInterval(this.#initAnimIntIdx);
                throw this.id + ": This element is not inside a 'section' element.";
            }
        }
    }
}

let animControl = new globalAnimControl();