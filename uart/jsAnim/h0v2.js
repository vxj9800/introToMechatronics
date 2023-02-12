let h0v2RxL = new anim('h0v2RxL');
h0v2RxL.init = function () {
    anime.remove(this.elem);
    this.elem.setAttribute("pathLength",'1');
    this.elem.style.setProperty('stroke-dasharray', '1');
    anime({
        targets: this.elem,
        strokeDashoffset: 1,
        easing: 'easeInOutCubic',
        duration: 1000,
        delay: 100
    });
}
h0v2RxL.fragShown = function () {
    anime.remove(this.elem);
    anime({
        targets: this.elem,
        strokeDashoffset: 0,
        easing: 'easeInOutCubic',
        duration: 1000,
        delay: 100
    });
}
h0v2RxL.fragHidden = function () {
    this.init();
}

let h0v2TxL = new anim('h0v2TxL');
h0v2TxL.init = function () {
    anime.remove(this.elem);
    this.elem.setAttribute("pathLength",'1');
    this.elem.style.setProperty('stroke-dasharray', '1');
    anime({
        targets: this.elem,
        strokeDashoffset: 1,
        easing: 'easeInOutCubic',
        duration: 1000,
        delay: 100
    });
}
h0v2TxL.fragShown = function () {
    anime({
        targets: this.elem,
        strokeDashoffset: 0,
        easing: 'easeInOutCubic',
        duration: 1000,
        delay: 100
    });
}
h0v2TxL.fragHidden = function () {
    this.init();
}

let h0v2RxR = new anim('h0v2RxR');
h0v2RxR.init = function () {
    anime.remove(this.elem);
    this.elem.setAttribute("pathLength",'1');
    this.elem.style.setProperty('stroke-dasharray', '1');
    anime({
        targets: this.elem,
        strokeDashoffset: 1,
        easing: 'easeInOutCubic',
        duration: 1000,
        delay: 100
    });
}
h0v2RxR.fragShown = function () {
    anime({
        targets: this.elem,
        strokeDashoffset: 0,
        easing: 'easeInOutCubic',
        duration: 1000,
        delay: 100
    });
}
h0v2RxR.fragHidden = function () {
    this.init();
}

let h0v2TxR = new anim('h0v2TxR');
h0v2TxR.init = function () {
    anime.remove(this.elem);
    this.elem.setAttribute("pathLength",'1');
    this.elem.style.setProperty('stroke-dasharray', '1');
    anime({
        targets: this.elem,
        strokeDashoffset: 1,
        easing: 'easeInOutCubic',
        duration: 1000,
        delay: 100
    });
}
h0v2TxR.fragShown = function () {
    anime({
        targets: this.elem,
        strokeDashoffset: 0,
        easing: 'easeInOutCubic',
        duration: 1000,
        delay: 100
    });
}
h0v2TxR.fragHidden = function () {
    this.init();
}

let h0v2TxRxLR = new anim('h0v2TxRxLR');
h0v2TxRxLR.init = function () {
    anime.remove(this.elem);
    this.elem.setAttribute("pathLength",'1');
    this.elem.style.setProperty('stroke-dasharray', '1');
    anime({
        targets: this.elem,
        strokeDashoffset: 1,
        easing: 'easeInOutCubic',
        duration: 1000,
        delay: 100
    });
}
h0v2TxRxLR.fragShown = function () {
    anime({
        targets: this.elem,
        strokeDashoffset: 0,
        easing: 'easeInOutCubic',
        duration: 1000,
        delay: 100
    });
}
h0v2TxRxLR.fragHidden = function () {
    this.init();
}

let h0v2RxTxLR = new anim('h0v2RxTxLR');
h0v2RxTxLR.init = function () {
    anime.remove(this.elem);
    this.elem.setAttribute("pathLength",'1');
    this.elem.style.setProperty('stroke-dasharray', '1');
    anime({
        targets: this.elem,
        strokeDashoffset: 1,
        easing: 'easeInOutCubic',
        duration: 1000,
        delay: 100
    });
}
h0v2RxTxLR.fragShown = function () {
    anime({
        targets: this.elem,
        strokeDashoffset: 0,
        easing: 'easeInOutCubic',
        duration: 1000,
        delay: 100
    });
}
h0v2RxTxLR.fragHidden = function () {
    this.init();
}