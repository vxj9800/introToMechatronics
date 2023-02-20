let h0v2throttle = new anim('h0v2throttle',
    {
        inith0v2throttle: 4.9,
    },
    () => {
        h0v2throttle.elem.value = h0v2throttle.data.inith0v2throttle;
        h0v2throttle.elem.disabled = true;
        document.getElementById('h0v2throttle' + 'Output').value = h0v2throttle.data.inith0v2throttle.toFixed(2);
    },
    () => {
        h0v2throttle.elem.disabled = false;
    },
    () => { },
    () => {
        h0v2throttle.elem.disabled = true;
    },
    () => {
        h0v2throttle.elem.value = h0v2throttle.data.inith0v2throttle;
        h0v2throttle.elem.disabled = true;
        document.getElementById('h0v2throttle' + 'Output').value = h0v2throttle.data.inith0v2throttle.toFixed(2);
    }
)

let h0v2blockAnim = new anim('h0v2blockAnim',
    {
        throttleVal: 4.9,
        m: 1,
        g: 9.8,
        slopeAng: Math.PI / 6,
        x: 0,
        xd: 0,
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
        inith0v2blockAnimData();
        Plotly.newPlot(h0v2blockAnim.id, h0v2blockAnim.data.data, h0v2blockAnim.data.layout, h0v2blockAnim.data.config);
    },
    () => { },
    (tAnim, dtAnim) => {
        updateh0v2blockAnimPlot(tAnim, dtAnim);
    },
    () => { },
    () => {
        inith0v2blockAnimData();
        updateh0v2blockAnimPlot(0, 0);
    }
)

// Initialize the h0v2blockAnim data
function inith0v2blockAnimData() {
    h0v2blockAnim.data.x = 0; h0v2blockAnim.data.xd = 0; h0v2blockAnim.data.throttleVal = 4.9;
    for (let i = 0; i < h0v2blockAnim.data.data[1].x.length; ++i) {
        h0v2blockAnim.data.data[1].x[i] = (h0v2blockAnim.data.x + h0v2blockAnim.data.blockXCoords[i]) * Math.cos(h0v2blockAnim.data.slopeAng) - (h0v2blockAnim.data.blockYCoords[i]) * Math.sin(h0v2blockAnim.data.slopeAng);
        h0v2blockAnim.data.data[1].y[i] = (h0v2blockAnim.data.x + h0v2blockAnim.data.blockXCoords[i]) * Math.sin(h0v2blockAnim.data.slopeAng) + (h0v2blockAnim.data.blockYCoords[i]) * Math.cos(h0v2blockAnim.data.slopeAng);
    }

    let desXPos = 5 / Math.cos(h0v2blockAnim.data.slopeAng);
    for (let i = 0; i < h0v2blockAnim.data.data[2].x.length; ++i) {
        h0v2blockAnim.data.data[2].x[i] = (desXPos + h0v2blockAnim.data.blockXCoords[i]) * Math.cos(h0v2blockAnim.data.slopeAng) - (h0v2blockAnim.data.blockYCoords[i]) * Math.sin(h0v2blockAnim.data.slopeAng);
        h0v2blockAnim.data.data[2].y[i] = (desXPos + h0v2blockAnim.data.blockXCoords[i]) * Math.sin(h0v2blockAnim.data.slopeAng) + (h0v2blockAnim.data.blockYCoords[i]) * Math.cos(h0v2blockAnim.data.slopeAng);
    }
}

// Update the plot
function updateh0v2blockAnimPlot(tAnim, dtAnim) {
    T = tAnim * h0v2blockAnim.data.dt;
    h = dtAnim * h0v2blockAnim.data.dt;
    h0v2blockAnim.data.throttleVal = h0v2throttle.elem.value;
    X = math.matrix([[h0v2blockAnim.data.x], [h0v2blockAnim.data.xd]]);
    // Runge-Kutta 4th order
    const k1 = derh0v2blockAnimPlot(T, X)

    const s1 = math.add(X, math.multiply(k1, h / 2));
    const k2 = derh0v2blockAnimPlot(T + h / 2, s1)

    const s2 = math.add(X, math.multiply(k2, h / 2));
    const k3 = derh0v2blockAnimPlot(T + h / 2, s2)

    const s3 = math.add(X, math.multiply(k3, h));
    const k4 = derh0v2blockAnimPlot(T + h, s3) // derh0v2blockAnimPlot(t + h, y_n + k3*h)
    X = math.add(X, math.multiply(math.add(math.add(math.divide(k1, 6), math.divide(k2, 3)), math.add(math.divide(k3, 3), math.divide(k4, 6))), h));

    h0v2blockAnim.data.x = X.get([0, 0]);
    h0v2blockAnim.data.xd = X.get([1, 0]);

    for (let i = 0; i < h0v2blockAnim.data.data[1].x.length; ++i) {
        h0v2blockAnim.data.data[1].x[i] = (h0v2blockAnim.data.x + h0v2blockAnim.data.blockXCoords[i]) * Math.cos(h0v2blockAnim.data.slopeAng) - (h0v2blockAnim.data.blockYCoords[i]) * Math.sin(h0v2blockAnim.data.slopeAng);
        h0v2blockAnim.data.data[1].y[i] = (h0v2blockAnim.data.x + h0v2blockAnim.data.blockXCoords[i]) * Math.sin(h0v2blockAnim.data.slopeAng) + (h0v2blockAnim.data.blockYCoords[i]) * Math.cos(h0v2blockAnim.data.slopeAng);
    }
    Plotly.update(h0v2blockAnim.id, h0v2blockAnim.data.data, h0v2blockAnim.data.layout)
}

// Function to compute state derivatives
function derh0v2blockAnimPlot(t, x) {
    dx = math.zeros(2, 1);
    dx.set([0, 0], x.get([1, 0]));
    dx.set([1, 0], (h0v2blockAnim.data.throttleVal - h0v2blockAnim.data.m * h0v2blockAnim.data.g * Math.sin(h0v2blockAnim.data.slopeAng)) / h0v2blockAnim.data.m);
    return dx;
}

let h0v2blockPosPlot = new anim('h0v2blockPosPlot',
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
        Plotly.newPlot(h0v2blockPosPlot.id, h0v2blockPosPlot.data.data, h0v2blockPosPlot.data.layout, h0v2blockPosPlot.data.config);
    },
    () => { },
    (tAnim, dtAnim) => {
        let t = tAnim * h0v2blockPosPlot.data.dt;
        let pos = h0v2blockAnim.data.data[1].x[0];
        if (t < 120) {
            h0v2blockPosPlot.data.data[1].x[1] = t;
            Plotly.update(h0v2blockPosPlot.id, h0v2blockPosPlot.data.data, h0v2blockPosPlot.data.layout);
            Plotly.extendTraces(h0v2blockPosPlot.id, { x: [[t]], y: [[pos]] }, [0])
        }
    },
    () => { },
    () => {
        h0v2blockPosPlot.data.data[0].x = [0];
        h0v2blockPosPlot.data.data[0].y = [0];
        h0v2blockPosPlot.data.data[1].x = [0, 0];
        Plotly.update(h0v2blockPosPlot.id, h0v2blockPosPlot.data.data, h0v2blockPosPlot.data.layout);
    }
)