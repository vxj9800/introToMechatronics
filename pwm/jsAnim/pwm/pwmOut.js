// Define all the necessary data into one structure
var pwmPwmOutVars = {
    htmlDivId: 'pwmPwmOut',   // Name for <div> for pwmPwmOut plot
    animId: null,   // Interval id to play and reset animation
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
    }, {
        x: new Array(2), // x axis data
        y: new Array(2), // y axis data
        mode: 'lines',
        line: {
            simplify: false,
            width: 3,
        },    // data line property
    }],

    // Plot layout
    layout: {
        title: 'PWM Output',
        titlefont: {
            family: 'Garamond,serif',
            size: 24,
            color: 'white',
        },
        showlegend: false,
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
function playpwmPwmOutAnim() {
    pwmPwmOutVars.animInResetState = false;
    pwmPwmOutVars.animId = setInterval(updatepwmPwmOutPlot, 20);
}

function initpwmPwmOutData() {
    for (let i = 0; i < pwmPwmOutVars.data[0].x.length; ++i) {
        pwmPwmOutVars.data[0].x[i] = (i / pwmPwmOutVars.data[0].x.length) - 1;
        pwmPwmOutVars.data[0].y[i] = 0;
    }
    pwmPwmOutVars.data[1].x[0] = pwmPwmOutVars.data[0].x[0];
    pwmPwmOutVars.data[1].x[1] = pwmPwmOutVars.data[0].x[pwmPwmOutVars.data[0].x.length - 1];
    pwmPwmOutVars.data[1].y[0] = 0;
    pwmPwmOutVars.data[1].y[1] = 0;
}

function resetpwmPwmOutAnim() {
    if (!pwmPwmOutVars.animInResetState) {
        initpwmPwmOutData();
        clearInterval(pwmPwmOutVars.animId);
        updatepwmPwmOutPlot();
        pwmPwmOutVars.animInResetState = true;
    }
}

// Compute the new data
function computepwmPwmOutData() {
    pwmPwmOutVars.data[0].x = pwmCtrReg2Vars.tData;
    pwmPwmOutVars.data[0].y = pwmCtrReg2Vars.pwmData;
    pwmPwmOutVars.data[1].x[0] = pwmPwmOutVars.data[0].x[0];
    pwmPwmOutVars.data[1].x[1] = pwmPwmOutVars.data[0].x[pwmPwmOutVars.data[0].x.length - 1];
    pwmPwmOutVars.data[1].y[0] = pwmCcRegVars.regVal / pwmTopReg2Vars.regVal;
    pwmPwmOutVars.data[1].y[1] = pwmCcRegVars.regVal / pwmTopReg2Vars.regVal;
}

// Update the plot
function updatepwmPwmOutPlot() {
    Plotly.update(pwmPwmOutVars.htmlDivId, pwmPwmOutVars.data, pwmPwmOutVars.layout, pwmPwmOutVars.config);
    computepwmPwmOutData();
}

// Function to initialize the plot
function initpwmPwmOutPlot() {
    initpwmPwmOutData();
    Plotly.newPlot(pwmPwmOutVars.htmlDivId, pwmPwmOutVars.data, pwmPwmOutVars.layout, pwmPwmOutVars.config);
}

// Register this animation with jsAnim.js
registerAnimation(0, 4, initpwmPwmOutPlot, playpwmPwmOutAnim, resetpwmPwmOutAnim);