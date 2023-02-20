let h0v3SclL = new anim('h0v3SclL');
h0v3SclL.init = function () {
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
h0v3SclL.fragShown = function () {
    anime.remove(this.elem);
    anime({
        targets: this.elem,
        strokeDashoffset: 0,
        easing: 'easeInOutCubic',
        duration: 1000,
        delay: 100
    });
}
h0v3SclL.fragHidden = function () {
    this.init();
}

let h0v3SdaL = new anim('h0v3SdaL');
h0v3SdaL.init = function () {
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
h0v3SdaL.fragShown = function () {
    anime({
        targets: this.elem,
        strokeDashoffset: 0,
        easing: 'easeInOutCubic',
        duration: 1000,
        delay: 100
    });
}
h0v3SdaL.fragHidden = function () {
    this.init();
}

let h0v3SclR = new anim('h0v3SclR');
h0v3SclR.init = function () {
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
h0v3SclR.fragShown = function () {
    anime({
        targets: this.elem,
        strokeDashoffset: 0,
        easing: 'easeInOutCubic',
        duration: 1000,
        delay: 100
    });
}
h0v3SclR.fragHidden = function () {
    this.init();
}

let h0v3SdaR = new anim('h0v3SdaR');
h0v3SdaR.init = function () {
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
h0v3SdaR.fragShown = function () {
    anime({
        targets: this.elem,
        strokeDashoffset: 0,
        easing: 'easeInOutCubic',
        duration: 1000,
        delay: 100
    });
}
h0v3SdaR.fragHidden = function () {
    this.init();
}

let h0v3SDA = new anim('h0v3SDA');
h0v3SDA.init = function () {
    anime.remove(this.elem);
    this.elem.setAttribute("pathLength",'1');
    this.elem.style.setProperty('stroke-dasharray', '1');
    anime({
        targets: this.elem,
        strokeDashoffset: 1,
        easing: 'easeInOutCubic',
        duration: 1000,
        delay: 100,
        complete: function() {
            h0v3SDA.elem.style.opacity = 0;
        }
    });
}
h0v3SDA.fragShown = function () {
    this.elem.style.opacity = 1;
    anime({
        targets: this.elem,
        strokeDashoffset: 2,
        easing: 'easeInOutCubic',
        duration: 1000,
        delay: 100
    });
}
h0v3SDA.fragHidden = function () {
    this.init();
}

let h0v3SCL = new anim('h0v3SCL');
h0v3SCL.init = function () {
    anime.remove(this.elem);
    this.elem.setAttribute("pathLength",'1');
    this.elem.style.setProperty('stroke-dasharray', '1');
    anime({
        targets: this.elem,
        strokeDashoffset: 1,
        easing: 'easeInOutCubic',
        duration: 1000,
        delay: 100,
        complete: function() {
            h0v3SCL.elem.style.opacity = 0;
        }
    });
}
h0v3SCL.fragShown = function () {
    this.elem.style.opacity = 1;
    anime({
        targets: this.elem,
        strokeDashoffset: 2,
        easing: 'easeInOutCubic',
        duration: 1000,
        delay: 100
    });
}
h0v3SCL.fragHidden = function () {
    this.init();
}