class anim {
    #init = null;
    #play = null;
    #reset = null;
    #regAnimIntIdx = null;
    #playResetAnimIntIdx = null;
    #animPlaying = false;
    constructor(elemID, vars, initFun, playFun, resetFun) {
        this.id = elemID;
        this.data = vars;
        this.#init = (typeof initFun == 'function') ? initFun : null;
        this.#play = (typeof playFun == 'function') ? playFun : null;
        this.#reset = (typeof resetFun == 'function') ? resetFun : null;

        if (this.#init != null && this.#play != null && this.#reset != null)
            this.#regAnimIntIdx = setInterval(this.#registerAnimation.bind(this), 100);
        else
            throw elemID + ": Incorrect construction arguments.\n";
    }

    // Function for the animation to register itself
    #registerAnimation() {
        this.elem = document.getElementById(this.id);
        if (this.elem != null) {
            this.slide = this.elem.closest('section');
            if (this.slide != null) {
                this.idxh = Reveal.getIndices(this.slide).h;
                this.idxv = Reveal.getIndices(this.slide).v;
                this.idxf = Reveal.getIndices(this.slide).f;
                clearInterval(this.#regAnimIntIdx);
                this.#init();
                this.#playResetAnimIntIdx = setInterval(this.#playResetAnim.bind(this), 100);
            }
            else {
                clearInterval(this.#regAnimIntIdx);
                throw this.id + ": This element is not inside a 'section' element.";
            }
        }
    }

    // Function to play and pause animation on the respective slied
    #playResetAnim() {
        let slideIdxs = Reveal.getIndices();
        if (slideIdxs.h == this.idxh && slideIdxs.v == this.idxv && !this.#animPlaying) {
            this.#play();
            this.#animPlaying = true;
        }
        else if ((slideIdxs.h != this.idxh || slideIdxs.v != this.idxv) && this.#animPlaying) {
            this.#reset();
            this.#animPlaying = false;
        }
    }
}