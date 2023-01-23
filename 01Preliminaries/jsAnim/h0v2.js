let h0v2crystal = new anim('crystal');
h0v2crystal.dt = 0.016; // Because the default callback time for update function is 16ms.
h0v2crystal.frq = 1;
h0v2crystal.init = function() {
    this.elem.setAttribute('transform','translate(0 0)');
}
h0v2crystal.update = function(tAnim,dtAnim) {
    t = tAnim*dtAnim*this.dt;
    this.elem.setAttribute('transform','translate(0 ' + 40*Math.sin(-2*Math.PI*this.frq*t) + ')');
}
h0v2crystal.reset = function() {
    this.init();
}


let h0v2codeLine = new anim('codeLine');
h0v2codeLine.dt = 0.016; // Because the default callback time for update function is 16ms.
h0v2codeLine.yOffset = 0;
h0v2codeLine.animeCalled = false;
h0v2codeLine.init = function() {
    this.animeCalled = false;
    this.yOffset = 0;
    this.elem.setAttribute('transform','translate(0 0)');
}
h0v2codeLine.update = function(tAnim,dtAnim) {
    t = tAnim*dtAnim*this.dt;
    if (t > (Math.floor(t) + 0.8) && !this.animeCalled) {
        this.animeCalled = true;
        anime({
            targets: h0v2codeLine,
            yOffset: (Math.floor(t) % 11)*27.27,
            easing: 'easeInOutCubic',
            duration: 400,
            update: function() {
                h0v2codeLine.elem.setAttribute('transform','translate(0 ' + h0v2codeLine.yOffset + ')');
            }
        })
    }
    else if (t > (Math.round(t) + 0.2) && this.animeCalled) {
        this.animeCalled = false;
    }
    // this.elem.setAttribute('transform','translate(0 ' + 40*Math.sin(-2*Math.PI*this.frq*t) + ')');
}
h0v2codeLine.reset = function() {
    this.init();
}



let h0v2clk = new anim('clk');
h0v2clk.clkFrq = 1;
h0v2clk.dt = 0.016;
h0v2clk.data = [{
    x: new Array(1000), // x axis data
    y: new Array(1000), // y axis data
    mode: 'lines',
    line: {
        simplify: false,
        width: 5,
    },    // data line property
}];
h0v2clk.layout = {
    autosize: false,
    width: 300,
    height: 80,
    margin: {
        l: 0,
        r: 0,
        b: 0,
        t: 0,
        pad: 0,
    },
    xaxis: {
        autorange: 'reversed',
        showgrid: false,
        zeroline: false,
        showline: false,
        autotick: true,
        ticks: '',
        showticklabels: false
    },
    yaxis: {
        range: [-1.1, 1.1],
        showgrid: false,
        zeroline: false,
        showline: false,
        autotick: true,
        ticks: '',
        showticklabels: false
    },
    paper_bgcolor: '#ffffff00',
    plot_bgcolor: '#ffffff00',
};
h0v2clk.config = {
    staticPlot: true,
};
h0v2clk.init = function () {
    for (let i = 0; i < this.data[0].x.length; ++i) {
        this.data[0].x[i] = i / this.data[0].x.length;
        var val = Math.sin(2 * Math.PI * this.clkFrq * this.data[0].x[i]);
        this.data[0].y[i] = val;// (val > 0) ? 1 : 0;
    }
    Plotly.newPlot(this.id, this.data, this.layout, this.config);
};
h0v2clk.update = function (animT, animDt) {
    Plotly.update(this.id, this.data, this.layout, this.config);
    for (let i = 0; i < this.data[0].x.length; ++i) {
        this.data[0].x[i] = i / this.data[0].x.length + this.dt * animT;
        var val = Math.sin(2 * Math.PI * this.clkFrq * this.data[0].x[i]);
        this.data[0].y[i] = val;// (val > 0) ? 1 : 0;
    }
}
h0v2clk.reset = function () {
    for (let i = 0; i < this.data[0].x.length; ++i) {
        this.data[0].x[i] = i / this.data[0].x.length;
        var val = Math.sin(2 * Math.PI * this.clkFrq * this.data[0].x[i]);
        this.data[0].y[i] = val;// (val > 0) ? 1 : 0;
    }
    this.update(0, 0);
};
