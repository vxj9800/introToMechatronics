let h0v1BulbLight = new anim('h0v1BulbLight');
h0v1BulbLight.initVoltageVal = 0.1;
h0v1BulbLight.glowCircRadius = 110.3;
h0v1BulbLight.init = function () {
    this.elem.setAttribute("r", this.glowCircRadius * this.initVoltageVal ** 3);
}
h0v1BulbLight.update = function () {
    voltageRangeElem = document.getElementById("h0v1VoltageVal");
    this.elem.setAttribute("r", this.glowCircRadius * voltageRangeElem.value ** 3);
}
h0v1BulbLight.reset = function () {
    this.init();
}

let h0v1Volts = new anim('h0v1Volts');
h0v1Volts.initVoltageVal = 0.1;
h0v1Volts.init = function () {
    this.elem.innerHTML = (this.initVoltageVal * 12).toFixed(1) + 'V';
}
h0v1Volts.update = function () {
    voltageRangeElem = document.getElementById("h0v1VoltageVal");
    this.elem.innerHTML = (voltageRangeElem.value * 12).toFixed(1) + 'V';
}
h0v1Volts.reset = function () {
    this.init();
}

let h0v1VoltageVal = new anim('h0v1VoltageVal');
h0v1VoltageVal.initVoltageVal = 0.1;
h0v1VoltageVal.init = function () {
    this.elem.value = this.initVoltageVal;
    this.elem.disabled = true;
}
h0v1VoltageVal.play = function () {
    this.elem.disabled = false;
}
h0v1VoltageVal.pause = function () {
    this.elem.disabled = true;
}
h0v1VoltageVal.reset = function () {
    this.init();
}

let h0v1BulbIlumPlot = new anim('h0v1BulbIlumPlot');
h0v1BulbIlumPlot.initVoltageVal = 0.1;
h0v1BulbIlumPlot.data = [{
    x: new Array(100), // x axis data
    y: new Array(100), // y axis data
    mode: 'lines',
    line: {
        simplify: false,
        width: 3,
    },    // data line property
}, {
    x: [0], // x axis data
    y: [0], // y axis data
    mode: 'markers',
    type: 'scatter',
    marker: { size: 12 },
}];
h0v1BulbIlumPlot.layout = {
    autosize: true,
    margin: {
        l: 70,
        r: 10,
        b: 70,
        t: 10,
        pad: 0,
    },
    xaxis: {
        title: 'Voltage (V)',
        titlefont: {
            family: 'Garamond,serif',
            size: 20,
            color: 'white',
        },
        gridcolor: '#505050',
        range: [0, 12],
        tickcolor: '#fff',
        tickfont: { family: 'Garamond,serif', size: 20, color: '#fff' },
    },
    yaxis: {
        title: 'Illumination (lumens)',
        titlefont: {
            family: 'Garamond,serif',
            size: 20,
            color: 'white',
        },
        gridcolor: '#505050',
        range: [0, 700],
        tickcolor: '#fff',
        tickfont: { family: 'Garamond,serif', size: 20, color: '#fff' },
        // showticklabels: false,
    },
    paper_bgcolor: '#ffffff00',
    plot_bgcolor: '#ffffff00',
    showlegend: false,
};
h0v1BulbIlumPlot.config = {
    staticPlot: true,
    displayModeBar: false,
    scrollZoom: false,
};
h0v1BulbIlumPlot.init = function () {
    for (let i = 0; i < this.data[0].x.length; ++i) {
        this.data[0].x[i] = i / this.data[0].x.length * 12;
        this.data[0].y[i] = (i / this.data[0].x.length) ** 3 * 700;
    }
    this.data[1].x[0] = this.initVoltageVal * 12;
    this.data[1].y[0] = this.initVoltageVal ** 3 * 700;
    Plotly.newPlot(this.id, this.data, this.layout, this.config);
}
h0v1BulbIlumPlot.update = function () {
    voltageRangeElem = document.getElementById("h0v1VoltageVal");
    this.data[1].x[0] = voltageRangeElem.value * 12;
    this.data[1].y[0] = voltageRangeElem.value ** 3 * 700;
    Plotly.update(this.id, this.data, this.layout);
}
h0v1BulbIlumPlot.reset = function () {
    Plotly.purge(this.id);
    this.init();
}