let h0v4throttleVal = new anim('h0v4throttleVal',
    {
        throttleVal: 0,
    },
    () => {
        h0v4throttleVal.data.throttleVal = 0;
        h0v4throttleVal.elem.innerHTML = h0v4throttleVal.data.throttleVal.toFixed(4);
    },
    () => { },
    () => {
        h0v4throttleVal.data.throttleVal = h0v4blockAnim.data.throttleVal;
        h0v4throttleVal.elem.innerHTML = h0v4throttleVal.data.throttleVal.toFixed(4);
    },
    () => { },
    () => {
        h0v4throttleVal.data.throttleVal = 0;
        h0v4throttleVal.elem.innerHTML = h0v4throttleVal.data.throttleVal.toFixed(4);
    }
)

let h0v4xErr = new anim('h0v4xErr',
    {
        xErr: 5 / Math.cos(Math.PI / 6),
    },
    () => {
        h0v4xErr.data.xErr = 5 / Math.cos(Math.PI / 6);
        h0v4xErr.elem.innerHTML = h0v4xErr.data.xErr.toFixed(4);
    },
    () => { },
    () => {
        h0v4xErr.data.xErr = h0v4blockAnim.data.xErr;
        h0v4xErr.elem.innerHTML = h0v4xErr.data.xErr.toFixed(4);
    },
    () => { },
    () => {
        h0v4xErr.data.xErr = 5 / Math.cos(Math.PI / 6);
        h0v4xErr.elem.innerHTML = h0v4xErr.data.xErr.toFixed(4);
    }
)

let h0v4kpVal = new anim('h0v4kpVal',
    {
        kpVal: 0,
    },
    () => {
        h0v4kpVal.data.kpVal = 0;
        h0v4kpVal.elem.value = h0v4kpVal.data.kpVal;
        h0v4kpVal.elem.addEventListener('change', h0v4kpValHandleChange);
    },
    () => { },
    () => { },
    () => { },
    () => {
        h0v4kpVal.data.kpVal = 0;
        h0v4kpVal.elem.value = h0v4kpVal.data.kpVal;
    }
)
function h0v4kpValHandleChange() {
    let kpVal = parseFloat(h0v4kpVal.elem.value);
    if (isNaN(kpVal))
        h0v4kpVal.elem.value = 0;
    h0v4kpVal.data.kpVal = parseFloat(h0v4kpVal.elem.value);
}

let h0v4pControlVal = new anim('h0v4pControlVal',
    {
        pControlVal: 0,
    },
    () => {
        h0v4pControlVal.data.pControlVal = 0;
        h0v4pControlVal.elem.innerHTML = h0v4pControlVal.data.pControlVal.toFixed(4);
    },
    () => { },
    () => {
        h0v4pControlVal.data.pControlVal = h0v4blockAnim.data.pControlVal;
        h0v4pControlVal.elem.innerHTML = h0v4pControlVal.data.pControlVal.toFixed(4);
    },
    () => { },
    () => {
        h0v4pControlVal.data.pControlVal = 0;
        h0v4pControlVal.elem.innerHTML = h0v4pControlVal.data.pControlVal.toFixed(4);
    }
)

let h0v4kdVal = new anim('h0v4kdVal',
    {
        kdVal: 0,
    },
    () => {
        h0v4kdVal.data.kdVal = 0;
        h0v4kdVal.elem.value = h0v4kdVal.data.kdVal;
        h0v4kdVal.elem.addEventListener('change', h0v4kdValHandleChange);
    },
    () => { },
    () => { },
    () => { },
    () => {
        h0v4kdVal.data.kdVal = 0;
        h0v4kdVal.elem.value = h0v4kdVal.data.kdVal;
    }
)
function h0v4kdValHandleChange() {
    let kdVal = parseFloat(h0v4kdVal.elem.value);
    if (isNaN(kdVal))
        h0v4kdVal.elem.value = 0;
    h0v4kdVal.data.kdVal = parseFloat(h0v4kdVal.elem.value);
}

let h0v4dControlVal = new anim('h0v4dControlVal',
    {
        dControlVal: 0,
    },
    () => {
        h0v4dControlVal.data.dControlVal = 0;
        h0v4dControlVal.elem.innerHTML = h0v4dControlVal.data.dControlVal.toFixed(4);
    },
    () => { },
    () => {
        h0v4dControlVal.data.dControlVal = h0v4blockAnim.data.dControlVal;
        h0v4dControlVal.elem.innerHTML = h0v4dControlVal.data.dControlVal.toFixed(4);
    },
    () => { },
    () => {
        h0v4dControlVal.data.dControlVal = 0;
        h0v4dControlVal.elem.innerHTML = h0v4dControlVal.data.dControlVal.toFixed(4);
    }
)

let h0v4kiVal = new anim('h0v4kiVal',
    {
        kiVal: 0,
    },
    () => {
        h0v4kiVal.data.kiVal = 0;
        h0v4kiVal.elem.value = h0v4kiVal.data.kiVal;
        h0v4kiVal.elem.addEventListener('change', h0v4kiValHandleChange);
    },
    () => { },
    () => { },
    () => { },
    () => {
        h0v4kiVal.data.kiVal = 0;
        h0v4kiVal.elem.value = h0v4kiVal.data.kiVal;
    }
)
function h0v4kiValHandleChange() {
    let kiVal = parseFloat(h0v4kiVal.elem.value);
    if (isNaN(kiVal))
        h0v4kiVal.elem.value = 0;
    h0v4kiVal.data.kiVal = parseFloat(h0v4kiVal.elem.value);
}

let h0v4iControlVal = new anim('h0v4iControlVal',
    {
        iControlVal: 0,
    },
    () => {
        h0v4iControlVal.data.iControlVal = 0;
        h0v4iControlVal.elem.innerHTML = h0v4iControlVal.data.iControlVal.toFixed(4);
    },
    () => { },
    () => {
        h0v4iControlVal.data.iControlVal = h0v4blockAnim.data.iControlVal;
        h0v4iControlVal.elem.innerHTML = h0v4iControlVal.data.iControlVal.toFixed(4);
    },
    () => { },
    () => {
        h0v4iControlVal.data.iControlVal = 0;
        h0v4iControlVal.elem.innerHTML = h0v4iControlVal.data.iControlVal.toFixed(4);
    }
)

let h0v4blockAnim = new anim('h0v4blockAnim',
    {
        throttleVal: 0,
        m: 1,
        g: 9.8,
        slopeAng: Math.PI / 6,
        x: 0,
        xd: 0,
        xDes: 5 / Math.cos(Math.PI / 6),
        kp: 0,
        kd: 0,
        ki: 0,
        pControlVal: 0,
        dControlVal: 0,
        iControlVal: 0,
        xErr: 5 / Math.cos(Math.PI / 6),
        xErrInt: 0,
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
        },

        config: {
            staticPlot: true,
            displayModeBar: false,
            scrollZoom: false,
        }
    },
    () => {
        inith0v4blockAnimData();
        Plotly.newPlot(h0v4blockAnim.id, h0v4blockAnim.data.data, h0v4blockAnim.data.layout, h0v4blockAnim.data.config);
    },
    () => { },
    (tAnim, dtAnim) => {
        updateh0v4blockAnimPlot(tAnim, dtAnim);
    },
    () => { },
    () => {
        inith0v4blockAnimData();
        updateh0v4blockAnimPlot(0, 0);
    }
)

// Initialize the h0v4blockAnim data
function inith0v4blockAnimData() {
    h0v4blockAnim.data.x = 0; h0v4blockAnim.data.xd = 0; h0v4blockAnim.data.xDes = 5 / Math.cos(Math.PI / 6);
    h0v4blockAnim.data.xErr = h0v4blockAnim.data.xDes - h0v4blockAnim.data.x; h0v4blockAnim.data.xErrInt = 0;
    h0v4blockAnim.data.kp = 0; h0v4blockAnim.data.kd = 0; h0v4blockAnim.data.ki = 0;
    h0v4blockAnim.data.pControlVal = 0; h0v4blockAnim.data.dControlVal = 0;
    h0v4blockAnim.data.iControlVal = 0; h0v4blockAnim.data.throttleVal = 0;

    for (let i = 0; i < h0v4blockAnim.data.data[1].x.length; ++i) {
        h0v4blockAnim.data.data[1].x[i] = (h0v4blockAnim.data.x + h0v4blockAnim.data.blockXCoords[i]) * Math.cos(h0v4blockAnim.data.slopeAng) - (h0v4blockAnim.data.blockYCoords[i]) * Math.sin(h0v4blockAnim.data.slopeAng);
        h0v4blockAnim.data.data[1].y[i] = (h0v4blockAnim.data.x + h0v4blockAnim.data.blockXCoords[i]) * Math.sin(h0v4blockAnim.data.slopeAng) + (h0v4blockAnim.data.blockYCoords[i]) * Math.cos(h0v4blockAnim.data.slopeAng);
    }

    let desXPos = 5 / Math.cos(h0v4blockAnim.data.slopeAng);
    for (let i = 0; i < h0v4blockAnim.data.data[2].x.length; ++i) {
        h0v4blockAnim.data.data[2].x[i] = (desXPos + h0v4blockAnim.data.blockXCoords[i]) * Math.cos(h0v4blockAnim.data.slopeAng) - (h0v4blockAnim.data.blockYCoords[i]) * Math.sin(h0v4blockAnim.data.slopeAng);
        h0v4blockAnim.data.data[2].y[i] = (desXPos + h0v4blockAnim.data.blockXCoords[i]) * Math.sin(h0v4blockAnim.data.slopeAng) + (h0v4blockAnim.data.blockYCoords[i]) * Math.cos(h0v4blockAnim.data.slopeAng);
    }
}

// Update the plot
function updateh0v4blockAnimPlot(tAnim, dtAnim) {
    T = tAnim * h0v4blockAnim.data.dt;
    h = dtAnim * h0v4blockAnim.data.dt;
    h0v4blockAnim.data.kp = h0v4kpVal.data.kpVal;
    h0v4blockAnim.data.kd = h0v4kdVal.data.kdVal;
    h0v4blockAnim.data.ki = h0v4kiVal.data.kiVal;
    X = math.matrix([[h0v4blockAnim.data.x], [h0v4blockAnim.data.xd], [h0v4blockAnim.data.xErrInt]]);
    // Runge-Kutta 4th order
    const k1 = derh0v4blockAnimPlot(T, X)

    const s1 = math.add(X, math.multiply(k1, h / 2));
    const k2 = derh0v4blockAnimPlot(T + h / 2, s1)

    const s2 = math.add(X, math.multiply(k2, h / 2));
    const k3 = derh0v4blockAnimPlot(T + h / 2, s2)

    const s3 = math.add(X, math.multiply(k3, h));
    const k4 = derh0v4blockAnimPlot(T + h, s3) // derh0v4blockAnimPlot(t + h, y_n + k3*h)
    X = math.add(X, math.multiply(math.add(math.add(math.divide(k1, 6), math.divide(k2, 3)), math.add(math.divide(k3, 3), math.divide(k4, 6))), h));

    h0v4blockAnim.data.x = X.get([0, 0]);
    h0v4blockAnim.data.xd = X.get([1, 0]);
    h0v4blockAnim.data.xErrInt = X.get([2, 0]);

    for (let i = 0; i < h0v4blockAnim.data.data[1].x.length; ++i) {
        h0v4blockAnim.data.data[1].x[i] = (h0v4blockAnim.data.x + h0v4blockAnim.data.blockXCoords[i]) * Math.cos(h0v4blockAnim.data.slopeAng) - (h0v4blockAnim.data.blockYCoords[i]) * Math.sin(h0v4blockAnim.data.slopeAng);
        h0v4blockAnim.data.data[1].y[i] = (h0v4blockAnim.data.x + h0v4blockAnim.data.blockXCoords[i]) * Math.sin(h0v4blockAnim.data.slopeAng) + (h0v4blockAnim.data.blockYCoords[i]) * Math.cos(h0v4blockAnim.data.slopeAng);
    }
    Plotly.update(h0v4blockAnim.id, h0v4blockAnim.data.data, h0v4blockAnim.data.layout)
}

// Function to compute state derivatives
function derh0v4blockAnimPlot(t, x) {
    dx = math.zeros(3, 1);
    h0v4blockAnim.data.xErr = h0v4blockAnim.data.xDes - x.get([0, 0]);
    h0v4blockAnim.data.pControlVal = h0v4blockAnim.data.kp * h0v4blockAnim.data.xErr;
    h0v4blockAnim.data.dControlVal = h0v4blockAnim.data.kd * (0 - x.get([1, 0]));
    h0v4blockAnim.data.iControlVal = h0v4blockAnim.data.ki * x.get([2, 0]);
    h0v4blockAnim.data.throttleVal = h0v4blockAnim.data.pControlVal + h0v4blockAnim.data.dControlVal + h0v4blockAnim.data.iControlVal;
    dx.set([0, 0], x.get([1, 0]));
    dx.set([1, 0], (h0v4blockAnim.data.throttleVal - h0v4blockAnim.data.m * h0v4blockAnim.data.g * Math.sin(h0v4blockAnim.data.slopeAng)) / h0v4blockAnim.data.m);
    dx.set([2, 0], h0v4blockAnim.data.xErr);
    return dx;
}

let h0v4blockPosPlot = new anim('h0v4blockPosPlot',
    {
        dt: 0.016,       // Simulation dt
        // Plot data
        data: [{ // Pos vs time
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
        },],

        // Plot layout
        layout: {
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
        },

        config: {
            staticPlot: true,
            displayModeBar: false,
            scrollZoom: false,
        }
    },
    () => {
        Plotly.newPlot(h0v4blockPosPlot.id, h0v4blockPosPlot.data.data, h0v4blockPosPlot.data.layout, h0v4blockPosPlot.data.config);
    },
    () => { },
    (tAnim, dtAnim) => {
        let t = tAnim * h0v4blockPosPlot.data.dt;
        let pos = h0v4blockAnim.data.data[1].x[0];
        if (t < 120) {
            h0v4blockPosPlot.data.data[1].x[1] = t;
            Plotly.update(h0v4blockPosPlot.id, h0v4blockPosPlot.data.data, h0v4blockPosPlot.data.layout);
            Plotly.extendTraces(h0v4blockPosPlot.id, { x: [[t]], y: [[pos]] }, [0])
        }
    },
    () => { },
    () => {
        h0v4blockPosPlot.data.data[0].x = [0];
        h0v4blockPosPlot.data.data[0].y = [0];
        h0v4blockPosPlot.data.data[1].x = [0, 0];
        Plotly.update(h0v4blockPosPlot.id, h0v4blockPosPlot.data.data, h0v4blockPosPlot.data.layout);
    }
)