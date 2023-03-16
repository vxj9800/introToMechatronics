let h0v4ThrottleVal = new anim('h0v4ThrottleVal');
h0v4ThrottleVal.throttleVal = 0;
h0v4ThrottleVal.init = function () {
    this.throttleVal = 0;
    this.elem.innerHTML = this.throttleVal.toFixed(4);
}
h0v4ThrottleVal.update = function () {
    this.throttleVal = h0v4BlockAnim.throttleVal;
    this.elem.innerHTML = this.throttleVal.toFixed(4);
}
h0v4ThrottleVal.reset = function () {
    this.init();
}

let h0v4XErr = new anim('h0v4XErr');
h0v4XErr.xErr = 5 / Math.cos(Math.PI / 6);
h0v4XErr.init = function () {
    this.xErr = 5 / Math.cos(Math.PI / 6);
    this.elem.innerHTML = this.xErr.toFixed(4);
}
h0v4XErr.update = function () {
    this.xErr = h0v4BlockAnim.xErr;
    this.elem.innerHTML = this.xErr.toFixed(4);
}
h0v4XErr.reset = function () {
    this.init();
}

let h0v4KpVal = new anim('h0v4KpVal');
h0v4KpVal.kpVal = 0;
h0v4KpVal.handleChange = function () {
    let kpVal = parseFloat(this.elem.value);
    if (isNaN(kpVal))
        this.elem.value = 0;
    this.kpVal = parseFloat(this.elem.value);
}
h0v4KpVal.init = function () {
    this.kpVal = 0;
    this.elem.value = this.kpVal;
    this.elem.addEventListener('change', this.handleChange.bind(this));
}
h0v4KpVal.reset = function () {
    this.init();
}

h0v4PControlVal = new anim('h0v4PControlVal');
h0v4PControlVal.pControlVal = 0;
h0v4PControlVal.init = function () {
    this.pControlVal = 0;
    this.elem.innerHTML = this.pControlVal.toFixed(4);
}
h0v4PControlVal.update = function () {
    this.pControlVal = h0v4BlockAnim.pControlVal;
    this.elem.innerHTML = this.pControlVal.toFixed(4);
}
h0v4PControlVal.reset = function () {
    this.init();
}

let h0v4KdVal = new anim('h0v4KdVal');
h0v4KdVal.kdVal = 0;
h0v4KdVal.handleChange = function () {
    let kdVal = parseFloat(this.elem.value);
    if (isNaN(kdVal))
        this.elem.value = 0;
    this.kdVal = parseFloat(this.elem.value);
}
h0v4KdVal.init = function () {
    this.kdVal = 0;
    this.elem.value = this.kdVal;
    this.elem.addEventListener('change', this.handleChange.bind(this));
}
h0v4KdVal.reset = function () {
    this.init();
}

h0v4DControlVal = new anim('h0v4DControlVal');
h0v4DControlVal.dControlVal = 0;
h0v4DControlVal.init = function () {
    this.dControlVal = 0;
    this.elem.innerHTML = this.dControlVal.toFixed(4);
}
h0v4DControlVal.update = function () {
    this.dControlVal = h0v4BlockAnim.dControlVal;
    this.elem.innerHTML = this.dControlVal.toFixed(4);
}
h0v4DControlVal.reset = function () {
    this.init();
}

let h0v4KiVal = new anim('h0v4KiVal');
h0v4KiVal.kiVal = 0;
h0v4KiVal.handleChange = function () {
    let kiVal = parseFloat(this.elem.value);
    if (isNaN(kiVal))
        this.elem.value = 0;
    this.kiVal = parseFloat(this.elem.value);
}
h0v4KiVal.init = function () {
    this.kiVal = 0;
    this.elem.value = this.kiVal;
    this.elem.addEventListener('change', this.handleChange.bind(this));
}
h0v4KiVal.reset = function () {
    this.init();
}

h0v4IControlVal = new anim('h0v4IControlVal');
h0v4IControlVal.iControlVal = 0;
h0v4IControlVal.init = function () {
    this.iControlVal = 0;
    this.elem.innerHTML = this.iControlVal.toFixed(4);
}
h0v4IControlVal.update = function () {
    this.iControlVal = h0v4BlockAnim.iControlVal;
    this.elem.innerHTML = this.iControlVal.toFixed(4);
}
h0v4IControlVal.reset = function () {
    this.init();
}

let h0v4BlockAnim = new anim('h0v4BlockAnim');
h0v4BlockAnim.throttleVal = 0;
h0v4BlockAnim.m = 1;
h0v4BlockAnim.g = 9.8;
h0v4BlockAnim.slopeAng = Math.PI / 6;
h0v4BlockAnim.x = 0;
h0v4BlockAnim.xd = 0;
h0v4BlockAnim.xDes = 5 / Math.cos(Math.PI / 6);
h0v4BlockAnim.kp = 0;
h0v4BlockAnim.kd = 0;
h0v4BlockAnim.ki = 0;
h0v4BlockAnim.pControlVal = 0;
h0v4BlockAnim.dControlVal = 0;
h0v4BlockAnim.iControlVal = 0;
h0v4BlockAnim.xErr = 5 / Math.cos(Math.PI / 6);
h0v4BlockAnim.xErrInt = 0;
h0v4BlockAnim.dt = 0.016;
h0v4BlockAnim.blockXCoords = [0, 0, 1, 1, 0];
h0v4BlockAnim.blockYCoords = [0, 1, 1, 0, 0];
h0v4BlockAnim.data = [{ // Floor
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
h0v4BlockAnim.layout = {
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
h0v4BlockAnim.config = {
    staticPlot: true,
    displayModeBar: false,
    scrollZoom: false,
};
h0v4BlockAnim.der = function (t,x) {
    dx = math.zeros(3, 1);
    this.xErr = this.xDes - x.get([0, 0]);
    this.pControlVal = this.kp * this.xErr;
    this.dControlVal = this.kd * (0 - x.get([1, 0]));
    this.iControlVal = this.ki * x.get([2, 0]);
    this.throttleVal = this.pControlVal + this.dControlVal + this.iControlVal;
    dx.set([0, 0], x.get([1, 0]));
    dx.set([1, 0], (this.throttleVal - this.m * this.g * Math.sin(this.slopeAng)) / this.m);
    dx.set([2, 0], this.xErr);
    return dx;
}
h0v4BlockAnim.init = function () {
    this.x = 0; this.xd = 0; this.xDes = 5 / Math.cos(Math.PI / 6);
    this.xErr = this.xDes - this.x; this.xErrInt = 0;
    this.kp = 0; this.kd = 0; this.ki = 0;
    this.pControlVal = 0; this.dControlVal = 0;
    this.iControlVal = 0; this.throttleVal = 0;

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
h0v4BlockAnim.update = function (tAnim,dtAnim) {
    T = tAnim * this.dt;
    h = dtAnim * this.dt;
    this.kp = h0v4KpVal.kpVal;
    this.kd = h0v4KdVal.kdVal;
    this.ki = h0v4KiVal.kiVal;
    X = math.matrix([[this.x], [this.xd], [this.xErrInt]]);
    // Runge-Kutta 4th order
    const k1 = this.der(T, X)

    const s1 = math.add(X, math.multiply(k1, h / 2));
    const k2 = this.der(T + h / 2, s1)

    const s2 = math.add(X, math.multiply(k2, h / 2));
    const k3 = this.der(T + h / 2, s2)

    const s3 = math.add(X, math.multiply(k3, h));
    const k4 = this.der(T + h, s3) // derh0v4blockAnimPlot(t + h, y_n + k3*h)
    X = math.add(X, math.multiply(math.add(math.add(math.divide(k1, 6), math.divide(k2, 3)), math.add(math.divide(k3, 3), math.divide(k4, 6))), h));

    this.x = X.get([0, 0]);
    this.xd = X.get([1, 0]);
    this.xErrInt = X.get([2, 0]);

    for (let i = 0; i < this.data[1].x.length; ++i) {
        this.data[1].x[i] = (this.x + this.blockXCoords[i]) * Math.cos(this.slopeAng) - (this.blockYCoords[i]) * Math.sin(this.slopeAng);
        this.data[1].y[i] = (this.x + this.blockXCoords[i]) * Math.sin(this.slopeAng) + (this.blockYCoords[i]) * Math.cos(this.slopeAng);
    }
    Plotly.update(this.id, this.data, this.layout)
}
h0v4BlockAnim.reset = function () {
    Plotly.purge(this.id);
    this.init();
}

let h0v4BlockPosPlot = new anim('h0v4BlockPosPlot');
h0v4BlockPosPlot.dt = 0.016;
h0v4BlockPosPlot.data = [{ // Pos vs time
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
h0v4BlockPosPlot.layout = {
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
h0v4BlockPosPlot.config = {
    staticPlot: true,
    displayModeBar: false,
    scrollZoom: false,
};
h0v4BlockPosPlot.init = function () {
    Plotly.newPlot(this.id, this.data, this.layout, this.config);
}
h0v4BlockPosPlot.update = function (tAnim,dtAnim) {
    let t = tAnim * this.dt;
    let pos = h0v4BlockAnim.data[1].x[0];
    if (t < 120) {
        this.data[1].x[1] = t;
        Plotly.update(this.id, this.data, this.layout);
        Plotly.extendTraces(this.id, { x: [[t]], y: [[pos]] }, [0])
    }
}
h0v4BlockPosPlot.reset = function () {
    this.data[0].x = [0];
    this.data[0].y = [0];
    this.data[1].x = [0, 0];
    Plotly.purge(this.id);
    this.init();
}