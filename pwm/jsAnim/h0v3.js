let h0v3ClkDivInt = new anim('h0v3ClkDivInt');
h0v3ClkDivInt.val = 1;
h0v3ClkDivInt.init = function(){
    this.val = 1;
    this.elem.value = this.val;
};
h0v3ClkDivInt.handleChange = function(){
    this.val = Number(this.elem.value);
    if (isNaN(this.val) || this.val < 1)
        this.val = 1;
    else if (this.val > 255)
        this.val = 255;
    this.elem.value = this.val;
};
h0v3ClkDivInt.reset = function(){
    this.init();
};

let h0v3ClkDivFrc = new anim('h0v3ClkDivFrc');
h0v3ClkDivFrc.val = 0;
h0v3ClkDivFrc.init = function(){
    this.val = 0;
    this.elem.value = this.val;
};
h0v3ClkDivFrc.handleChange = function(){
    this.val = Number(this.elem.value);
    if (isNaN(this.val) || this.val < 0)
        this.val = 0;
    else if (this.val > 15)
        this.val = 15;
    this.elem.value = this.val;
};
h0v3ClkDivFrc.reset = function(){
    this.init();
};

let h0v3ClkDiv = new anim('h0v3ClkDiv');
h0v3ClkDiv.valInt = 1;
h0v3ClkDiv.valFrc = 0;
h0v3ClkDiv.val = 16; // valInt*16 + valFrc
h0v3ClkDiv.init = function(){
    this.valInt = h0v3ClkDivInt.val;
    this.valFrc = h0v3ClkDivFrc.val;
    this.val = this.valInt*16 + this.valFrc;
    this.elem.innerHTML = `Clock<br>Divider<br>${Math.floor(this.val/16)}<sup>${this.val%16}</sup>&frasl;<sub>${16}</sub>`;
};
h0v3ClkDiv.update = function(){
    if (this.valInt != h0v3ClkDivInt.val || this.valFrc != h0v3ClkDivFrc.val){
        this.valInt = h0v3ClkDivInt.val;
        this.valFrc = h0v3ClkDivFrc.val;
        anime({
            targets: this,
            val: this.valInt*16 + this.valFrc,
            easing: 'easeOutCubic',
            duration: 2000,
            round: 1,
            update: function() {
                h0v3ClkDiv.elem.innerHTML = `Clock<br>Divider<br>${Math.floor(h0v3ClkDiv.val/16)}<sup>${h0v3ClkDiv.val%16}</sup>&frasl;<sub>${16}</sub>`;
            }
        });
    }
};
h0v3ClkDiv.reset = function(){
    this.init();
};

let h0v3SysClk = new anim('h0v3SysClk');
h0v3SysClk.clkFrq = 125000000;
h0v3SysClk.dt = 1/125000000/10;
h0v3SysClk.data = [{
    x: new Array(1000), // x axis data
    y: new Array(1000), // y axis data
    mode: 'lines',
    line: {
        simplify: false,
        width: 3,
    },    // data line property
}];
h0v3SysClk.layout = {
    title: 'System Clock',
        titlefont: {
            family: 'Garamond,serif',
            size: 24,
            color: 'white',
        },
    autosize: false,
    width: 550,
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
h0v3SysClk.config = {
    staticPlot: true,
};
h0v3SysClk.init = function () {
    for (let i = 0; i < this.data[0].x.length; ++i) {
        this.data[0].x[i] = i*this.dt/10;
        var val = Math.sin(2 * Math.PI * this.clkFrq * this.data[0].x[i]);
        this.data[0].y[i] = (val > 0) ? 1 : 0;
    }
    Plotly.newPlot(this.id, this.data, this.layout, this.config);
};
h0v3SysClk.update = function (animT, animDt) {
    Plotly.update(this.id, this.data, this.layout, this.config);
    for (let i = 0; i < this.data[0].x.length; ++i) {
        this.data[0].x[i] = i*this.dt/10 + this.dt * animT;
        var val = Math.sin(2 * Math.PI * this.clkFrq * this.data[0].x[i]);
        this.data[0].y[i] = (val > 0) ? 1 : 0;
    }
};
h0v3SysClk.reset = function () {
    for (let i = 0; i < this.data[0].x.length; ++i) {
        this.data[0].x[i] = i*this.dt/10;
        var val = Math.sin(2 * Math.PI * this.clkFrq * this.data[0].x[i]);
        this.data[0].y[i] = (val > 0) ? 1 : 0;
    }
    this.update(0, 0);
};

let h0v3DivClk = new anim('h0v3DivClk');
h0v3DivClk.clkFrq = 125000000;
h0v3DivClk.dt = 1/125000000/10;
h0v3DivClk.data = [{
    x: new Array(1000), // x axis data
    y: new Array(1000), // y axis data
    mode: 'lines',
    line: {
        simplify: false,
        width: 3,
    },    // data line property
}];
h0v3DivClk.layout = {
    title: 'Frequency Divided Clock',
        titlefont: {
            family: 'Garamond,serif',
            size: 24,
            color: 'white',
        },
    autosize: false,
    width: 550,
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
h0v3DivClk.config = {
    staticPlot: true,
};
h0v3DivClk.init = function () {
    this.clkFrq = h0v3SysClk.clkFrq/h0v3ClkDiv.val*16;
    for (let i = 0; i < this.data[0].x.length; ++i) {
        this.data[0].x[i] = i*this.dt/10;
        var val = Math.sin(2 * Math.PI * this.clkFrq * this.data[0].x[i]);
        this.data[0].y[i] = (val > 0) ? 1 : 0;
    }
    Plotly.newPlot(this.id, this.data, this.layout, this.config);
};
h0v3DivClk.update = function (animT, animDt) {
    this.clkFrq = h0v3SysClk.clkFrq/h0v3ClkDiv.val*16;
    Plotly.update(this.id, this.data, this.layout, this.config);
    for (let i = 0; i < this.data[0].x.length; ++i) {
        this.data[0].x[i] = i*this.dt/10 + this.dt * animT;
        var val = Math.sin(2 * Math.PI * this.clkFrq * this.data[0].x[i]);
        this.data[0].y[i] = (val > 0) ? 1 : 0;
    }
};
h0v3DivClk.reset = function () {
    this.clkFrq = h0v3SysClk.clkFrq/h0v3ClkDiv.val*16;
    for (let i = 0; i < this.data[0].x.length; ++i) {
        this.data[0].x[i] = i*this.dt/10;
        var val = Math.sin(2 * Math.PI * this.clkFrq * this.data[0].x[i]);
        this.data[0].y[i] = (val > 0) ? 1 : 0;
    }
    this.update(0, 0);
};