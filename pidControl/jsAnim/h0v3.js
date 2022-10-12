let h0v3throttle = new anim('h0v3throttle',
    {
        inith0v3throttle: 4.9,
        throttleFrq: 0.2,
        dt: 0.016,
    },
    () => {
        h0v3throttle.elem.value = h0v3throttle.data.inith0v3throttle;
        h0v3throttle.elem.disabled = true;
        document.getElementById('h0v3throttle' + 'Output').value = h0v3throttle.data.inith0v3throttle.toFixed(2);
    },
    () => { },
    (tAnim, dtAnim) => {
        let t = tAnim * h0v3throttle.data.dt;
        h0v3throttle.elem.value = h0v3throttle.data.inith0v3throttle + Math.sin(2 * Math.PI * h0v3throttle.data.throttleFrq * t);
        document.getElementById('h0v3throttle' + 'Output').value = Number(h0v3throttle.elem.value).toFixed(2);
    },
    () => { },
    () => {
        h0v3throttle.elem.value = h0v3throttle.data.inith0v3throttle;
        document.getElementById('h0v3throttle' + 'Output').value = h0v3throttle.data.inith0v3throttle.toFixed(2);
    }
)

let h0v3blockAnim = new anim('h0v3blockAnim',
    {
        throttleVal: 4.9,
        m: 1,
        g: 9.8,
        slopeAng: Math.PI / 6,
        x: 5 / Math.cos(Math.PI / 6) / 2,
        xd: -5 / 2 / Math.PI,
        xDes: 5 / Math.cos(Math.PI / 6),
        dt: 0.016,       // Simulation dt
        blockXCoords: [0, 0, 1, 1, 0],
        blockYCoords: [0, 1, 1, 0, 0],
        // Plot data
        data: [{ // Floor
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
        },],

        // Plot layout
        layout: {
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
        },

        config: {
            staticPlot: true,
            displayModeBar: false,
            scrollZoom: false,
        }
    },
    () => {
        inith0v3blockAnimData();
        h0v3blockAnimOutVarTxt();
        h0v3blockAnimInVarTxt();
        h0v3blockAnimErrVarTxt()
        Plotly.newPlot(h0v3blockAnim.id, h0v3blockAnim.data.data, h0v3blockAnim.data.layout, h0v3blockAnim.data.config);
    },
    () => { },
    (tAnim, dtAnim) => {
        updateh0v3blockAnimPlot(tAnim, dtAnim);
    },
    () => { },
    () => {
        inith0v3blockAnimData();
        updateh0v3blockAnimPlot(0, 0);
    }
)

// Initialize the h0v3blockAnim data
function inith0v3blockAnimData() {
    h0v3blockAnim.data.x = 5 / Math.cos(h0v3blockAnim.data.slopeAng) / 2; h0v3blockAnim.data.xd = -5 / 2 / Math.PI; h0v3blockAnim.data.throttleVal = 4.9;
    for (let i = 0; i < h0v3blockAnim.data.data[1].x.length; ++i) {
        h0v3blockAnim.data.data[1].x[i] = (h0v3blockAnim.data.x + h0v3blockAnim.data.blockXCoords[i]) * Math.cos(h0v3blockAnim.data.slopeAng) - (h0v3blockAnim.data.blockYCoords[i]) * Math.sin(h0v3blockAnim.data.slopeAng);
        h0v3blockAnim.data.data[1].y[i] = (h0v3blockAnim.data.x + h0v3blockAnim.data.blockXCoords[i]) * Math.sin(h0v3blockAnim.data.slopeAng) + (h0v3blockAnim.data.blockYCoords[i]) * Math.cos(h0v3blockAnim.data.slopeAng);
    }

    h0v3blockAnim.data.xDes = 5 / Math.cos(h0v3blockAnim.data.slopeAng);
    for (let i = 0; i < h0v3blockAnim.data.data[2].x.length; ++i) {
        h0v3blockAnim.data.data[2].x[i] = (h0v3blockAnim.data.xDes + h0v3blockAnim.data.blockXCoords[i]) * Math.cos(h0v3blockAnim.data.slopeAng) - (h0v3blockAnim.data.blockYCoords[i]) * Math.sin(h0v3blockAnim.data.slopeAng);
        h0v3blockAnim.data.data[2].y[i] = (h0v3blockAnim.data.xDes + h0v3blockAnim.data.blockXCoords[i]) * Math.sin(h0v3blockAnim.data.slopeAng) + (h0v3blockAnim.data.blockYCoords[i]) * Math.cos(h0v3blockAnim.data.slopeAng);
    }
}

// Draw the h0v3blockAnim output variable annotation
function h0v3blockAnimOutVarTxt() {
    let stArrX = (h0v3blockAnim.data.x) * Math.cos(h0v3blockAnim.data.slopeAng) - (-0.15) * Math.sin(h0v3blockAnim.data.slopeAng);
    let stArrY = (h0v3blockAnim.data.x) * Math.sin(h0v3blockAnim.data.slopeAng) + (-0.15) * Math.cos(h0v3blockAnim.data.slopeAng);
    let stArraX = (0) * Math.cos(h0v3blockAnim.data.slopeAng) - (-0.15) * Math.sin(h0v3blockAnim.data.slopeAng);
    let stArraY = (0) * Math.sin(h0v3blockAnim.data.slopeAng) + (-0.15) * Math.cos(h0v3blockAnim.data.slopeAng);
    let stTxtX = (h0v3blockAnim.data.x / 2) * Math.cos(h0v3blockAnim.data.slopeAng) - (-0.25) * Math.sin(h0v3blockAnim.data.slopeAng);
    let stTxtY = (h0v3blockAnim.data.x / 2) * Math.sin(h0v3blockAnim.data.slopeAng) + (-0.25) * Math.cos(h0v3blockAnim.data.slopeAng);
    h0v3blockAnim.data.layout.annotations[0] = {//Output right arrow
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
    h0v3blockAnim.data.layout.annotations[1] = {//Output text
        x: stTxtX,
        y: stTxtY,
        xref: 'x',
        yref: 'y',
        showarrow: false,
        text: '<i>x</i>',
        textangle: -30,
        font: { family: 'Garamond,serif', size: 24, color: 'white' },
    };
}

// Draw the h0v3blockAnim set point variable annotation
function h0v3blockAnimInVarTxt() {
    let spArrX = (h0v3blockAnim.data.xDes) * Math.cos(h0v3blockAnim.data.slopeAng) - (-0.5) * Math.sin(h0v3blockAnim.data.slopeAng);
    let spArrY = (h0v3blockAnim.data.xDes) * Math.sin(h0v3blockAnim.data.slopeAng) + (-0.5) * Math.cos(h0v3blockAnim.data.slopeAng);
    let spArraX = (0) * Math.cos(h0v3blockAnim.data.slopeAng) - (-0.5) * Math.sin(h0v3blockAnim.data.slopeAng);
    let spArraY = (0) * Math.sin(h0v3blockAnim.data.slopeAng) + (-0.5) * Math.cos(h0v3blockAnim.data.slopeAng);
    let spTxtX = (h0v3blockAnim.data.xDes / 2) * Math.cos(h0v3blockAnim.data.slopeAng) - (-0.6) * Math.sin(h0v3blockAnim.data.slopeAng);
    let spTxtY = (h0v3blockAnim.data.xDes / 2) * Math.sin(h0v3blockAnim.data.slopeAng) + (-0.6) * Math.cos(h0v3blockAnim.data.slopeAng);
    h0v3blockAnim.data.layout.annotations[2] = {//Output right arrow
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
    h0v3blockAnim.data.layout.annotations[3] = {//Output text
        x: spTxtX,
        y: spTxtY,
        xref: 'x',
        yref: 'y',
        showarrow: false,
        text: '<i>x<sub>des</sub></i>',
        textangle: -30,
        font: { family: 'Garamond,serif', size: 24, color: 'white' },
    };
}

// Draw the h0v3blockAnim error variable annotation
function h0v3blockAnimErrVarTxt() {
    let errArrX = (h0v3blockAnim.data.xDes) * Math.cos(h0v3blockAnim.data.slopeAng) - (-0.15) * Math.sin(h0v3blockAnim.data.slopeAng);
    let errArrY = (h0v3blockAnim.data.xDes) * Math.sin(h0v3blockAnim.data.slopeAng) + (-0.15) * Math.cos(h0v3blockAnim.data.slopeAng);
    let errArraX = (h0v3blockAnim.data.x) * Math.cos(h0v3blockAnim.data.slopeAng) - (-0.15) * Math.sin(h0v3blockAnim.data.slopeAng);
    let errArraY = (h0v3blockAnim.data.x) * Math.sin(h0v3blockAnim.data.slopeAng) + (-0.15) * Math.cos(h0v3blockAnim.data.slopeAng);
    let errTxtX = (h0v3blockAnim.data.x + h0v3blockAnim.data.xDes) / 2 * Math.cos(h0v3blockAnim.data.slopeAng) - (-0.25) * Math.sin(h0v3blockAnim.data.slopeAng);
    let errTxtY = (h0v3blockAnim.data.x + h0v3blockAnim.data.xDes) / 2 * Math.sin(h0v3blockAnim.data.slopeAng) + (-0.25) * Math.cos(h0v3blockAnim.data.slopeAng);
    h0v3blockAnim.data.layout.annotations[4] = {//Output right arrow
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
    h0v3blockAnim.data.layout.annotations[5] = {//Output text
        x: errTxtX,
        y: errTxtY,
        xref: 'x',
        yref: 'y',
        showarrow: false,
        text: '<i>e</i>',
        textangle: -30,
        font: { family: 'Times, serif', size: 24, color: 'white' },
    };
}

// Update the plot
function updateh0v3blockAnimPlot(tAnim, dtAnim) {
    T = tAnim * h0v3blockAnim.data.dt;
    h = dtAnim * h0v3blockAnim.data.dt;
    h0v3blockAnim.data.throttleVal = h0v3throttle.elem.value;
    X = math.matrix([[h0v3blockAnim.data.x], [h0v3blockAnim.data.xd]]);
    // Runge-Kutta 4th order
    const k1 = derh0v3blockAnimPlot(T, X)

    const s1 = math.add(X, math.multiply(k1, h / 2));
    const k2 = derh0v3blockAnimPlot(T + h / 2, s1)

    const s2 = math.add(X, math.multiply(k2, h / 2));
    const k3 = derh0v3blockAnimPlot(T + h / 2, s2)

    const s3 = math.add(X, math.multiply(k3, h));
    const k4 = derh0v3blockAnimPlot(T + h, s3) // derh0v3blockAnimPlot(t + h, y_n + k3*h)
    X = math.add(X, math.multiply(math.add(math.add(math.divide(k1, 6), math.divide(k2, 3)), math.add(math.divide(k3, 3), math.divide(k4, 6))), h));

    h0v3blockAnim.data.x = X.get([0, 0]);
    h0v3blockAnim.data.xd = X.get([1, 0]);

    for (let i = 0; i < h0v3blockAnim.data.data[1].x.length; ++i) {
        h0v3blockAnim.data.data[1].x[i] = (h0v3blockAnim.data.x + h0v3blockAnim.data.blockXCoords[i]) * Math.cos(h0v3blockAnim.data.slopeAng) - (h0v3blockAnim.data.blockYCoords[i]) * Math.sin(h0v3blockAnim.data.slopeAng);
        h0v3blockAnim.data.data[1].y[i] = (h0v3blockAnim.data.x + h0v3blockAnim.data.blockXCoords[i]) * Math.sin(h0v3blockAnim.data.slopeAng) + (h0v3blockAnim.data.blockYCoords[i]) * Math.cos(h0v3blockAnim.data.slopeAng);
    }

    h0v3blockAnim.data.xDes = 5 / Math.cos(h0v3blockAnim.data.slopeAng) + Math.sin(2 * Math.PI * 0.3 * T);
    for (let i = 0; i < h0v3blockAnim.data.data[2].x.length; ++i) {
        h0v3blockAnim.data.data[2].x[i] = (h0v3blockAnim.data.xDes + h0v3blockAnim.data.blockXCoords[i]) * Math.cos(h0v3blockAnim.data.slopeAng) - (h0v3blockAnim.data.blockYCoords[i]) * Math.sin(h0v3blockAnim.data.slopeAng);
        h0v3blockAnim.data.data[2].y[i] = (h0v3blockAnim.data.xDes + h0v3blockAnim.data.blockXCoords[i]) * Math.sin(h0v3blockAnim.data.slopeAng) + (h0v3blockAnim.data.blockYCoords[i]) * Math.cos(h0v3blockAnim.data.slopeAng);
    }

    h0v3blockAnimOutVarTxt();
    h0v3blockAnimInVarTxt();
    h0v3blockAnimErrVarTxt()
    Plotly.update(h0v3blockAnim.id, h0v3blockAnim.data.data, h0v3blockAnim.data.layout)
}

// Function to compute state derivatives
function derh0v3blockAnimPlot(t, x) {
    dx = math.zeros(2, 1);
    dx.set([0, 0], x.get([1, 0]));
    dx.set([1, 0], (h0v3blockAnim.data.throttleVal - h0v3blockAnim.data.m * h0v3blockAnim.data.g * Math.sin(h0v3blockAnim.data.slopeAng)) / h0v3blockAnim.data.m);
    return dx;
}