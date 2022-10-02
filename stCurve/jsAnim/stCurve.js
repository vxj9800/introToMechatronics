let stCurve = new anim('stCurve',
    {
        intId: null,   // Interval id to play and reset animation

        // Plot data
        data: [{
            x: new Array(2), // x axis data
            y: new Array(2), // y axis data
            name: '12V',
            mode: 'lines',
            line: {
                simplify: false,
                width: 3,
            },    // data line property
        }, {
            x: new Array(2), // x axis data
            y: new Array(2), // y axis data
            name: '12V',
            mode: 'lines',
            line: {
                simplify: false,
                width: 3,
            },    // data line property
        }, {
            x: new Array(2), // x axis data
            y: new Array(2), // y axis data
            name: '12V',
            mode: 'lines',
            line: {
                simplify: false,
                width: 3,
            },    // data line property
        }, {
            x: new Array(2), // x axis data
            y: new Array(2), // y axis data
            name: '12V',
            mode: 'lines',
            line: {
                simplify: false,
                width: 3,
            },    // data line property
        }, {
            x: new Array(2), // x axis data
            y: new Array(2), // y axis data
            name: '12V',
            mode: 'lines',
            line: {
                simplify: false,
                width: 3,
            },    // data line property
        }],

        // Plot layout
        layout: {
            title: 'Motor Speed-Torque Curve',
            titlefont: {
                family: 'Garamond,serif',
                size: 24,
                color: 'white',
            },
            autosize: true,
            xaxis: {
                title: 'Angular Speed (rad/sec)',
                titlefont: {
                    family: 'Garamond,serif',
                    size: 20,
                    color: 'white',
                },
                range: [0, 800],
                tickcolor: '#fff',
                tickfont: { family: 'Garamond,serif', size: 20, color: '#fff' },
            },
            yaxis: {
                title: 'Torque (Nm)',
                titlefont: {
                    family: 'Garamond,serif',
                    size: 20,
                    color: 'white',
                },
                range: [0, 0.02],
                tickcolor: '#fff',
                tickfont: { family: 'Garamond,serif', size: 20, color: '#fff' },
            },
            legend: {
                x: 1,
                xanchor: 'right',
                y: 1,
                font: {
                    family: 'Garamond,serif',
                    size: 20,
                    color: 'white',
                },
            },
            paper_bgcolor: '#ffffff00',
            plot_bgcolor: '#ffffff00',
        },

        config: {
            displayModeBar: false,
            scrollZoom: true,
        }
    },
    () => {
        initstCurveData();
        Plotly.newPlot(stCurve.id, stCurve.data.data, stCurve.data.layout, stCurve.data.config);
    },
    () => {
        stCurve.intId = setInterval(updatestCurvePlot, 500);
    },
    () => {
        stCurve.data.dt = 0.01;
        stCurve.data.clkFrq = 10;
        initstCurveData();
        clearInterval(stCurve.intId);
        updatestCurvePlot();
    }
)

// Initialize the stCurve data
function initstCurveData() {
    let kTau = stallTq.data.value / vsMax.data.value;
    let kEmf = vsMax.data.value / noLoadSpeed.data.value;
    for (let i = 0; i < stCurve.data.data.length; ++i) {
        stCurve.data.data[i].x[0] = 0;
        stCurve.data.data[i].x[1] = vsMax.data.value * (1 - (i / stCurve.data.data.length)) / kEmf;
        stCurve.data.data[i].y[0] = kTau * vsMax.data.value * (1 - (i / stCurve.data.data.length));
        stCurve.data.data[i].y[1] = 0;
        stCurve.data.data[i].name = (vsMax.data.value * (1 - (i / stCurve.data.data.length))).toFixed(2) + 'V';
    }
}

// Compute the new data
function computestCurveData() {
    let kTau = stallTq.data.value / vsMax.data.value;
    let kEmf = vsMax.data.value / noLoadSpeed.data.value;
    for (let i = 0; i < stCurve.data.data.length; ++i) {
        stCurve.data.data[i].x[0] = 0;
        stCurve.data.data[i].x[1] = vsMax.data.value * (1 - (i / stCurve.data.data.length)) / kEmf;
        stCurve.data.data[i].y[0] = kTau * vsMax.data.value * (1 - (i / stCurve.data.data.length));
        stCurve.data.data[i].y[1] = 0;
        stCurve.data.data[i].name = (vsMax.data.value * (1 - (i / stCurve.data.data.length))).toFixed(2) + 'V';
    }
}

// Update the plot
function updatestCurvePlot() {
    Plotly.animate(stCurve.id, { data: stCurve.data.data, layout: stCurve.data.layout }, {
        transition: {
            duration: 500,
            easing: 'cubic-in-out'
        },
        frame: {
            duration: 50,
        }
    });
    computestCurveData();
}