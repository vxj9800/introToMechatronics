let h0v4TopReg = new anim('h0v4TopReg');
h0v4TopReg.val = 0;
h0v4TopReg.init = function(){
    anime.remove(this.elem);
    this.val = 0;
    this.elem.value = this.val;
};
h0v4TopReg.handleChange = function(){
    anime.remove(this.elem);
    this.val = Number(this.elem.value);
    if (isNaN(this.val))
        this.val = 0;
    else if (this.val > 65535)
        this.val = 65535;
    this.elem.value = this.val;
};
h0v4TopReg.reset = function(){
    this.init();
};

let h0v4CtrReg = new anim('h0v4CtrReg');
h0v4CtrReg.val = 0;
h0v4CtrReg.init = function(){
    this.val = 0;
    this.elem.value = this.val;
};
h0v4CtrReg.update = function(){
    this.val = Math.floor(h0v4DivClk.data[0].x[0] * h0v4DivClk.clkFrq) % (h0v4TopReg.val + 1);
    this.elem.value = this.val;
};
h0v4CtrReg.reset = function(){
    this.init();
};

let h0v4DivClk = new anim('h0v4DivClk');
h0v4DivClk.clkFrq = 1000000;
h0v4DivClk.dt = 1/1000000/10;
h0v4DivClk.data = [{
    x: new Array(1000), // x axis data
    y: new Array(1000), // y axis data
    mode: 'lines',
    line: {
        simplify: false,
        width: 3,
    },    // data line property
}];
h0v4DivClk.layout = {
    title: 'Frequency Divided Clock',
        titlefont: {
            family: 'Garamond,serif',
            size: 24,
            color: 'white',
        },
    autosize: false,
    width: 600,
    height: 200,
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
h0v4DivClk.config = {
    staticPlot: true,
};
h0v4DivClk.init = function () {
    for (let i = 0; i < this.data[0].x.length; ++i) {
        this.data[0].x[i] = i*this.dt/10;
        var val = Math.sin(2 * Math.PI * this.clkFrq * this.data[0].x[i]);
        this.data[0].y[i] = (val > 0) ? 1 : 0;
    }
    Plotly.newPlot(this.id, this.data, this.layout, this.config);
};
h0v4DivClk.update = function (animT, animDt) {
    Plotly.update(this.id, this.data, this.layout, this.config);
    for (let i = 0; i < this.data[0].x.length; ++i) {
        this.data[0].x[i] = i*this.dt/10 + this.dt * animT;
        var val = Math.sin(2 * Math.PI * this.clkFrq * this.data[0].x[i]);
        this.data[0].y[i] = (val > 0) ? 1 : 0;
    }
};
h0v4DivClk.reset = function () {
    for (let i = 0; i < this.data[0].x.length; ++i) {
        this.data[0].x[i] = i*this.dt/10;
        var val = Math.sin(2 * Math.PI * this.clkFrq * this.data[0].x[i]);
        this.data[0].y[i] = (val > 0) ? 1 : 0;
    }
    this.update(0, 0);
};