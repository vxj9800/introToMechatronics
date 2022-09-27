let sysClk = new anim('sysClk',
    {
        intId: null,   // Interval id to play and reset animation
        clkFrq: 10,     // System clock frequency
        dt: 0.01,       // Simulation dt

        // Plot data
        data: [{
            x: new Array(1000), // x axis data
            y: new Array(1000), // y axis data
            mode: 'lines',
            line: {
                simplify: false,
                width: 3,
            },    // data line property
        }],

        // Plot layout
        layout: {
            title: 'System Clock',
            titlefont: {
                family: 'Garamond,serif',
                size: 24,
                color: 'white',
            },
            autosize: true,
            margin: {
                l: 40,
                r: 10,
                b: 40,
                t: 40,
                pad: 0,
            },
            xaxis: {
                autorange: 'reversed',
                zeroline: false,
                tickcolor: '#fff',
                tickfont: { family: 'Garamond,serif', size: 20, color: '#fff' },
            },
            yaxis: {
                range: [0, 1],
                zeroline: false,
                tickcolor: '#fff',
                tickfont: { family: 'Garamond,serif', size: 20, color: '#fff' },
                showgrid: false,
                dtick: 1,
            },
            paper_bgcolor: '#ffffff00',
            plot_bgcolor: '#ffffff00',
        },

        config: {
            staticPlot: true,
        }
    },
    () => {
        initSysClkData();
        Plotly.newPlot(sysClk.id, sysClk.data.data, sysClk.data.layout, sysClk.data.config);
    },
    () => {
        sysClk.data.intId = setInterval(updateSysClkPlot, 20);
    },
    () => {
        if (!sysClk.data.animInResetState) {
            sysClk.data.dt = 0.01;
            sysClk.data.clkFrq = 10;
            initSysClkData();
            clearInterval(sysClk.data.intId);
            updateSysClkPlot();
            sysClk.data.animInResetState = true;
        }
    }
)

// Initialize the sysClk data
function initSysClkData() {
    for (let i = 0; i < sysClk.data.data[0].x.length; ++i) {
        sysClk.data.data[0].x[i] = i / sysClk.data.data[0].x.length;
        var val = Math.sin(2 * Math.PI * sysClk.data.clkFrq * sysClk.data.data[0].x[i]);
        sysClk.data.data[0].y[i] = (val > 0) ? 1 : 0;
    }
}

// Compute the new data
function computeSysClkData() {
    // sysClk.data.dt = pwmClkDtSldrVars.sldrVal;
    // sysClk.data.clkFrq = pwmSysClkFrqSldrVars.sldrVal;
    for (let i = 0; i < sysClk.data.data[0].x.length; ++i) {
        sysClk.data.data[0].x[i] += sysClk.data.dt;
        var val = Math.sin(2 * Math.PI * sysClk.data.clkFrq * sysClk.data.data[0].x[i]);
        sysClk.data.data[0].y[i] = (val > 0) ? 1 : 0;
    }
}

// Update the plot
function updateSysClkPlot() {
    Plotly.update(sysClk.id, sysClk.data.data, sysClk.data.layout, sysClk.data.config);
    computeSysClkData();
}