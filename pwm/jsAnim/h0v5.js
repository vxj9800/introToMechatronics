let h0v5TopReg = new anim('h0v5TopReg');
h0v5TopReg.val = 0;
h0v5TopReg.init = function(){
    anime.remove(this.elem);
    this.val = 0;
    this.elem.value = this.val;
};
h0v5TopReg.handleChange = function(){
    anime.remove(this.elem);
    this.val = Number(this.elem.value);
    if (isNaN(this.val))
        this.val = 0;
    else if (this.val > 65535)
        this.val = 65535;
    this.elem.value = this.val;
};
h0v5TopReg.reset = function(){
    this.init();
};

let h0v5CtrReg = new anim('h0v5CtrReg');
h0v5CtrReg.val = 0;
h0v5CtrReg.divClkFrq = 1000000;
h0v5CtrReg.dt = 1/1000000/10;
h0v5CtrReg.init = function(){
    this.val = 0;
    this.elem.value = this.val;
};
h0v5CtrReg.update = function(animT, animDt){
    this.val = Math.floor(this.dt * animT * this.divClkFrq) % (h0v5TopReg.val + 1);
    this.elem.value = this.val;
};
h0v5CtrReg.reset = function(){
    this.init();
};

let h0v5CcReg = new anim('h0v5CcReg');
h0v5CcReg.val = 0;
h0v5CcReg.init = function(){
    anime.remove(this.elem);
    this.val = 0;
    this.elem.value = this.val;
};
h0v5CcReg.handleChange = function(){
    anime.remove(this.elem);
    this.val = Number(this.elem.value);
    if (isNaN(this.val))
        this.val = 0;
    else if (this.val > 65535)
        this.val = 65535;
    this.elem.value = this.val;
};
h0v5CcReg.reset = function(){
    this.init();
};

let h0v5PwmOut = new anim('h0v5PwmOut');
h0v5PwmOut.frq = h0v5CtrReg.divClkFrq/(h0v5TopReg.val+1);
h0v5PwmOut.dt = 1/h0v5CtrReg.divClkFrq/10;
h0v5PwmOut.data = [{
    x: new Array(1000), // x axis data
    y: new Array(1000), // y axis data
    mode: 'lines',
    line: {
        simplify: false,
        width: 3,
    },    // data line property
}];
h0v5PwmOut.layout = {
    title: 'PWM Output',
        titlefont: {
            family: 'Garamond,serif',
            size: 24,
            color: 'white',
        },
    autosize: false,
    width: 800,
    height: 300,
    margin: {
        l: 40,
        r: 10,
        b: 40,
        t: 40,
        pad: 0,
    },
    xaxis: {
        gridcolor: '#505050',
        autorange: 'reversed',
        zeroline: false,
        tickcolor: '#fff',
        tickfont: { family: 'Garamond,serif', size: 20, color: '#fff' },
    },
    yaxis: {
        gridcolor: '#505050',
        range: [0, 1],
        zeroline: false,
        tickcolor: '#fff',
        tickfont: { family: 'Garamond,serif', size: 20, color: '#fff' },
        showgrid: false,
        dtick: 1,
    },
    paper_bgcolor: '#ffffff00',
    plot_bgcolor: '#ffffff00',
};
h0v5PwmOut.config = {
    staticPlot: true,
};
h0v5PwmOut.init = function () {
    this.frq = h0v5CtrReg.divClkFrq/(h0v5TopReg.val+1);
    for (let i = 0; i < this.data[0].x.length; ++i) {
        this.data[0].x[i] = i*this.dt/10;
        var val = this.data[0].x[i]*h0v5CtrReg.divClkFrq;
        this.data[0].y[i] = (val % (h0v5TopReg.val+1) < h0v5CcReg.val) ? 1 : 0;
    }
    Plotly.newPlot(this.id, this.data, this.layout, this.config);
};
h0v5PwmOut.update = function (animT, animDt) {
    Plotly.update(this.id, this.data, this.layout, this.config);
    this.frq = h0v5CtrReg.divClkFrq/(h0v5TopReg.val+1);
    for (let i = 0; i < this.data[0].x.length; ++i) {
        this.data[0].x[i] = i*this.dt/10 + this.dt * animT;
        var val = this.data[0].x[i]*h0v5CtrReg.divClkFrq;
        this.data[0].y[i] = (val % (h0v5TopReg.val+1) < h0v5CcReg.val) ? 1 : 0;
    }
};
h0v5PwmOut.reset = function () {
    this.frq = h0v5CtrReg.divClkFrq/(h0v5TopReg.val+1);
    for (let i = 0; i < this.data[0].x.length; ++i) {
        this.data[0].x[i] = i*this.dt/10;
        var val = this.data[0].x[i]*h0v5CtrReg.divClkFrq;
        this.data[0].y[i] = (val % (h0v5TopReg.val+1) < h0v5CcReg.val) ? 1 : 0;
    }
    this.update(0, 0);
};