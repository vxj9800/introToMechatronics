let sysClk = new anim('sysClk',
    {
        clkFrq: 10,     // System clock frequency
        dt: 0.016,       // Simulation dt
        animInResetState: true, // Defines if the animation is in reset state or not

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
        initpwmSysClkData();
        Plotly.newPlot(sysClk.id, sysClk.data.data, sysClk.data.layout, sysClk.data.config);
    },
    (i) => {
        Plotly.update(sysClk.id, sysClk.data.data, sysClk.data.layout, sysClk.data.config);
        computepwmSysClkData(i);
    },
    () => {
        sysClk.data.dt = 0.016;
        sysClk.data.clkFrq = 10;
        initpwmSysClkData();
        Plotly.update(sysClk.id, sysClk.data.data, sysClk.data.layout, sysClk.data.config);
        computepwmSysClkData(0);
    }
)

function initpwmSysClkData() {
    for (let i = 0; i < sysClk.data.data[0].x.length; ++i) {
        sysClk.data.data[0].x[i] = i / sysClk.data.data[0].x.length;
        var val = Math.sin(2 * Math.PI * sysClk.data.clkFrq * sysClk.data.data[0].x[i]);
        sysClk.data.data[0].y[i] = (val > 0) ? 1 : 0;
    }
}

// Compute the new data
function computepwmSysClkData(i) {
    for (let n = 0; n < sysClk.data.data[0].x.length; ++n) {
        sysClk.data.data[0].x[n] = n / sysClk.data.data[0].x.length + i * sysClk.data.dt;
        var val = Math.sin(2 * Math.PI * sysClk.data.clkFrq * sysClk.data.data[0].x[n]);
        sysClk.data.data[0].y[n] = (val > 0) ? 1 : 0;
    }
}