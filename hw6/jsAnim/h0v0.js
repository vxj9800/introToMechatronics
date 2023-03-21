let h0v0throttleVal = new anim('h0v0throttleVal');
h0v0throttleVal.throttleVal = 0;
h0v0throttleVal.init = function () {
    this.throttleVal = 0;
    this.elem.innerHTML = this.throttleVal.toFixed(4);
};
h0v0throttleVal.update = function () {
    this.throttleVal = h0v0blockAnim.throttleVal;
    this.elem.innerHTML = this.throttleVal.toFixed(4);
};
h0v0throttleVal.reset = function () {
    this.init();
};



let h0v0xErr = new anim('h0v0xErr');
h0v0xErr.xErr = 4 / Math.cos(Math.PI / 6);
h0v0xErr.init = function () {
    this.xErr = 4 / Math.cos(Math.PI / 6);
    this.elem.innerHTML = this.xErr.toFixed(4);
};
h0v0xErr.update = function () {
    this.xErr = h0v0blockAnim.xErr;
    this.elem.innerHTML = this.xErr.toFixed(4);
};
h0v0xErr.reset = function () {
    this.init();
};

let h0v0kpVal = new anim('h0v0kpVal');
h0v0kpVal.kpVal = 0;
h0v0kpVal.init = function () {
    this.kpVal = 0;
    this.elem.value = this.kpVal;
    this.elem.addEventListener('change', this.handleChange.bind(this));
};
h0v0kpVal.handleChange = function () {
    this.kpVal = parseFloat(this.elem.value);
    if (isNaN(this.kpVal))
        this.kpVal = 0;
    this.elem.value = this.kpVal;
}

let h0v0pControlVal = new anim('h0v0pControlVal')
h0v0pControlVal.pControlVal = 0;
h0v0pControlVal.init = function () {
    this.pControlVal = 0;
    this.elem.innerHTML = this.pControlVal.toFixed(4);
};
h0v0pControlVal.update = function () {
    this.pControlVal = h0v0blockAnim.pControlVal;
    this.elem.innerHTML = this.pControlVal.toFixed(4);
};
h0v0pControlVal.reset = function () {
    this.init();
};

let h0v0kdVal = new anim('h0v0kdVal');
h0v0kdVal.kdVal = 0;
h0v0kdVal.init = function () {
    this.kdVal = 0;
    this.elem.value = this.kdVal;
    this.elem.addEventListener('change', this.handleChange.bind(this));
};
h0v0kdVal.handleChange = function () {
    this.kdVal = parseFloat(this.elem.value);
    if (isNaN(this.kdVal))
        this.kdVal = 0;
    this.elem.value = this.kdVal;
}

let h0v0dControlVal = new anim('h0v0dControlVal')
h0v0dControlVal.dControlVal = 0;
h0v0dControlVal.init = function () {
    this.dControlVal = 0;
    this.elem.innerHTML = this.dControlVal.toFixed(4);
};
h0v0dControlVal.update = function () {
    this.dControlVal = h0v0blockAnim.dControlVal;
    this.elem.innerHTML = this.dControlVal.toFixed(4);
};
h0v0dControlVal.reset = function () {
    this.init();
};

let h0v0kiVal = new anim('h0v0kiVal');
h0v0kiVal.kiVal = 0;
h0v0kiVal.init = function () {
    this.kiVal = 0;
    this.elem.value = this.kiVal;
    this.elem.addEventListener('change', this.handleChange.bind(this));
};
h0v0kiVal.handleChange = function () {
    this.kiVal = parseFloat(this.elem.value);
    if (isNaN(this.kiVal))
        this.kiVal = 0;
    this.elem.value = this.kiVal;
}

let h0v0iControlVal = new anim('h0v0iControlVal')
h0v0iControlVal.iControlVal = 0;
h0v0iControlVal.init = function () {
    this.iControlVal = 0;
    this.elem.innerHTML = this.iControlVal.toFixed(4);
};
h0v0iControlVal.update = function () {
    this.iControlVal = h0v0blockAnim.iControlVal;
    this.elem.innerHTML = this.iControlVal.toFixed(4);
};
h0v0iControlVal.reset = function () {
    this.init();
};

let h0v0blockAnim = new anim('h0v0blockAnim');
h0v0blockAnim.throttleVal = 0;
h0v0blockAnim.m = 1;
h0v0blockAnim.g = 9.8;
h0v0blockAnim.slopeAng = Math.PI / 6;
h0v0blockAnim.x = 0;
h0v0blockAnim.xd = 0;
h0v0blockAnim.xDes = 4 / h0v0blockAnim.slopeAng;
h0v0blockAnim.xdDes = 0;
h0v0blockAnim.kp = 0;
h0v0blockAnim.kd = 0;
h0v0blockAnim.ki = 0;
h0v0blockAnim.pControlVal = 0;
h0v0blockAnim.dControlVal = 0;
h0v0blockAnim.iControlVal = 0;
h0v0blockAnim.xErr = h0v0blockAnim.xDes;
h0v0blockAnim.xErrInt = 0;
h0v0blockAnim.dt = 0.016;
h0v0blockAnim.blockXCoords = [0, 0, 1, 1, 0];
h0v0blockAnim.blockYCoords = [0, 1, 1, 0, 0];
h0v0blockAnim.data = [{ // Floor
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
h0v0blockAnim.layout = {
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
h0v0blockAnim.config = {
    staticPlot: true,
    displayModeBar: false,
    scrollZoom: false,
};
h0v0blockAnim.der = function (t, x) { // Function to compute state derivatives
    dx = math.zeros(3, 1);
    this.xDes = 4 / Math.cos(Math.PI / 6) + Math.sin(2 * Math.PI * 0.5 * t);
    this.xdDes = Math.cos(2 * Math.PI * 0.5 * t);
    this.xErr = this.xDes - x.get([0, 0]);
    this.pControlVal = this.kp * this.xErr;
    this.dControlVal = this.kd * (this.xdDes - x.get([1, 0]));
    this.iControlVal = this.ki * x.get([2, 0]);
    this.throttleVal = this.pControlVal + this.dControlVal + this.iControlVal;
    dx.set([0, 0], x.get([1, 0]));
    dx.set([1, 0], (this.throttleVal - this.m * this.g * Math.sin(this.slopeAng)) / this.m);
    dx.set([2, 0], this.xErr);
    return dx;
};
h0v0blockAnim.init = function () {
    this.x = 0; this.xd = 0; this.xDes = 4 / Math.cos(Math.PI / 6); this.xdDes = 0;
    this.xErr = this.xDes - this.x; this.xErrInt = 0;
    this.kp = 0; this.kd = 0; this.ki = 0;
    this.pControlVal = 0; this.dControlVal = 0;
    this.iControlVal = 0; this.throttleVal = 0;

    for (let i = 0; i < this.data[1].x.length; ++i) {
        this.data[1].x[i] = (this.x + this.blockXCoords[i]) * Math.cos(this.slopeAng) - (this.blockYCoords[i]) * Math.sin(this.slopeAng);
        this.data[1].y[i] = (this.x + this.blockXCoords[i]) * Math.sin(this.slopeAng) + (this.blockYCoords[i]) * Math.cos(this.slopeAng);
    }

    for (let i = 0; i < this.data[2].x.length; ++i) {
        this.data[2].x[i] = (this.xDes + this.blockXCoords[i]) * Math.cos(this.slopeAng) - (this.blockYCoords[i]) * Math.sin(this.slopeAng);
        this.data[2].y[i] = (this.xDes + this.blockXCoords[i]) * Math.sin(this.slopeAng) + (this.blockYCoords[i]) * Math.cos(this.slopeAng);
    }
    Plotly.newPlot(this.id, this.data, this.layout, this.config);
};
h0v0blockAnim.update = function (tAnim, dtAnim) {
    T = tAnim * this.dt;
    h = dtAnim * this.dt;
    this.kp = h0v0kpVal.kpVal;
    this.kd = h0v0kdVal.kdVal;
    this.ki = h0v0kiVal.kiVal;
    X = math.matrix([[this.x], [this.xd], [this.xErrInt]]);
    // Runge-Kutta 4th order
    const k1 = this.der(T, X)

    const s1 = math.add(X, math.multiply(k1, h / 2));
    const k2 = this.der(T + h / 2, s1)

    const s2 = math.add(X, math.multiply(k2, h / 2));
    const k3 = this.der(T + h / 2, s2)

    const s3 = math.add(X, math.multiply(k3, h));
    const k4 = this.der(T + h, s3) // derh0v0blockAnimPlot(t + h, y_n + k3*h)
    X = math.add(X, math.multiply(math.add(math.add(math.divide(k1, 6), math.divide(k2, 3)), math.add(math.divide(k3, 3), math.divide(k4, 6))), h));

    this.x = X.get([0, 0]);
    this.xd = X.get([1, 0]);
    this.xErrInt = X.get([2, 0]);

    for (let i = 0; i < this.data[1].x.length; ++i) {
        this.data[1].x[i] = (this.x + this.blockXCoords[i]) * Math.cos(this.slopeAng) - (this.blockYCoords[i]) * Math.sin(this.slopeAng);
        this.data[1].y[i] = (this.x + this.blockXCoords[i]) * Math.sin(this.slopeAng) + (this.blockYCoords[i]) * Math.cos(this.slopeAng);
    }

    this.xDes = 4 / Math.cos(Math.PI / 6) + Math.sin(2 * Math.PI * 0.5 * T);
    for (let i = 0; i < this.data[2].x.length; ++i) {
        this.data[2].x[i] = (this.xDes + this.blockXCoords[i]) * Math.cos(this.slopeAng) - (this.blockYCoords[i]) * Math.sin(this.slopeAng);
        this.data[2].y[i] = (this.xDes + this.blockXCoords[i]) * Math.sin(this.slopeAng) + (this.blockYCoords[i]) * Math.cos(this.slopeAng);
    }
    Plotly.update(h0v0blockAnim.id, this.data, this.layout)
};
h0v0blockAnim.reset = function () {
    Plotly.purge(this.id);
    this.init();
};

let h0v0blockPosPlot = new anim('h0v0blockPosPlot');
h0v0blockPosPlot.dt = 0.016;       // Simulation dt
// Plot data
h0v0blockPosPlot.data = [{ // Pos vs time
    x: [0], // x axis data
    y: [0], // y axis data
    mode: 'lines',
    line: {
        simplify: false,
        width: 3,
    },
}, { // Set-point
    x: [0], // x axis data
    y: [4 / Math.cos(Math.PI / 6)], // y axis data
    mode: 'lines',
    line: {
        dash: 'dashdot',
        simplify: false,
        width: 3,
        color: '#1f77b4',
    },
},];
// Plot layout
h0v0blockPosPlot.layout = {
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
h0v0blockPosPlot.config = {
    staticPlot: true,
    displayModeBar: false,
    scrollZoom: false,
};
h0v0blockPosPlot.init = function () {
    Plotly.newPlot(this.id, this.data, this.layout, this.config);
};
h0v0blockPosPlot.update = function (tAnim, dtAnim) {
    let t = tAnim * this.dt;
    let pos = h0v0blockAnim.x;
    let posDes = h0v0blockAnim.xDes;
    if (t < 120) {
        // Plotly.update(this.id, this.data, this.layout);
        Plotly.extendTraces(this.id, { x: [[t]], y: [[pos]] }, [0]);
        Plotly.extendTraces(this.id, { x: [[t]], y: [[posDes]] }, [1]);
    }
};
h0v0blockPosPlot.reset = function () {
    this.data[0].x = [0];
    this.data[0].y = [0];
    this.data[1].x = [0];
    this.data[1].y = [4 / Math.cos(Math.PI / 6)];
    Plotly.purge(this.id);
    this.init();
};