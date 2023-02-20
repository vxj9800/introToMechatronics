let h0v1upCPU = new anim('h0v1upCPU')
h0v1upCPU.init = function () {
    anime.remove(this.elem);
    this.elem.style.setProperty('width', '0px');
    this.elem.style.setProperty('height', '0px');
    this.elem.style.setProperty('line-height', '0px');
    this.elem.style.setProperty('font-size', '0px');
}
h0v1upCPU.fragShown = function () {
    anime({
        targets: this.elem,
        width: '100px',
        height: '50px',
        lineHeight: '50px',
        fontSize: '25px',
        easing: 'easeInOutCubic'
    });
}
h0v1upCPU.fragHidden = function () {
    this.init();
}



let h0v1upComponents = new anim('h0v1upComponents');
h0v1upComponents.fragActive = false;
h0v1upComponents.components = [];
h0v1upComponents.init = function () {
    this.components = this.elem.getElementsByTagName('div');
    for (let component of this.components) {
        anime.remove(component);
        component.style.setProperty('width', '0px');
        component.style.setProperty('height', '0px');
        component.style.setProperty('line-height', '0px');
        component.style.setProperty('font-size', '0px');
    }
}
h0v1upComponents.fragShown = function () {
    for (let i = 0; i < this.components.length; ++i) {
        anime({
            targets: this.components[i],
            width: '100px',
            height: '50px',
            lineHeight: '50px',
            fontSize: '25px',
            easing: 'easeInOutCubic',
            delay: 200 * i
        });
    }
}
h0v1upComponents.fragHidden = function () {
    this.init();
}



let h0v1upLines = new anim('h0v1upLines');
h0v1upLines.lines = [];
h0v1upLines.init = function () {
    this.lines = this.elem.getElementsByTagName('line');
    for (let line of this.lines) {
        anime.remove(line);
        line.style.setProperty('stroke-dashoffset', '1');
    }
}
h0v1upLines.fragShown = function () {
    for (let i = 0; i < this.lines.length; ++i) {
        anime({
            targets: this.lines[i],
            strokeDashoffset: 0,
            easing: 'easeInOutCubic',
            delay: 200 * i
        });
    }
}
h0v1upLines.fragHidden = function () {
    this.init();
}



let h0v1ucComponents = new anim('h0v1ucComponents');
h0v1ucComponents.fragActive = false;
h0v1ucComponents.components = [];
h0v1ucComponents.init = function () {
    this.components = this.elem.getElementsByTagName('div');
    for (let component of this.components) {
        anime.remove(component);
        component.style.setProperty('width', '0px');
        component.style.setProperty('height', '0px');
        component.style.setProperty('line-height', '0px');
        component.style.setProperty('font-size', '0px');
    }
}
h0v1ucComponents.fragShown = function () {
    for (let i = 0; i < this.components.length; ++i) {
        anime({
            targets: this.components[i],
            width: '100px',
            height: '50px',
            lineHeight: '50px',
            fontSize: '25px',
            easing: 'easeInOutCubic',
            delay: 200 * i
        });
    }
}
h0v1ucComponents.fragHidden = function () {
    this.init();
}



let h0v1rp2040 = new anim('h0v1rp2040');
h0v1rp2040.init = function () {
    this.rect = this.elem.getElementsByTagName('rect')[0];
    this.img = this.elem.getElementsByTagName('img')[0];
    anime.remove(this.rect);
    this.rect.style.setProperty('stroke-dashoffset', '1');
    anime.remove(this.img);
    this.img.style.setProperty('opacity', '0');
}
h0v1rp2040.fragShown = function () {
    anime({
        targets: this.rect,
        strokeDashoffset: 0,
        easing: 'easeInOutCubic'
    });
    anime({
        targets: this.img,
        opacity: 1,
        easing: 'easeInOutCubic',
        delay: 500
    });
}
h0v1rp2040.fragHidden = function () {
    this.init();
}