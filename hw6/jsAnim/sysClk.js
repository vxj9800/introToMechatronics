let h0v1sysClk = new anim('h0v1sysClk');
h0v1sysClk.clkFrq = 10;
h0v1sysClk.dt = 0.016;
h0v1sysClk.data = [{
    x: new Array(1000), // x axis data
    y: new Array(1000), // y axis data
    mode: 'lines',
    line: {
        simplify: false,
        width: 3,
    },    // data line property
}];
h0v1sysClk.layout = {
    title: 'System Clock',
    titlefont: {
        family: 'Garamond,serif',
        size: 24,
        color: 'white',
    },
    autosize: false,
    width: 500,
    height: 150,
    margin: {
        l: 40,
        r: 10,
        b: 40,
        t: 40,
        pad: 0,
    },
    xaxis: {
        autorange: 'reversed',
        zeroline: false,
        tickcolor: '#fff',
        tickfont: { family: 'Garamond,serif', size: 20, color: '#fff' },
    },
    yaxis: {
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
h0v1sysClk.config = {
    staticPlot: true,
};
h0v1sysClk.init = function () {
    for (let i = 0; i < this.data[0].x.length; ++i) {
        this.data[0].x[i] = i / this.data[0].x.length;
        var val = Math.sin(2 * Math.PI * this.clkFrq * this.data[0].x[i]);
        this.data[0].y[i] = (val > 0) ? 1 : 0;
    }
    Plotly.newPlot(this.id, this.data, this.layout, this.config);
};
h0v1sysClk.update = function (animT, animDt) {
    Plotly.update(this.id, this.data, this.layout, this.config);
    for (let i = 0; i < this.data[0].x.length; ++i) {
        this.data[0].x[i] = i / this.data[0].x.length + this.dt * animT;
        var val = Math.sin(2 * Math.PI * this.clkFrq * this.data[0].x[i]);
        this.data[0].y[i] = (val > 0) ? 1 : 0;
    }
}
h0v1sysClk.reset = function () {
    for (let i = 0; i < this.data[0].x.length; ++i) {
        this.data[0].x[i] = i / this.data[0].x.length;
        var val = Math.sin(2 * Math.PI * this.clkFrq * this.data[0].x[i]);
        this.data[0].y[i] = (val > 0) ? 1 : 0;
    }
    this.update(0, 0);
};