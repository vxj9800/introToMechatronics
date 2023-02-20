let h0v1PwmTerminology = new anim('h0v1PwmTerminology');
h0v1PwmTerminology.data = [{
    x: [0, 0, 0.35, 0.35, 1, 1, 1.35, 1.35, 2, 2, 2.35, 2.35, 3, 3, 3.35, 3.35, 4, 4], // x axis data
    y: [0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1], // y axis data
    mode: 'lines',
    line: {
        simplify: false,
        width: 3,
    },    // data line property
}];
h0v1PwmTerminology.layout = {
    autosize: false,
    height: 300,
    width: 1200,
    margin: {
        l: 40,
        r: 10,
        b: 40,
        t: 40,
        pad: 0,
    },
    xaxis: {
        gridcolor: '#505050',
        showgrid: false,
        zeroline: false,
        showline: false,
        autotick: true,
        ticks: '',
        showticklabels: false
    },
    yaxis: {
        gridcolor: '#505050',
        range: [-0.1, 1.1],
        zeroline: false,
        tickcolor: '#fff',
        tickfont: { family: 'Garamond,serif', size: 20, color: '#fff' },
        showgrid: false,
        dtick: 1,
    },
    annotations: new Array(6),
    paper_bgcolor: '#ffffff00',
    plot_bgcolor: '#ffffff00',
};
h0v1PwmTerminology.config = {
    staticPlot: true,
};
h0v1PwmTerminology.init = function () {
    // Draw t_H text
    this.layout.annotations[0] = {//t_H arrow
        x: 1,
        y: 0.8,
        xref: 'x',
        yref: 'y',
        showarrow: true,
        arrowhead: 3,
        arrowside: "start+end",
        arrowcolor: 'white',
        ax: 1.35,
        ay: 0.8,
        axref: 'x',
        ayref: 'y',
    };
    this.layout.annotations[1] = {//Output text
        x: 1.175,
        y: 0.92,
        xref: 'x',
        yref: 'y',
        showarrow: false,
        text: '$t_H$',//'<i>t<sub>H</sub></i>',
        font: { family: 'Garamond,serif', size: 30, color: 'white' },
    };

    // Draw t_L text
    this.layout.annotations[2] = {//t_L arrow
        x: 1.35,
        y: 0.2,
        xref: 'x',
        yref: 'y',
        showarrow: true,
        arrowhead: 3,
        arrowside: "start+end",
        arrowcolor: 'white',
        ax: 2,
        ay: 0.2,
        axref: 'x',
        ayref: 'y',
    };
    this.layout.annotations[3] = {//Output text
        x: 1.675,
        y: 0.32,
        xref: 'x',
        yref: 'y',
        showarrow: false,
        text: '$t_L$',//'<i>t<sub>H</sub></i>',
        font: { family: 'Garamond,serif', size: 30, color: 'white' },
    };

    // Draw p text
    this.layout.annotations[4] = {//p arrow
        x: 1,
        y: 0.5,
        xref: 'x',
        yref: 'y',
        showarrow: true,
        arrowhead: 3,
        arrowside: "start+end",
        arrowcolor: 'white',
        ax: 2,
        ay: 0.5,
        axref: 'x',
        ayref: 'y',
    };
    this.layout.annotations[5] = {//Output text
        x: 1.5,
        y: 0.62,
        xref: 'x',
        yref: 'y',
        showarrow: false,
        text: '$p$',//'<i>t<sub>H</sub></i>',
        font: { family: 'Garamond,serif', size: 30, color: 'white' },
    };

    Plotly.newPlot(this.id, this.data, this.layout, this.config);
};
//     {
//         throttleVal: 4.9,
//         m: 1,
//         g: 9.8,
//         slopeAng: Math.PI / 6,
//         x: 5 / Math.cos(Math.PI / 6) / 2,
//         xd: -5 / 2 / Math.PI,
//         xDes: 5 / Math.cos(Math.PI / 6),
//         dt: 0.016,       // Simulation dt
//         blockXCoords: [0, 0, 1, 1, 0],
//         blockYCoords: [0, 1, 1, 0, 0],
//         // Plot data
//         data: [{ // Floor
//             x: [0, 7], // x axis data
//             y: [0, 7 * Math.tan(Math.PI / 6)], // y axis data
//             mode: 'lines',
//             line: {
//                 simplify: false,
//                 width: 3,
//                 color: 'white',
//             },
//         }, { // Actual Block
//             x: new Array(5), // x axis data
//             y: new Array(5), // y axis data
//             mode: 'lines',
//             fill: 'toself',
//             fillcolor: 'rgba(30, 117, 179, 0.5)',
//             line: {
//                 simplify: false,
//                 width: 3,
//                 color: '#1f77b4',
//             },
//         }, { // Desired Block
//             x: new Array(5), // x axis data
//             y: new Array(5), // y axis data
//             mode: 'lines',
//             line: {
//                 dash: 'dashdot',
//                 simplify: false,
//                 width: 3,
//                 color: '#1f77b4',
//             },
//         },],

//         // Plot layout
//         layout: {
//             autosize: true,
//             margin: {
//                 l: 50,
//                 r: 10,
//                 b: 30,
//                 t: 10,
//                 pad: 0,
//             },
//             xaxis: {
//                 gridcolor: '#505050',
//                 showline: true,
//                 range: [-0.5, 7],
//                 tickfont: { family: 'Garamond,serif', size: 20, color: 'white' },
//             },
//             yaxis: {
//                 gridcolor: '#505050',
//                 showline: true,
//                 showticklabels: false,
//                 scaleanchor: "x",
//                 scaleratio: 1,
//                 range: [-0.5, 4.5],
//                 tickfont: { family: 'Garamond,serif', size: 20, color: 'white' },
//             },
//             annotations: new Array(6),
//             paper_bgcolor: '#ffffff00',
//             plot_bgcolor: '#ffffff00',
//             showlegend: false,
//         },

//         config: {
//             staticPlot: true,
//             displayModeBar: false,
//             scrollZoom: false,
//         }
//     },
//     () => {
//         inith0v1PwmTerminologyData();
//         h0v1PwmTerminologyOutVarTxt();
//         h0v1PwmTerminologyInVarTxt();
//         h0v1PwmTerminologyErrVarTxt()
//         Plotly.newPlot(h0v1PwmTerminology.id, h0v1PwmTerminology.data.data, h0v1PwmTerminology.data.layout, h0v1PwmTerminology.data.config);
//     },
//     () => { },
//     (tAnim, dtAnim) => {
//         updateh0v1PwmTerminologyPlot(tAnim, dtAnim);
//     },
//     () => { },
//     () => {
//         inith0v1PwmTerminologyData();
//         updateh0v1PwmTerminologyPlot(0, 0);
//     }
// )

// // Initialize the h0v1PwmTerminology data
// function inith0v1PwmTerminologyData() {
//     h0v1PwmTerminology.data.x = 5 / Math.cos(h0v1PwmTerminology.data.slopeAng) / 2; h0v1PwmTerminology.data.xd = -5 / 2 / Math.PI; h0v1PwmTerminology.data.throttleVal = 4.9;
//     for (let i = 0; i < h0v1PwmTerminology.data.data[1].x.length; ++i) {
//         h0v1PwmTerminology.data.data[1].x[i] = (h0v1PwmTerminology.data.x + h0v1PwmTerminology.data.blockXCoords[i]) * Math.cos(h0v1PwmTerminology.data.slopeAng) - (h0v1PwmTerminology.data.blockYCoords[i]) * Math.sin(h0v1PwmTerminology.data.slopeAng);
//         h0v1PwmTerminology.data.data[1].y[i] = (h0v1PwmTerminology.data.x + h0v1PwmTerminology.data.blockXCoords[i]) * Math.sin(h0v1PwmTerminology.data.slopeAng) + (h0v1PwmTerminology.data.blockYCoords[i]) * Math.cos(h0v1PwmTerminology.data.slopeAng);
//     }

//     h0v1PwmTerminology.data.xDes = 5 / Math.cos(h0v1PwmTerminology.data.slopeAng);
//     for (let i = 0; i < h0v1PwmTerminology.data.data[2].x.length; ++i) {
//         h0v1PwmTerminology.data.data[2].x[i] = (h0v1PwmTerminology.data.xDes + h0v1PwmTerminology.data.blockXCoords[i]) * Math.cos(h0v1PwmTerminology.data.slopeAng) - (h0v1PwmTerminology.data.blockYCoords[i]) * Math.sin(h0v1PwmTerminology.data.slopeAng);
//         h0v1PwmTerminology.data.data[2].y[i] = (h0v1PwmTerminology.data.xDes + h0v1PwmTerminology.data.blockXCoords[i]) * Math.sin(h0v1PwmTerminology.data.slopeAng) + (h0v1PwmTerminology.data.blockYCoords[i]) * Math.cos(h0v1PwmTerminology.data.slopeAng);
//     }
// }

// // Draw the h0v1PwmTerminology output variable annotation
// function h0v1PwmTerminologyOutVarTxt() {
//     let stArrX = (h0v1PwmTerminology.data.x) * Math.cos(h0v1PwmTerminology.data.slopeAng) - (-0.15) * Math.sin(h0v1PwmTerminology.data.slopeAng);
//     let stArrY = (h0v1PwmTerminology.data.x) * Math.sin(h0v1PwmTerminology.data.slopeAng) + (-0.15) * Math.cos(h0v1PwmTerminology.data.slopeAng);
//     let stArraX = (0) * Math.cos(h0v1PwmTerminology.data.slopeAng) - (-0.15) * Math.sin(h0v1PwmTerminology.data.slopeAng);
//     let stArraY = (0) * Math.sin(h0v1PwmTerminology.data.slopeAng) + (-0.15) * Math.cos(h0v1PwmTerminology.data.slopeAng);
//     let stTxtX = (h0v1PwmTerminology.data.x / 2) * Math.cos(h0v1PwmTerminology.data.slopeAng) - (-0.25) * Math.sin(h0v1PwmTerminology.data.slopeAng);
//     let stTxtY = (h0v1PwmTerminology.data.x / 2) * Math.sin(h0v1PwmTerminology.data.slopeAng) + (-0.25) * Math.cos(h0v1PwmTerminology.data.slopeAng);
//     h0v1PwmTerminology.data.layout.annotations[0] = {//Output right arrow
//         x: stArrX,
//         y: stArrY,
//         xref: 'x',
//         yref: 'y',
//         showarrow: true,
//         arrowhead: 3,
//         arrowside: "start+end",
//         arrowcolor: 'white',
//         ax: stArraX,
//         ay: stArraY,
//         axref: 'x',
//         ayref: 'y',
//     };
//     h0v1PwmTerminology.data.layout.annotations[1] = {//Output text
//         x: stTxtX,
//         y: stTxtY,
//         xref: 'x',
//         yref: 'y',
//         showarrow: false,
//         text: '<i>x</i>',
//         textangle: -30,
//         font: { family: 'Garamond,serif', size: 24, color: 'white' },
//     };
// }

// // Draw the h0v1PwmTerminology set point variable annotation
// function h0v1PwmTerminologyInVarTxt() {
//     let spArrX = (h0v1PwmTerminology.data.xDes) * Math.cos(h0v1PwmTerminology.data.slopeAng) - (-0.5) * Math.sin(h0v1PwmTerminology.data.slopeAng);
//     let spArrY = (h0v1PwmTerminology.data.xDes) * Math.sin(h0v1PwmTerminology.data.slopeAng) + (-0.5) * Math.cos(h0v1PwmTerminology.data.slopeAng);
//     let spArraX = (0) * Math.cos(h0v1PwmTerminology.data.slopeAng) - (-0.5) * Math.sin(h0v1PwmTerminology.data.slopeAng);
//     let spArraY = (0) * Math.sin(h0v1PwmTerminology.data.slopeAng) + (-0.5) * Math.cos(h0v1PwmTerminology.data.slopeAng);
//     let spTxtX = (h0v1PwmTerminology.data.xDes / 2) * Math.cos(h0v1PwmTerminology.data.slopeAng) - (-0.6) * Math.sin(h0v1PwmTerminology.data.slopeAng);
//     let spTxtY = (h0v1PwmTerminology.data.xDes / 2) * Math.sin(h0v1PwmTerminology.data.slopeAng) + (-0.6) * Math.cos(h0v1PwmTerminology.data.slopeAng);
//     h0v1PwmTerminology.data.layout.annotations[2] = {//Output right arrow
//         x: spArrX,
//         y: spArrY,
//         xref: 'x',
//         yref: 'y',
//         showarrow: true,
//         arrowhead: 3,
//         arrowside: "start+end",
//         arrowcolor: 'white',
//         ax: spArraX,
//         ay: spArraY,
//         axref: 'x',
//         ayref: 'y',
//     };
//     h0v1PwmTerminology.data.layout.annotations[3] = {//Output text
//         x: spTxtX,
//         y: spTxtY,
//         xref: 'x',
//         yref: 'y',
//         showarrow: false,
//         text: '<i>x<sub>des</sub></i>',
//         textangle: -30,
//         font: { family: 'Garamond,serif', size: 24, color: 'white' },
//     };
// }

// // Draw the h0v1PwmTerminology error variable annotation
// function h0v1PwmTerminologyErrVarTxt() {
//     let errArrX = (h0v1PwmTerminology.data.xDes) * Math.cos(h0v1PwmTerminology.data.slopeAng) - (-0.15) * Math.sin(h0v1PwmTerminology.data.slopeAng);
//     let errArrY = (h0v1PwmTerminology.data.xDes) * Math.sin(h0v1PwmTerminology.data.slopeAng) + (-0.15) * Math.cos(h0v1PwmTerminology.data.slopeAng);
//     let errArraX = (h0v1PwmTerminology.data.x) * Math.cos(h0v1PwmTerminology.data.slopeAng) - (-0.15) * Math.sin(h0v1PwmTerminology.data.slopeAng);
//     let errArraY = (h0v1PwmTerminology.data.x) * Math.sin(h0v1PwmTerminology.data.slopeAng) + (-0.15) * Math.cos(h0v1PwmTerminology.data.slopeAng);
//     let errTxtX = (h0v1PwmTerminology.data.x + h0v1PwmTerminology.data.xDes) / 2 * Math.cos(h0v1PwmTerminology.data.slopeAng) - (-0.25) * Math.sin(h0v1PwmTerminology.data.slopeAng);
//     let errTxtY = (h0v1PwmTerminology.data.x + h0v1PwmTerminology.data.xDes) / 2 * Math.sin(h0v1PwmTerminology.data.slopeAng) + (-0.25) * Math.cos(h0v1PwmTerminology.data.slopeAng);
//     h0v1PwmTerminology.data.layout.annotations[4] = {//Output right arrow
//         x: errArrX,
//         y: errArrY,
//         xref: 'x',
//         yref: 'y',
//         showarrow: true,
//         arrowhead: 3,
//         arrowside: "start+end",
//         arrowcolor: 'white',
//         ax: errArraX,
//         ay: errArraY,
//         axref: 'x',
//         ayref: 'y',
//     };
//     h0v1PwmTerminology.data.layout.annotations[5] = {//Output text
//         x: errTxtX,
//         y: errTxtY,
//         xref: 'x',
//         yref: 'y',
//         showarrow: false,
//         text: '<i>e</i>',
//         textangle: -30,
//         font: { family: 'Times, serif', size: 24, color: 'white' },
//     };
// }

// // Update the plot
// function updateh0v1PwmTerminologyPlot(tAnim, dtAnim) {
//     T = tAnim * h0v1PwmTerminology.data.dt;
//     h = dtAnim * h0v1PwmTerminology.data.dt;
//     h0v1PwmTerminology.data.throttleVal = h0v3throttle.elem.value;
//     X = math.matrix([[h0v1PwmTerminology.data.x], [h0v1PwmTerminology.data.xd]]);
//     // Runge-Kutta 4th order
//     const k1 = derh0v1PwmTerminologyPlot(T, X)

//     const s1 = math.add(X, math.multiply(k1, h / 2));
//     const k2 = derh0v1PwmTerminologyPlot(T + h / 2, s1)

//     const s2 = math.add(X, math.multiply(k2, h / 2));
//     const k3 = derh0v1PwmTerminologyPlot(T + h / 2, s2)

//     const s3 = math.add(X, math.multiply(k3, h));
//     const k4 = derh0v1PwmTerminologyPlot(T + h, s3) // derh0v1PwmTerminologyPlot(t + h, y_n + k3*h)
//     X = math.add(X, math.multiply(math.add(math.add(math.divide(k1, 6), math.divide(k2, 3)), math.add(math.divide(k3, 3), math.divide(k4, 6))), h));

//     h0v1PwmTerminology.data.x = X.get([0, 0]);
//     h0v1PwmTerminology.data.xd = X.get([1, 0]);

//     for (let i = 0; i < h0v1PwmTerminology.data.data[1].x.length; ++i) {
//         h0v1PwmTerminology.data.data[1].x[i] = (h0v1PwmTerminology.data.x + h0v1PwmTerminology.data.blockXCoords[i]) * Math.cos(h0v1PwmTerminology.data.slopeAng) - (h0v1PwmTerminology.data.blockYCoords[i]) * Math.sin(h0v1PwmTerminology.data.slopeAng);
//         h0v1PwmTerminology.data.data[1].y[i] = (h0v1PwmTerminology.data.x + h0v1PwmTerminology.data.blockXCoords[i]) * Math.sin(h0v1PwmTerminology.data.slopeAng) + (h0v1PwmTerminology.data.blockYCoords[i]) * Math.cos(h0v1PwmTerminology.data.slopeAng);
//     }

//     h0v1PwmTerminology.data.xDes = 5 / Math.cos(h0v1PwmTerminology.data.slopeAng) + Math.sin(2 * Math.PI * 0.3 * T);
//     for (let i = 0; i < h0v1PwmTerminology.data.data[2].x.length; ++i) {
//         h0v1PwmTerminology.data.data[2].x[i] = (h0v1PwmTerminology.data.xDes + h0v1PwmTerminology.data.blockXCoords[i]) * Math.cos(h0v1PwmTerminology.data.slopeAng) - (h0v1PwmTerminology.data.blockYCoords[i]) * Math.sin(h0v1PwmTerminology.data.slopeAng);
//         h0v1PwmTerminology.data.data[2].y[i] = (h0v1PwmTerminology.data.xDes + h0v1PwmTerminology.data.blockXCoords[i]) * Math.sin(h0v1PwmTerminology.data.slopeAng) + (h0v1PwmTerminology.data.blockYCoords[i]) * Math.cos(h0v1PwmTerminology.data.slopeAng);
//     }

//     h0v1PwmTerminologyOutVarTxt();
//     h0v1PwmTerminologyInVarTxt();
//     h0v1PwmTerminologyErrVarTxt()
//     Plotly.update(h0v1PwmTerminology.id, h0v1PwmTerminology.data.data, h0v1PwmTerminology.data.layout)
// }

// // Function to compute state derivatives
// function derh0v1PwmTerminologyPlot(t, x) {
//     dx = math.zeros(2, 1);
//     dx.set([0, 0], x.get([1, 0]));
//     dx.set([1, 0], (h0v1PwmTerminology.data.throttleVal - h0v1PwmTerminology.data.m * h0v1PwmTerminology.data.g * Math.sin(h0v1PwmTerminology.data.slopeAng)) / h0v1PwmTerminology.data.m);
//     return dx;
// }