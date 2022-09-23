// Define all the necessary data into one structure
var pwmSysClkVars = {
    htmlDivId: 'pwmSysClk',   // Name for <div> for pwmSysClk plot
    animId: null,   // Interval id to play and reset animation
    clkFrq: 10,     // System clock frequency
    dt: 0.01,       // Simulation dt
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
        autosize: false,
        width: 500,
        height: 150,
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

}

// Define necessary functions
function playpwmSysClkAnim() {
    pwmSysClkVars.animInResetState = false;
    pwmSysClkVars.animId = setInterval(updatepwmSysClkPlot, 20);
}

function initpwmSysClkData() {
    for (let i = 0; i < pwmSysClkVars.data[0].x.length; ++i) {
        pwmSysClkVars.data[0].x[i] = i / pwmSysClkVars.data[0].x.length;
        var val = Math.sin(2 * Math.PI * pwmSysClkVars.clkFrq * pwmSysClkVars.data[0].x[i]);
        pwmSysClkVars.data[0].y[i] = (val > 0) ? 1 : 0;
    }
}

function resetpwmSysClkAnim() {
    if (!pwmSysClkVars.animInResetState) {
        pwmSysClkVars.dt = 0.01;
        pwmSysClkVars.clkFrq = 10;
        initpwmSysClkData();
        clearInterval(pwmSysClkVars.animId);
        updatepwmSysClkPlot();
        pwmSysClkVars.animInResetState = true;
    }
}

// Compute the new data
function computepwmSysClkData() {
    pwmSysClkVars.dt = pwmClkDtSldrVars.sldrVal;
    pwmSysClkVars.clkFrq = pwmSysClkFrqSldrVars.sldrVal;
    for (let i = 0; i < pwmSysClkVars.data[0].x.length; ++i) {
        pwmSysClkVars.data[0].x[i] += pwmSysClkVars.dt;
        var val = Math.sin(2 * Math.PI * pwmSysClkVars.clkFrq * pwmSysClkVars.data[0].x[i]);
        pwmSysClkVars.data[0].y[i] = (val > 0) ? 1 : 0;
    }
}

// Update the plot
function updatepwmSysClkPlot() {
    Plotly.update(pwmSysClkVars.htmlDivId, pwmSysClkVars.data, pwmSysClkVars.layout, pwmSysClkVars.config);
    computepwmSysClkData();
}

// Function to initialize the plot
function initpwmSysClkPlot() {
    initpwmSysClkData();
    Plotly.newPlot(pwmSysClkVars.htmlDivId, pwmSysClkVars.data, pwmSysClkVars.layout, pwmSysClkVars.config);
}

// Register this animation with jsAnim.js
registerAnimation(0, 2, initpwmSysClkPlot, playpwmSysClkAnim, resetpwmSysClkAnim);