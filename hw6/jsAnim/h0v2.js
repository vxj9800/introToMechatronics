let h0v2throttleVal = new anim('h0v2throttleVal');
h0v2throttleVal.throttleVal = 0;
h0v2throttleVal.init = function () {
    this.throttleVal = 0;
    this.elem.innerHTML = this.throttleVal.toFixed(4);
};
h0v2throttleVal.update = function () {
    this.throttleVal = h0v2blockAnim.throttleVal;
    this.elem.innerHTML = this.throttleVal.toFixed(4);
};
h0v2throttleVal.reset = function () {
    this.throttleVal = 0;
    this.elem.innerHTML = this.throttleVal.toFixed(4);
};



let h0v2xErr = new anim('h0v2xErr');
h0v2xErr.xErr = 4 / Math.cos(Math.PI / 6);
h0v2xErr.init = function () {
    this.xErr = 4 / Math.cos(Math.PI / 6);
    this.elem.innerHTML = this.xErr.toFixed(4);
};
h0v2xErr.update = function () {
    this.xErr = h0v2blockAnim.xErr;
    this.elem.innerHTML = this.xErr.toFixed(4);
};
h0v2xErr.reset = function () {
    this.xErr = 4 / Math.cos(Math.PI / 6);
    this.elem.innerHTML = this.xErr.toFixed(4);
};

let h0v2kpVal = new anim('h0v2kpVal');
h0v2kpVal.kpVal = 0;
h0v2kpVal.init = function () {
    this.kpVal = 0;
    this.elem.value = this.kpVal;
    this.elem.addEventListener('change', this.handleChange.bind(this));
};
h0v2kpVal.reset = function () {
    // this.kpVal = 0;
    // this.elem.value = this.kpVal;
};
h0v2kpVal.handleChange = function () {
    let kpVal = parseFloat(this.elem.value);
    if (isNaN(kpVal))
        this.elem.value = 0;
    this.kpVal = parseFloat(this.elem.value);
}

let h0v2pControlVal = new anim('h0v2pControlVal')
h0v2pControlVal.pControlVal = 0;
h0v2pControlVal.init = function () {
    this.pControlVal = 0;
    this.elem.innerHTML = this.pControlVal.toFixed(4);
};
h0v2pControlVal.update = function () {
    this.pControlVal = h0v2blockAnim.pControlVal;
    this.elem.innerHTML = this.pControlVal.toFixed(4);
};
h0v2pControlVal.reset = function () {
    this.pControlVal = 0;
    this.elem.innerHTML = this.pControlVal.toFixed(4);
};

let h0v2kdVal = new anim('h0v2kdVal');
h0v2kdVal.kdVal = 0;
h0v2kdVal.init = function () {
    this.kdVal = 0;
    this.elem.value = this.kdVal;
    this.elem.addEventListener('change', this.handleChange.bind(this));
};
h0v2kdVal.reset = function () {
    // this.kdVal = 0;
    // this.elem.value = this.kdVal;
};
h0v2kdVal.handleChange = function () {
    let kdVal = parseFloat(this.elem.value);
    if (isNaN(kdVal))
        this.elem.value = 0;
    this.kdVal = parseFloat(this.elem.value);
}

let h0v2dControlVal = new anim('h0v2dControlVal')
h0v2dControlVal.dControlVal = 0;
h0v2dControlVal.init = function () {
    this.dControlVal = 0;
    this.elem.innerHTML = this.dControlVal.toFixed(4);
};
h0v2dControlVal.update = function () {
    this.dControlVal = h0v2blockAnim.dControlVal;
    this.elem.innerHTML = this.dControlVal.toFixed(4);
};
h0v2dControlVal.reset = function () {
    this.dControlVal = 0;
    this.elem.innerHTML = this.dControlVal.toFixed(4);
};

let h0v2kiVal = new anim('h0v2kiVal');
h0v2kiVal.kiVal = 0;
h0v2kiVal.init = function () {
    this.kiVal = 0;
    this.elem.value = this.kiVal;
    this.elem.addEventListener('change', this.handleChange.bind(this));
};
h0v2kiVal.reset = function () {
    // this.kiVal = 0;
    // this.elem.value = this.kiVal;
};
h0v2kiVal.handleChange = function () {
    let kiVal = parseFloat(this.elem.value);
    if (isNaN(kiVal))
        this.elem.value = 0;
    this.kiVal = parseFloat(this.elem.value);
}

let h0v2iControlVal = new anim('h0v2iControlVal')
h0v2iControlVal.iControlVal = 0;
h0v2iControlVal.init = function () {
    this.iControlVal = 0;
    this.elem.innerHTML = this.iControlVal.toFixed(4);
};
h0v2iControlVal.update = function () {
    this.iControlVal = h0v2blockAnim.iControlVal;
    this.elem.innerHTML = this.iControlVal.toFixed(4);
};
h0v2iControlVal.reset = function () {
    this.iControlVal = 0;
    this.elem.innerHTML = this.iControlVal.toFixed(4);
};

let h0v2blockAnim = new anim('h0v2blockAnim');
h0v2blockAnim.throttleVal = 0;
h0v2blockAnim.m = 10;
h0v2blockAnim.g = 9.8;
h0v2blockAnim.x = 0.1;
h0v2blockAnim.xd = 0;
h0v2blockAnim.th = -Math.PI / 100 * 0;
h0v2blockAnim.thd = 0;
h0v2blockAnim.xDes = 0;
h0v2blockAnim.xdDes = 0;
h0v2blockAnim.kp = 0;
h0v2blockAnim.kd = 0;
h0v2blockAnim.ki = 0;
h0v2blockAnim.pControlVal = 0;
h0v2blockAnim.dControlVal = 0;
h0v2blockAnim.iControlVal = 0;
h0v2blockAnim.xErr = h0v2blockAnim.xDes - h0v2blockAnim.x;
h0v2blockAnim.xErrInt = 0;
h0v2blockAnim.dt = 0.016;
h0v2blockAnim.blockXCoords = [-1, -1, 1, 1, -1];
h0v2blockAnim.blockYCoords = [-1, 1, 1, -1, -1];
h0v2blockAnim.slideXCoords = [-10, -10, 10, 10, -10];
h0v2blockAnim.slideYCoords = [-1, 1, 1, -1, -1];
h0v2blockAnim.data = [{ // Pin joint
    x: [0], // x axis data
    y: [0], // y axis data
    mode: 'markers',
    type: 'scatter',
    marker: {
        size: 12,
        color: 'rgb(30, 117, 179)',
    },
}, { // Actual slide
    x: new Array(5), // x axis data
    y: new Array(5), // y axis data
    mode: 'lines',
    line: {
        simplify: false,
        width: 3,
        color: '#1f77b4',
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
}, { // Desired slide
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
h0v2blockAnim.layout = {
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
h0v2blockAnim.config = {
    staticPlot: true,
    displayModeBar: false,
    scrollZoom: false,
};
h0v2blockAnim.init = function () {
    this.initData();
    Plotly.newPlot(this.id, this.data, this.layout, this.config);
};
h0v2blockAnim.update = function (tAnim, dtAnim) {
    this.updatePlot(tAnim, dtAnim);
};
h0v2blockAnim.reset = function () {
    this.initData();
    this.updatePlot(0, 0);
};

// Initialize the h0v2blockAnim data
h0v2blockAnim.initData = function () {
    this.x = 0.1; this.xd = 0;
    this.th = -Math.PI / 100 * 0; this.thd = 0;
    this.xDes = 0; this.xdDes = 0;
    this.xErr = this.xDes - this.th; this.xErrInt = 0;
    this.kp = 0; this.kd = 0; this.ki = 0;
    this.pControlVal = 0; this.dControlVal = 0;
    this.iControlVal = 0; this.throttleVal = 0;

    for (let i = 0; i < this.data[1].x.length; ++i) {
        this.data[1].x[i] = (this.slideXCoords[i]) * Math.cos(this.th) - (this.slideYCoords[i]) * Math.sin(this.th);
        this.data[1].y[i] = (this.slideXCoords[i]) * Math.sin(this.th) + (this.slideYCoords[i]) * Math.cos(this.th);
    }

    for (let i = 0; i < this.data[1].x.length; ++i) {
        this.data[2].x[i] = (this.x + this.blockXCoords[i]) * Math.cos(this.th) - (this.blockYCoords[i]) * Math.sin(this.th);
        this.data[2].y[i] = (this.x + this.blockXCoords[i]) * Math.sin(this.th) + (this.blockYCoords[i]) * Math.cos(this.th);
    }

    for (let i = 0; i < this.data[2].x.length; ++i) {
        this.data[3].x[i] = (this.slideXCoords[i]) * Math.cos(this.xDes) - (this.slideYCoords[i]) * Math.sin(this.xDes);
        this.data[3].y[i] = (this.slideXCoords[i]) * Math.sin(this.xDes) + (this.slideYCoords[i]) * Math.cos(this.xDes);
    }
};

// Update the plot
h0v2blockAnim.updatePlot = function (tAnim, dtAnim) {
    T = tAnim * this.dt;
    h = dtAnim * this.dt;
    this.kp = h0v2kpVal.kpVal;
    this.kd = h0v2kdVal.kdVal;
    this.ki = h0v2kiVal.kiVal;
    X = math.matrix([[this.x], [this.xd], [this.th], [this.thd], [this.xErrInt]]);
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
    if (this.x > 9 && this.xd > 0)
        this.xd = -0.8 * this.xd;
    if (this.x < -9 && this.xd < 0)
        this.xd = -0.8 * this.xd;
    this.th = X.get([2, 0]);
    this.thd = X.get([3, 0]);
    // if (this.th > 10 * Math.PI / 180 && this.thd > 0)
    //     this.thd = -0.8 * this.thd;
    // if (this.th < -10 * Math.PI / 180 && this.thd < 0)
    //     this.thd = -0.8 * this.thd;
    this.xErrInt = X.get([4, 0]);

    for (let i = 0; i < this.data[1].x.length; ++i) {
        this.data[1].x[i] = (this.slideXCoords[i]) * Math.cos(this.th) - (this.slideYCoords[i]) * Math.sin(this.th);
        this.data[1].y[i] = (this.slideXCoords[i]) * Math.sin(this.th) + (this.slideYCoords[i]) * Math.cos(this.th);
    }

    for (let i = 0; i < this.data[1].x.length; ++i) {
        this.data[2].x[i] = (this.x + this.blockXCoords[i]) * Math.cos(this.th) - (this.blockYCoords[i]) * Math.sin(this.th);
        this.data[2].y[i] = (this.x + this.blockXCoords[i]) * Math.sin(this.th) + (this.blockYCoords[i]) * Math.cos(this.th);
    }

    for (let i = 0; i < this.data[2].x.length; ++i) {
        this.data[3].x[i] = (this.slideXCoords[i]) * Math.cos(this.xDes) - (this.slideYCoords[i]) * Math.sin(this.xDes);
        this.data[3].y[i] = (this.slideXCoords[i]) * Math.sin(this.xDes) + (this.slideYCoords[i]) * Math.cos(this.xDes);
    }
    Plotly.update(h0v2blockAnim.id, this.data, this.layout)
};

// Function to compute state derivatives
h0v2blockAnim.der = function (t, X) {
    dX = math.zeros(5, 1);
    x = X.get([0, 0]); xd = X.get([1, 0]); th = X.get([2, 0]); thd = X.get([3, 0]); xErrInt = X.get([4, 0]);
    this.xErr = this.xDes - x;
    this.pControlVal = this.kp * this.xErr;
    this.dControlVal = this.kd * (this.xdDes - xd);
    this.iControlVal = this.ki * xErrInt;
    this.throttleVal = this.pControlVal + this.dControlVal + this.iControlVal;
    dX.set([0, 0], xd);
    dX.set([1, 0], (this.m * x * thd ** 2 - this.m * this.g * Math.sin(th)) / this.m);
    dX.set([2, 0], thd);
    dX.set([3, 0], (this.throttleVal - this.g * this.m * x * Math.cos(th) - 2 * this.m * x * xd * thd) / (2 + this.m * x ** 2));
    dX.set([4, 0], this.xErr);
    return dX;
};

let h0v2blockPosPlot = new anim('h0v2blockPosPlot');
h0v2blockPosPlot.dt = 0.016;       // Simulation dt
// Plot data
h0v2blockPosPlot.data = [{ // Pos vs time
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
h0v2blockPosPlot.layout = {
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

h0v2blockPosPlot.config = {
    staticPlot: true,
    displayModeBar: false,
    scrollZoom: false,
};
h0v2blockPosPlot.init = function () {
    Plotly.newPlot(this.id, this.data, this.layout, this.config);
};
h0v2blockPosPlot.update = function (tAnim, dtAnim) {
    let t = tAnim * this.dt;
    let pos = h0v2blockAnim.x;
    this.data[1].x[1] = t;
    if (t < 120) {
        // Plotly.update(this.id, this.data, this.layout);
        Plotly.extendTraces(this.id, { x: [[t]], y: [[pos]] }, [0]);
    }
};
h0v2blockPosPlot.reset = function () {
    this.data[0].x = [0];
    this.data[0].y = [-Math.PI];
    this.data[1].x = [0, 0];
    this.data[1].y = [Math.PI / 2, Math.PI / 2];
    Plotly.update(this.id, this.data, this.layout);
};