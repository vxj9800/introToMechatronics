let h0v1throttleVal = new anim('h0v1throttleVal');
h0v1throttleVal.throttleVal = 0;
h0v1throttleVal.init = function () {
    this.throttleVal = 0;
    this.elem.innerHTML = this.throttleVal.toFixed(4);
};
h0v1throttleVal.update = function () {
    this.throttleVal = h0v1blockAnim.throttleVal;
    this.elem.innerHTML = this.throttleVal.toFixed(4);
};
h0v1throttleVal.reset = function () {
    this.throttleVal = 0;
    this.elem.innerHTML = this.throttleVal.toFixed(4);
};



let h0v1xErr = new anim('h0v1xErr');
h0v1xErr.xErr = 4 / Math.cos(Math.PI / 6);
h0v1xErr.init = function () {
    this.xErr = 4 / Math.cos(Math.PI / 6);
    this.elem.innerHTML = this.xErr.toFixed(4);
};
h0v1xErr.update = function () {
    this.xErr = h0v1blockAnim.xErr;
    this.elem.innerHTML = this.xErr.toFixed(4);
};
h0v1xErr.reset = function () {
    this.xErr = 4 / Math.cos(Math.PI / 6);
    this.elem.innerHTML = this.xErr.toFixed(4);
};

let h0v1kpVal = new anim('h0v1kpVal');
h0v1kpVal.kpVal = 0;
h0v1kpVal.init = function () {
    this.kpVal = 0;
    this.elem.value = this.kpVal;
    this.elem.addEventListener('change', this.handleChange.bind(this));
};
h0v1kpVal.reset = function () {
    // this.kpVal = 0;
    // this.elem.value = this.kpVal;
};
h0v1kpVal.handleChange = function () {
    let kpVal = parseFloat(this.elem.value);
    if (isNaN(kpVal))
        this.elem.value = 0;
    this.kpVal = parseFloat(this.elem.value);
}

let h0v1pControlVal = new anim('h0v1pControlVal')
h0v1pControlVal.pControlVal = 0;
h0v1pControlVal.init = function () {
    this.pControlVal = 0;
    this.elem.innerHTML = this.pControlVal.toFixed(4);
};
h0v1pControlVal.update = function () {
    this.pControlVal = h0v1blockAnim.pControlVal;
    this.elem.innerHTML = this.pControlVal.toFixed(4);
};
h0v1pControlVal.reset = function () {
    this.pControlVal = 0;
    this.elem.innerHTML = this.pControlVal.toFixed(4);
};

let h0v1kdVal = new anim('h0v1kdVal');
h0v1kdVal.kdVal = 0;
h0v1kdVal.init = function () {
    this.kdVal = 0;
    this.elem.value = this.kdVal;
    this.elem.addEventListener('change', this.handleChange.bind(this));
};
h0v1kdVal.reset = function () {
    // this.kdVal = 0;
    // this.elem.value = this.kdVal;
};
h0v1kdVal.handleChange = function () {
    let kdVal = parseFloat(this.elem.value);
    if (isNaN(kdVal))
        this.elem.value = 0;
    this.kdVal = parseFloat(this.elem.value);
}

let h0v1dControlVal = new anim('h0v1dControlVal')
h0v1dControlVal.dControlVal = 0;
h0v1dControlVal.init = function () {
    this.dControlVal = 0;
    this.elem.innerHTML = this.dControlVal.toFixed(4);
};
h0v1dControlVal.update = function () {
    this.dControlVal = h0v1blockAnim.dControlVal;
    this.elem.innerHTML = this.dControlVal.toFixed(4);
};
h0v1dControlVal.reset = function () {
    this.dControlVal = 0;
    this.elem.innerHTML = this.dControlVal.toFixed(4);
};

let h0v1kiVal = new anim('h0v1kiVal');
h0v1kiVal.kiVal = 0;
h0v1kiVal.init = function () {
    this.kiVal = 0;
    this.elem.value = this.kiVal;
    this.elem.addEventListener('change', this.handleChange.bind(this));
};
h0v1kiVal.reset = function () {
    // this.kiVal = 0;
    // this.elem.value = this.kiVal;
};
h0v1kiVal.handleChange = function () {
    let kiVal = parseFloat(this.elem.value);
    if (isNaN(kiVal))
        this.elem.value = 0;
    this.kiVal = parseFloat(this.elem.value);
}

let h0v1iControlVal = new anim('h0v1iControlVal')
h0v1iControlVal.iControlVal = 0;
h0v1iControlVal.init = function () {
    this.iControlVal = 0;
    this.elem.innerHTML = this.iControlVal.toFixed(4);
};
h0v1iControlVal.update = function () {
    this.iControlVal = h0v1blockAnim.iControlVal;
    this.elem.innerHTML = this.iControlVal.toFixed(4);
};
h0v1iControlVal.reset = function () {
    this.iControlVal = 0;
    this.elem.innerHTML = this.iControlVal.toFixed(4);
};

let h0v1blockAnim = new anim('h0v1blockAnim');
h0v1blockAnim.throttleVal = 0;
h0v1blockAnim.m = 1;
h0v1blockAnim.g = 9.8;
h0v1blockAnim.l = 5;
h0v1blockAnim.x = -Math.PI;
h0v1blockAnim.xd = 0;
h0v1blockAnim.xDes = Math.PI / 2;
h0v1blockAnim.xdDes = 0;
h0v1blockAnim.kp = 0;
h0v1blockAnim.kd = 0;
h0v1blockAnim.ki = 0;
h0v1blockAnim.pControlVal = 0;
h0v1blockAnim.dControlVal = 0;
h0v1blockAnim.iControlVal = 0;
h0v1blockAnim.xErr = h0v1blockAnim.xDes;
h0v1blockAnim.xErrInt = 0;
h0v1blockAnim.dt = 0.016;
h0v1blockAnim.blockXCoords = [-1, -1, 10, 10, -1];
h0v1blockAnim.blockYCoords = [-1, 1, 1, -1, -1];
h0v1blockAnim.data = [{ // Pin joint
    x: [0], // x axis data
    y: [0], // y axis data
    mode: 'markers',
    type: 'scatter',
    marker: {
        size: 12,
        color: 'rgb(30, 117, 179)',
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
h0v1blockAnim.layout = {
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
        range: [-10, 10],
        tickfont: { family: 'Garamond,serif', size: 20, color: 'white' },
    },
    yaxis: {
        gridcolor: '#505050',
        showline: true,
        scaleanchor: "x",
        scaleratio: 1,
        range: [-10, 10],
        tickfont: { family: 'Garamond,serif', size: 20, color: 'white' },
    },
    paper_bgcolor: '#ffffff00',
    plot_bgcolor: '#ffffff00',
    showlegend: false,
};
h0v1blockAnim.config = {
    staticPlot: true,
    displayModeBar: false,
    scrollZoom: false,
};
h0v1blockAnim.init = function () {
    this.initData();
    Plotly.newPlot(this.id, this.data, this.layout, this.config);
};
h0v1blockAnim.update = function (tAnim, dtAnim) {
    this.updatePlot(tAnim, dtAnim);
};
h0v1blockAnim.reset = function () {
    this.initData();
    this.updatePlot(0, 0);
};

// Initialize the h0v1blockAnim data
h0v1blockAnim.initData = function () {
    this.x = -Math.PI; this.xd = 0; this.xDes = Math.PI / 2; this.xdDes = 0;
    this.xErr = this.xDes - this.x; this.xErrInt = 0;
    this.kp = 0; this.kd = 0; this.ki = 0;
    this.pControlVal = 0; this.dControlVal = 0;
    this.iControlVal = 0; this.throttleVal = 0;

    for (let i = 0; i < this.data[1].x.length; ++i) {
        this.data[1].x[i] = (this.blockXCoords[i]) * Math.cos(this.x) - (this.blockYCoords[i]) * Math.sin(this.x);
        this.data[1].y[i] = (this.blockXCoords[i]) * Math.sin(this.x) + (this.blockYCoords[i]) * Math.cos(this.x);
    }

    for (let i = 0; i < this.data[2].x.length; ++i) {
        this.data[2].x[i] = (this.blockXCoords[i]) * Math.cos(this.xDes) - (this.blockYCoords[i]) * Math.sin(this.xDes);
        this.data[2].y[i] = (this.blockXCoords[i]) * Math.sin(this.xDes) + (this.blockYCoords[i]) * Math.cos(this.xDes);
    }
};

// Update the plot
h0v1blockAnim.updatePlot = function (tAnim, dtAnim) {
    T = tAnim * this.dt;
    h = dtAnim * this.dt;
    this.kp = h0v1kpVal.kpVal;
    this.kd = h0v1kdVal.kdVal;
    this.ki = h0v1kiVal.kiVal;
    X = math.matrix([[this.x], [this.xd], [this.xErrInt]]);
    // Runge-Kutta 4th order
    const k1 = this.der(T, X)

    const s1 = math.add(X, math.multiply(k1, h / 2));
    const k2 = this.der(T + h / 2, s1)

    const s2 = math.add(X, math.multiply(k2, h / 2));
    const k3 = this.der(T + h / 2, s2)

    const s3 = math.add(X, math.multiply(k3, h));
    const k4 = this.der(T + h, s3) // derh0v1blockAnimPlot(t + h, y_n + k3*h)
    X = math.add(X, math.multiply(math.add(math.add(math.divide(k1, 6), math.divide(k2, 3)), math.add(math.divide(k3, 3), math.divide(k4, 6))), h));

    this.x = X.get([0, 0]);
    this.xd = X.get([1, 0]);
    this.xErrInt = X.get([2, 0]);

    for (let i = 0; i < this.data[1].x.length; ++i) {
        this.data[1].x[i] = (this.blockXCoords[i]) * Math.cos(this.x) - (this.blockYCoords[i]) * Math.sin(this.x);
        this.data[1].y[i] = (this.blockXCoords[i]) * Math.sin(this.x) + (this.blockYCoords[i]) * Math.cos(this.x);
    }

    for (let i = 0; i < this.data[2].x.length; ++i) {
        this.data[2].x[i] = (this.blockXCoords[i]) * Math.cos(this.xDes) - (this.blockYCoords[i]) * Math.sin(this.xDes);
        this.data[2].y[i] = (this.blockXCoords[i]) * Math.sin(this.xDes) + (this.blockYCoords[i]) * Math.cos(this.xDes);
    }
    Plotly.update(h0v1blockAnim.id, this.data, this.layout)
};

// Function to compute state derivatives
h0v1blockAnim.der = function (t, x) {
    dx = math.zeros(3, 1);
    this.xErr = this.xDes - x.get([0, 0]);
    this.pControlVal = this.kp * this.xErr;
    this.dControlVal = this.kd * (this.xdDes - x.get([1, 0]));
    this.iControlVal = this.ki * x.get([2, 0]);
    this.throttleVal = this.pControlVal + this.dControlVal + this.iControlVal;
    dx.set([0, 0], x.get([1, 0]));
    dx.set([1, 0], (-this.throttleVal - this.m * this.g * this.l * Math.cos(x.get([0, 0]))) / this.m);
    dx.set([2, 0], this.xErr);
    return dx;
};

let h0v1blockPosPlot = new anim('h0v1blockPosPlot');
h0v1blockPosPlot.dt = 0.016;       // Simulation dt
// Plot data
h0v1blockPosPlot.data = [{ // Pos vs time
    x: [0], // x axis data
    y: [-Math.PI], // y axis data
    mode: 'lines',
    line: {
        simplify: false,
        width: 3,
    },
}, { // Set-point
    x: [0, 0], // x axis data
    y: [Math.PI / 2, Math.PI / 2], // y axis data
    mode: 'lines',
    line: {
        dash: 'dashdot',
        simplify: false,
        width: 3,
        color: '#1f77b4',
    },
},];

// Plot layout
h0v1blockPosPlot.layout = {
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

h0v1blockPosPlot.config = {
    staticPlot: true,
    displayModeBar: false,
    scrollZoom: false,
};
h0v1blockPosPlot.init = function () {
    Plotly.newPlot(this.id, this.data, this.layout, this.config);
};
h0v1blockPosPlot.update = function (tAnim, dtAnim) {
    let t = tAnim * this.dt;
    let pos = h0v1blockAnim.x;
    this.data[1].x[1] = t;
    if (t < 120) {
        // Plotly.update(this.id, this.data, this.layout);
        Plotly.extendTraces(this.id, { x: [[t]], y: [[pos]] }, [0]);
    }
};
h0v1blockPosPlot.reset = function () {
    this.data[0].x = [0];
    this.data[0].y = [-Math.PI];
    this.data[1].x = [0, 0];
    this.data[1].y = [Math.PI / 2, Math.PI / 2];
    Plotly.update(this.id, this.data, this.layout);
};