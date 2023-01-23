let h0v1upComponents = new anim('upComponents');
h0v1upComponents.animNo = 0;
h0v1upComponents.components = [];
h0v1upComponents.lines = [];
h0v1upComponents.init = function() {
    this.animNo = 0;
    this.components = this.elem.getElementsByTagName('div');
    this.lines = this.elem.getElementsByTagName('line');
    for (component of this.components)
    {
        anime.remove(component);
        component.style.setProperty('width', '0px');
        component.style.setProperty('height', '0px');
        component.style.setProperty('line-height', '0px');
        component.style.setProperty('font-size', '0px');
    }
    for (line of this.lines)
    {
        anime.remove(component);
        line.style.setProperty('stroke-dashoffset', '1');
    }
}
h0v1upComponents.play = function() {
    ++this.animNo;
    this.nextAnim();
}
h0v1upComponents.pause = function() {
    ++this.animNo;
    this.nextAnim();
}
h0v1upComponents.reset = function() {
    this.init();
}
h0v1upComponents.nextAnim = function() {
    switch (this.animNo){
        case 1:
            anime({
                targets: this.components[0],
                width: '100px',
                height: '50px',
                lineHeight: '50px',
                fontSize: '25px',
                easing: 'easeInOutCubic'
            });
            break;
        case 2:
            for (let i = 1; i < this.components.length; ++i){
                anime({
                    targets: this.components[i],
                    width: '100px',
                    height: '50px',
                    lineHeight: '50px',
                    fontSize: '25px',
                    easing: 'easeInOutCubic',
                    delay: 200*(i-1)
                });
            }
            break;
        case 3:
            for (let i = 0; i < this.lines.length; ++i){
                anime({
                    targets: this.lines[i],
                    strokeDashoffset: 0,
                    easing: 'easeInOutCubic',
                    delay: 200*(i-1)
                });
            }
            break;
    }
}



let h0v1ucComponents = new anim('ucComponents');
h0v1ucComponents.animNo = 0;
h0v1ucComponents.components = [];
h0v1ucComponents.box = [];
h0v1ucComponents.img = [];
h0v1ucComponents.init = function() {
    this.animNo = 0;
    this.components = this.elem.getElementsByTagName('div');
    this.box = this.elem.getElementsByTagName('rect');
    this.img = this.elem.getElementsByTagName('img');
    for (component of this.components)
    {
        anime.remove(component);
        component.style.setProperty('width', '0px');
        component.style.setProperty('height', '0px');
        component.style.setProperty('line-height', '0px');
        component.style.setProperty('font-size', '0px');
    }
    for (line of this.box)
    {
        anime.remove(component);
        line.style.setProperty('stroke-dashoffset', '1');
    }
    for (img of this.img)
    {
        anime.remove(img);
        img.style.setProperty('opacity', '0');
    }
}
h0v1ucComponents.play = function() {
    ++this.animNo;
    this.nextAnim();
}
h0v1ucComponents.pause = function() {
    ++this.animNo;
    this.nextAnim();
}
h0v1ucComponents.reset = function() {
    this.init();
}
h0v1ucComponents.nextAnim = function() {
    switch (this.animNo){
        case 4:
            for (let i = 0; i < this.components.length; ++i){
                anime({
                    targets: this.components[i],
                    width: '100px',
                    height: '50px',
                    lineHeight: '50px',
                    fontSize: '25px',
                    easing: 'easeInOutCubic',
                    delay: 200*(i-1)
                });
            }
            break;
        case 5:
            for (let i = 0; i < this.box.length; ++i){
                anime({
                    targets: this.box[i],
                    strokeDashoffset: 0,
                    easing: 'easeInOutCubic',
                    delay: 200*(i-1)
                });
            }
            break;
        case 6:
            for (let i = 0; i < this.img.length; ++i){
                anime({
                    targets: this.img[i],
                    opacity: 1,
                    easing: 'easeInOutCubic'
                });
            }
            break;
    }
}