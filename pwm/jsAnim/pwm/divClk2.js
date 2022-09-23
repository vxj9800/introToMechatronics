// Define all the necessary data into one structure
var pwmDivClk2Vars = {
    htmlDivId: 'pwmDivClk2',   // Name for <div> for pwmDivClk2 plot
    animId: null,   // Interval id to play and reset animation
    clkFrq: 10,     // System clock frequency
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
function playpwmDivClk2Anim() {
    pwmDivClk2Vars.animInResetState = false;
    pwmDivClk2Vars.animId = setInterval(updatepwmDivClk2Plot, 20);
}

function initpwmDivClk2Data() {
    for (let i = 0; i < pwmDivClk2Vars.data[0].x.length; ++i) {
        pwmDivClk2Vars.data[0].x[i] = i / pwmDivClk2Vars.data[0].x.length;
        var val = Math.sin(2 * Math.PI * pwmDivClk2Vars.clkFrq * pwmDivClk2Vars.data[0].x[i]);
        pwmDivClk2Vars.data[0].y[i] = (val > 0) ? 1 : 0;
    }
}

function resetpwmDivClk2Anim() {
    if (!pwmDivClk2Vars.animInResetState) {
        pwmDivClk2Vars.dt = 0.01;
        pwmDivClk2Vars.clkFrq = 10;
        initpwmDivClk2Data();
        clearInterval(pwmDivClk2Vars.animId);
        updatepwmDivClk2Plot();
        pwmDivClk2Vars.animInResetState = true;
    }
}

// Compute the new data
function computepwmDivClk2Data() {
    pwmDivClk2Vars.dt = pwmClkDtSldr2Vars.sldrVal;
    pwmDivClk2Vars.clkFrq = pwmDivClkFrqSldrVars.sldrVal;
    for (let i = 0; i < pwmDivClk2Vars.data[0].x.length; ++i) {
        pwmDivClk2Vars.data[0].x[i] += pwmDivClk2Vars.dt;
        var val = Math.sin(2 * Math.PI * pwmDivClk2Vars.clkFrq * pwmDivClk2Vars.data[0].x[i]);
        pwmDivClk2Vars.data[0].y[i] = (val > 0) ? 1 : 0;
    }
}

// Update the plot
function updatepwmDivClk2Plot() {
    Plotly.update(pwmDivClk2Vars.htmlDivId, pwmDivClk2Vars.data, pwmDivClk2Vars.layout, pwmDivClk2Vars.config);
    computepwmDivClk2Data();
}

// Function to initialize the plot
function initpwmDivClk2Plot() {
    initpwmDivClk2Data();
    Plotly.newPlot(pwmDivClk2Vars.htmlDivId, pwmDivClk2Vars.data, pwmDivClk2Vars.layout, pwmDivClk2Vars.config);
}

// Register this animation with jsAnim.js
registerAnimation(0, 3, initpwmDivClk2Plot, playpwmDivClk2Anim, resetpwmDivClk2Anim);