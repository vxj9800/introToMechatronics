let h0v2Throttle = new anim('h0v2Throttle');
h0v2Throttle.initThrottle = 4.9;
h0v2Throttle.init = function () {
    this.elem.value = this.initThrottle;
    this.elem.disabled = true;
    document.getElementById('h0v2Throttle' + 'Output').value = this.initThrottle.toFixed(2);
}
h0v2Throttle.play = function () {
    this.elem.disabled = false;
}
h0v2Throttle.pause = function () {
    this.elem.disabled = true;
}
h0v2Throttle.reset = function () {
    this.init();
}

let h0v2BlockAnim = new anim('h0v2BlockAnim');
h0v2BlockAnim.throttleVal = 4.9;
h0v2BlockAnim.m = 1;
h0v2BlockAnim.g = 9.8;
h0v2BlockAnim.slopeAng = Math.PI / 6;
h0v2BlockAnim.x = 0;
h0v2BlockAnim.xd = 0;
h0v2BlockAnim.dt = 0.016;
h0v2BlockAnim.blockXCoords = [0, 0, 1, 1, 0];
h0v2BlockAnim.blockYCoords = [0, 1, 1, 0, 0];
h0v2BlockAnim.data = [{ // Floor
    x: [0, 7], // x axis data
    y: [0, 7 * Math.tan(Math.PI / 6)], // y axis data
    mode: 'lines',
    line: {
        simplify: false,
        width: 3,
        color: 'white',
    },
}, { // Actual Block
    x: new Array(5), // x axis data
    y: new Array(5), // y axis data
    mode: 'lines',
    fill: 'toself',
    fillcolor: 'rgba(30, 117, 179, 0.5)',
    line: {
        simplify: false,
        width: 3,
        color: '#1f77b4',
    },
}, { // Desired Block
    x: new Array(5), // x axis data
    y: new Array(5), // y axis data
    mode: 'lines',
    line: {
        dash: 'dashdot',
        simplify: false,
        width: 3,
        color: '#1f77b4',
    },
},];
h0v2BlockAnim.layout = {
    autosize: true,
    margin: {
        l: 50,
        r: 10,
        b: 30,
        t: 10,
        pad: 0,
    },
    xaxis: {
        gridcolor: '#505050',
        showline: true,
        range: [-0.5, 7],
        dtick: 1,
        tickfont: { family: 'Garamond,serif', size: 20, color: 'white' },
    },
    yaxis: {
        gridcolor: '#505050',
        showline: true,
        showticklabels: false,
        scaleanchor: "x",
        scaleratio: 1,
        range: [-0.05, 4.5],
        tickfont: { family: 'Garamond,serif', size: 20, color: 'white' },
    },
    paper_bgcolor: '#ffffff00',
    plot_bgcolor: '#ffffff00',
    showlegend: false,
};
h0v2BlockAnim.config = {
    staticPlot: true,
    displayModeBar: false,
    scrollZoom: false,
};
h0v2BlockAnim.der = function (t,x) {
    dx = math.zeros(2, 1);
    dx.set([0, 0], x.get([1, 0]));
    dx.set([1, 0], (this.throttleVal - this.m * this.g * Math.sin(this.slopeAng)) / this.m);
    return dx;
}
h0v2BlockAnim.init = function () {
    this.x = 0; this.xd = 0; this.throttleVal = 4.9;
    for (let i = 0; i < this.data[1].x.length; ++i) {
        this.data[1].x[i] = (this.x + this.blockXCoords[i]) * Math.cos(this.slopeAng) - (this.blockYCoords[i]) * Math.sin(this.slopeAng);
        this.data[1].y[i] = (this.x + this.blockXCoords[i]) * Math.sin(this.slopeAng) + (this.blockYCoords[i]) * Math.cos(this.slopeAng);
    }

    let desXPos = 5 / Math.cos(this.slopeAng);
    for (let i = 0; i < this.data[2].x.length; ++i) {
        this.data[2].x[i] = (desXPos + this.blockXCoords[i]) * Math.cos(this.slopeAng) - (this.blockYCoords[i]) * Math.sin(this.slopeAng);
        this.data[2].y[i] = (desXPos + this.blockXCoords[i]) * Math.sin(this.slopeAng) + (this.blockYCoords[i]) * Math.cos(this.slopeAng);
    }
    Plotly.newPlot(this.id, this.data, this.layout, this.config);
}
h0v2BlockAnim.update = function (tAnim,dtAnim) {
    T = tAnim * this.dt;
    h = dtAnim * this.dt;
    this.throttleVal = h0v2Throttle.elem.value;
    X = math.matrix([[this.x], [this.xd]]);
    // Runge-Kutta 4th order
    const k1 = this.der(T, X)

    const s1 = math.add(X, math.multiply(k1, h / 2));
    const k2 = this.der(T + h / 2, s1)

    const s2 = math.add(X, math.multiply(k2, h / 2));
    const k3 = this.der(T + h / 2, s2)

    const s3 = math.add(X, math.multiply(k3, h));
    const k4 = this.der(T + h, s3) // derh0v2blockAnimPlot(t + h, y_n + k3*h)
    X = math.add(X, math.multiply(math.add(math.add(math.divide(k1, 6), math.divide(k2, 3)), math.add(math.divide(k3, 3), math.divide(k4, 6))), h));

    this.x = X.get([0, 0]);
    this.xd = X.get([1, 0]);

    for (let i = 0; i < this.data[1].x.length; ++i) {
        this.data[1].x[i] = (this.x + this.blockXCoords[i]) * Math.cos(this.slopeAng) - (this.blockYCoords[i]) * Math.sin(this.slopeAng);
        this.data[1].y[i] = (this.x + this.blockXCoords[i]) * Math.sin(this.slopeAng) + (this.blockYCoords[i]) * Math.cos(this.slopeAng);
    }
    Plotly.update(this.id, this.data, this.layout)
}
h0v2BlockAnim.reset = function () {
    Plotly.purge(this.id);
    this.init();
}

let h0v2BlockPosPlot = new anim('h0v2BlockPosPlot');
h0v2BlockPosPlot.dt = 0.016;
h0v2BlockPosPlot.data = [{ // Pos vs time
    x: [0], // x axis data
    y: [0], // y axis data
    mode: 'lines',
    line: {
        simplify: false,
        width: 3,
    },
}, { // Set-point
    x: [0, 0], // x axis data
    y: [5, 5], // y axis data
    mode: 'lines',
    line: {
        dash: 'dashdot',
        simplify: false,
        width: 3,
        color: '#1f77b4',
    },
},];
h0v2BlockPosPlot.layout = {
    autosize: true,
    margin: {
        l: 50,
        r: 10,
        b: 50,
        t: 10,
        pad: 0,
    },
    xaxis: {
        title: 'Time (s)',
        titlefont: {
            family: 'Garamond,serif',
            size: 20,
            color: 'white',
        },
        showline: true,
        gridcolor: '#505050',
        tickfont: { family: 'Garamond,serif', size: 20, color: 'white' },
    },
    yaxis: {
        title: 'x Displacement',
        titlefont: {
            family: 'Garamond,serif',
            size: 20,
            color: 'white',
        },
        showline: true,
        gridcolor: '#505050',
        tickfont: { family: 'Garamond,serif', size: 20, color: 'white' },
    },
    paper_bgcolor: '#ffffff00',
    plot_bgcolor: '#ffffff00',
    showlegend: false,
};
h0v2BlockPosPlot.config = {
    staticPlot: true,
    displayModeBar: false,
    scrollZoom: false,
};
h0v2BlockPosPlot.init = function () {
    Plotly.newPlot(this.id, this.data, this.layout, this.config);
}
h0v2BlockPosPlot.update = function (tAnim,dtAnim) {
    let t = tAnim * this.dt;
    let pos = h0v2BlockAnim.data[1].x[0];
    if (t < 120) {
        this.data[1].x[1] = t;
        Plotly.update(this.id, this.data, this.layout);
        Plotly.extendTraces(this.id, { x: [[t]], y: [[pos]] }, [0])
    }
}
h0v2BlockPosPlot.reset = function () {
    this.data[0].x = [0];
    this.data[0].y = [0];
    this.data[1].x = [0, 0];
    Plotly.purge(this.id);
    this.init();
}