// Define all the necessary data into one structure
var pwmDivClkVars = {
    htmlDivId: 'pwmDivClk',   // Name for <div> for pwmDivClk plot
    animId: null,   // Interval id to play and reset animation
    clkFrq: 10,     // Divided clock frequency
    dt: 0.01,       // Simulation dt
    animInResetState: true, // Defines if the animation is in reset state or not

    // Plot data
    data: [{
        x: new Array(1000), // x axis data
        y: new Array(1000), // y axis data
        line: {
            simplify: false,
            width: 3,
        },    // data line property
    }],

    // Plot layout
    layout: {
        title: 'Frequency Divided Clock',
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
function playpwmDivClkAnim() {
    pwmDivClkVars.animInResetState = false;
    pwmDivClkVars.animId = setInterval(updatepwmDivClkPlot, 20);
}

function initpwmDivClkData() {
    for (let i = 0; i < pwmDivClkVars.data[0].x.length; ++i) {
        pwmDivClkVars.data[0].x[i] = (i / pwmDivClkVars.data[0].x.length) - 1;
        var val = Math.sin(2 * Math.PI * pwmDivClkVars.clkFrq * pwmDivClkVars.data[0].x[i]);
        pwmDivClkVars.data[0].y[i] = (val > 0) ? 1 : 0;
    }
}

function resetpwmDivClkAnim() {
    if (!pwmDivClkVars.animInResetState) {
        pwmSysClkVars.dt = 0.01;
        pwmDivClkVars.clkFrq = 10;
        initpwmDivClkData();
        clearInterval(pwmDivClkVars.animId);
        updatepwmDivClkPlot();
        pwmDivClkVars.animInResetState = true;
    }
}

// Compute the new data
function computepwmDivClkData() {
    pwmSysClkVars.dt = pwmClkDtSldrVars.sldrVal;
    pwmDivClkVars.clkFrq = pwmSysClkVars.clkFrq / (pwmClkDivVars.clkDivIntVal + pwmClkDivVars.clkDivFrcVal / 16);
    for (let i = 0; i < pwmDivClkVars.data[0].x.length; ++i) {
        pwmDivClkVars.data[0].x[i] = pwmSysClkVars.data[0].x[i] - 1;
        var val = Math.sin(2 * Math.PI * pwmDivClkVars.clkFrq * pwmDivClkVars.data[0].x[i]);
        pwmDivClkVars.data[0].y[i] = (val > 0) ? 1 : 0;
    }
}

// Update the plot
function updatepwmDivClkPlot() {
    Plotly.update(pwmDivClkVars.htmlDivId, pwmDivClkVars.data, pwmDivClkVars.layout, pwmDivClkVars.config);
    computepwmDivClkData();
}

// Function to initialize the plot
function initpwmDivClkPlot() {
    initpwmDivClkData();
    Plotly.newPlot(pwmDivClkVars.htmlDivId, pwmDivClkVars.data, pwmDivClkVars.layout, pwmDivClkVars.config);
}

// Register this animation with jsAnim.js
registerAnimation(0, 2, initpwmDivClkPlot, playpwmDivClkAnim, resetpwmDivClkAnim);