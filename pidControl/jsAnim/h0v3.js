let h0v3Throttle = new anim('h0v3Throttle');
h0v3Throttle.initThrottle = 4.9;
h0v3Throttle.throttleFrq = 0.2;
h0v3Throttle.dt = 0.016;
h0v3Throttle.init = function () {
    this.elem.value = this.initThrottle;
    this.elem.disabled = true;
    document.getElementById('h0v3Throttle' + 'Output').value = this.initThrottle.toFixed(2);
}
h0v3Throttle.update = function (tAnim,dtAnim) {
    let t = tAnim * this.dt;
    this.elem.value = this.initThrottle + Math.sin(2 * Math.PI * this.throttleFrq * t);
    document.getElementById('h0v3Throttle' + 'Output').value = Number(this.elem.value).toFixed(2);
}
h0v3Throttle.reset = function () {
    this.init();
}

let h0v3BlockAnim = new anim('h0v3BlockAnim');
h0v3BlockAnim.throttleVal = 4.9;
h0v3BlockAnim.m = 1;
h0v3BlockAnim.g = 9.8;
h0v3BlockAnim.slopeAng = Math.PI / 6;
h0v3BlockAnim.x = 5 / Math.cos(Math.PI / 6) / 2;
h0v3BlockAnim.xd = -5 / 2 / Math.PI;
h0v3BlockAnim.xDes = 5 / Math.cos(Math.PI / 6);
h0v3BlockAnim.dt = 0.016;
h0v3BlockAnim.blockXCoords = [0, 0, 1, 1, 0];
h0v3BlockAnim.blockYCoords = [0, 1, 1, 0, 0];
h0v3BlockAnim.data = [{ // Floor
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
h0v3BlockAnim.layout = {
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
        tickfont: { family: 'Garamond,serif', size: 20, color: 'white' },
    },
    yaxis: {
        gridcolor: '#505050',
        showline: true,
        showticklabels: false,
        scaleanchor: "x",
        scaleratio: 1,
        range: [-0.5, 4.5],
        tickfont: { family: 'Garamond,serif', size: 20, color: 'white' },
    },
    annotations: new Array(6),
    paper_bgcolor: '#ffffff00',
    plot_bgcolor: '#ffffff00',
    showlegend: false,
};
h0v3BlockAnim.config = {
    staticPlot: true,
    displayModeBar: false,
    scrollZoom: false,
};
h0v3BlockAnim.der = function (t,x) {
    dx = math.zeros(2, 1);
    dx.set([0, 0], x.get([1, 0]));
    dx.set([1, 0], (this.throttleVal - this.m * this.g * Math.sin(this.slopeAng)) / this.m);
    return dx;
}
h0v3BlockAnim.outVarTxt = function () { // Draw the h0v3blockAnim output variable annotation
    let stArrX = (this.x) * Math.cos(this.slopeAng) - (-0.15) * Math.sin(this.slopeAng);
    let stArrY = (this.x) * Math.sin(this.slopeAng) + (-0.15) * Math.cos(this.slopeAng);
    let stArraX = (0) * Math.cos(this.slopeAng) - (-0.15) * Math.sin(this.slopeAng);
    let stArraY = (0) * Math.sin(this.slopeAng) + (-0.15) * Math.cos(this.slopeAng);
    let stTxtX = (this.x / 2) * Math.cos(this.slopeAng) - (-0.25) * Math.sin(this.slopeAng);
    let stTxtY = (this.x / 2) * Math.sin(this.slopeAng) + (-0.25) * Math.cos(this.slopeAng);
    this.layout.annotations[0] = {//Output right arrow
        x: stArrX,
        y: stArrY,
        xref: 'x',
        yref: 'y',
        showarrow: true,
        arrowhead: 3,
        arrowside: "start+end",
        arrowcolor: 'white',
        ax: stArraX,
        ay: stArraY,
        axref: 'x',
        ayref: 'y',
    };
    this.layout.annotations[1] = {//Output text
        x: stTxtX,
        y: stTxtY,
        xref: 'x',
        yref: 'y',
        showarrow: false,
        text: '$x$',
        textangle: -30,
        font: { family: 'Garamond,serif', size: 24, color: 'white' },
    };
}
h0v3BlockAnim.inVarTxt = function () {
    let spArrX = (this.xDes) * Math.cos(this.slopeAng) - (-0.5) * Math.sin(this.slopeAng);
    let spArrY = (this.xDes) * Math.sin(this.slopeAng) + (-0.5) * Math.cos(this.slopeAng);
    let spArraX = (0) * Math.cos(this.slopeAng) - (-0.5) * Math.sin(this.slopeAng);
    let spArraY = (0) * Math.sin(this.slopeAng) + (-0.5) * Math.cos(this.slopeAng);
    let spTxtX = (this.xDes / 2) * Math.cos(this.slopeAng) - (-0.6) * Math.sin(this.slopeAng);
    let spTxtY = (this.xDes / 2) * Math.sin(this.slopeAng) + (-0.6) * Math.cos(this.slopeAng);
    this.layout.annotations[2] = {//Output right arrow
        x: spArrX,
        y: spArrY,
        xref: 'x',
        yref: 'y',
        showarrow: true,
        arrowhead: 3,
        arrowside: "start+end",
        arrowcolor: 'white',
        ax: spArraX,
        ay: spArraY,
        axref: 'x',
        ayref: 'y',
    };
    this.layout.annotations[3] = {//Output text
        x: spTxtX,
        y: spTxtY,
        xref: 'x',
        yref: 'y',
        showarrow: false,
        text: '$x_{des}$',
        textangle: -30,
        font: { family: 'Garamond,serif', size: 24, color: 'white' },
    };
}
h0v3BlockAnim.errVarTxt = function () {
    let errArrX = (this.xDes) * Math.cos(this.slopeAng) - (-0.15) * Math.sin(this.slopeAng);
    let errArrY = (this.xDes) * Math.sin(this.slopeAng) + (-0.15) * Math.cos(this.slopeAng);
    let errArraX = (this.x) * Math.cos(this.slopeAng) - (-0.15) * Math.sin(this.slopeAng);
    let errArraY = (this.x) * Math.sin(this.slopeAng) + (-0.15) * Math.cos(this.slopeAng);
    let errTxtX = (this.x + this.xDes) / 2 * Math.cos(this.slopeAng) - (-0.25) * Math.sin(this.slopeAng);
    let errTxtY = (this.x + this.xDes) / 2 * Math.sin(this.slopeAng) + (-0.25) * Math.cos(this.slopeAng);
    this.layout.annotations[4] = {//Output right arrow
        x: errArrX,
        y: errArrY,
        xref: 'x',
        yref: 'y',
        showarrow: true,
        arrowhead: 3,
        arrowside: "start+end",
        arrowcolor: 'white',
        ax: errArraX,
        ay: errArraY,
        axref: 'x',
        ayref: 'y',
    };
    this.layout.annotations[5] = {//Output text
        x: errTxtX,
        y: errTxtY,
        xref: 'x',
        yref: 'y',
        showarrow: false,
        text: '$e$',
        textangle: -30,
        font: { family: 'Times, serif', size: 24, color: 'white' },
    };
}
h0v3BlockAnim.init = function () {
    this.x = 5 / Math.cos(this.slopeAng) / 2; this.xd = -5 / 2 / Math.PI; this.throttleVal = 4.9;
    for (let i = 0; i < this.data[1].x.length; ++i) {
        this.data[1].x[i] = (this.x + this.blockXCoords[i]) * Math.cos(this.slopeAng) - (this.blockYCoords[i]) * Math.sin(this.slopeAng);
        this.data[1].y[i] = (this.x + this.blockXCoords[i]) * Math.sin(this.slopeAng) + (this.blockYCoords[i]) * Math.cos(this.slopeAng);
    }

    this.xDes = 5 / Math.cos(this.slopeAng);
    for (let i = 0; i < this.data[2].x.length; ++i) {
        this.data[2].x[i] = (this.xDes + this.blockXCoords[i]) * Math.cos(this.slopeAng) - (this.blockYCoords[i]) * Math.sin(this.slopeAng);
        this.data[2].y[i] = (this.xDes + this.blockXCoords[i]) * Math.sin(this.slopeAng) + (this.blockYCoords[i]) * Math.cos(this.slopeAng);
    }
    this.outVarTxt();
    this.inVarTxt();
    this.errVarTxt()
    Plotly.newPlot(this.id, this.data, this.layout, this.config);
}
h0v3BlockAnim.update = function (tAnim,dtAnim) {
    T = tAnim * this.dt;
    h = dtAnim * this.dt;
    this.throttleVal = h0v3Throttle.elem.value;
    X = math.matrix([[this.x], [this.xd]]);
    // Runge-Kutta 4th order
    const k1 = this.der(T, X)

    const s1 = math.add(X, math.multiply(k1, h / 2));
    const k2 = this.der(T + h / 2, s1)

    const s2 = math.add(X, math.multiply(k2, h / 2));
    const k3 = this.der(T + h / 2, s2)

    const s3 = math.add(X, math.multiply(k3, h));
    const k4 = this.der(T + h, s3) // derh0v3blockAnimPlot(t + h, y_n + k3*h)
    X = math.add(X, math.multiply(math.add(math.add(math.divide(k1, 6), math.divide(k2, 3)), math.add(math.divide(k3, 3), math.divide(k4, 6))), h));

    this.x = X.get([0, 0]);
    this.xd = X.get([1, 0]);

    for (let i = 0; i < this.data[1].x.length; ++i) {
        this.data[1].x[i] = (this.x + this.blockXCoords[i]) * Math.cos(this.slopeAng) - (this.blockYCoords[i]) * Math.sin(this.slopeAng);
        this.data[1].y[i] = (this.x + this.blockXCoords[i]) * Math.sin(this.slopeAng) + (this.blockYCoords[i]) * Math.cos(this.slopeAng);
    }

    this.xDes = 5 / Math.cos(this.slopeAng) + Math.sin(2 * Math.PI * 0.3 * T);
    for (let i = 0; i < this.data[2].x.length; ++i) {
        this.data[2].x[i] = (this.xDes + this.blockXCoords[i]) * Math.cos(this.slopeAng) - (this.blockYCoords[i]) * Math.sin(this.slopeAng);
        this.data[2].y[i] = (this.xDes + this.blockXCoords[i]) * Math.sin(this.slopeAng) + (this.blockYCoords[i]) * Math.cos(this.slopeAng);
    }

    this.outVarTxt();
    this.inVarTxt();
    this.errVarTxt()
    Plotly.update(this.id, this.data, this.layout)
}
h0v3BlockAnim.reset = function () {
    Plotly.purge(this.id);
    this.init();
}