let bulbLight = new anim('bulbLight',
    {
        initVoltageVal: 0.1,
        glowCircRadius: 110.3,
    },
    () => {
        bulbLight.elem.setAttribute("r", bulbLight.data.glowCircRadius * bulbLight.data.initVoltageVal ** 3);
    },
    () => { },
    () => {
        voltageRangeElem = document.getElementById("voltageVal");
        bulbLight.elem.setAttribute("r", bulbLight.data.glowCircRadius * voltageRangeElem.value ** 3);
    },
    () => { },
    () => {
        bulbLight.elem.setAttribute("r", bulbLight.data.glowCircRadius * bulbLight.data.initVoltageVal ** 3);
    }
)

let volts = new anim('volts',
    {
        initVoltageVal: 0.1,
    },
    () => {
        volts.elem.innerHTML = (volts.data.initVoltageVal * 12).toFixed(1) + 'V';
    },
    () => { },
    () => {
        voltageRangeElem = document.getElementById("voltageVal");
        volts.elem.innerHTML = (voltageRangeElem.value * 12).toFixed(1) + 'V';
    },
    () => { },
    () => {
        volts.elem.innerHTML = (volts.data.initVoltageVal * 12).toFixed(1) + 'V';
    }
)

let voltageVal = new anim('voltageVal',
    {
        initVoltageVal: 0.1,
    },
    () => {
        voltageVal.elem.value = voltageVal.data.initVoltageVal;
        voltageVal.elem.disabled = true;
    },
    () => {
        voltageVal.elem.disabled = false;
    },
    () => { },
    () => {
        voltageVal.elem.disabled = true;
    },
    () => {
        voltageVal.elem.value = voltageVal.data.initVoltageVal;
        voltageVal.elem.disabled = true;
    }
)

let bulbIlumPlot = new anim('bulbIlumPlot',
    {
        initVoltageVal: 0.1,
        // Plot data
        data: [{
            x: new Array(100), // x axis data
            y: new Array(100), // y axis data
            mode: 'lines',
            line: {
                simplify: false,
                width: 3,
            },    // data line property
        }, {
            x: [0], // x axis data
            y: [0], // y axis data
            mode: 'markers',
            type: 'scatter',
            marker: { size: 12 },
        }],

        // Plot layout
        layout: {
            // title: 'Bulb Voltage vs. Illumination',
            // titlefont: {
            //     family: 'Garamond,serif',
            //     size: 24,
            //     color: 'white',
            // },
            autosize: true,
            margin: {
                l: 70,
                r: 10,
                b: 70,
                t: 10,
                pad: 0,
            },
            xaxis: {
                title: 'Voltage (V)',
                titlefont: {
                    family: 'Garamond,serif',
                    size: 20,
                    color: 'white',
                },
                gridcolor: '#505050',
                range: [0, 12],
                tickcolor: '#fff',
                tickfont: { family: 'Garamond,serif', size: 20, color: '#fff' },
            },
            yaxis: {
                title: 'Illumination (lumens)',
                titlefont: {
                    family: 'Garamond,serif',
                    size: 20,
                    color: 'white',
                },
                gridcolor: '#505050',
                range: [0, 700],
                tickcolor: '#fff',
                tickfont: { family: 'Garamond,serif', size: 20, color: '#fff' },
                // showticklabels: false,
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
        initbulbIlumPlotData();
        Plotly.newPlot(bulbIlumPlot.id, bulbIlumPlot.data.data, bulbIlumPlot.data.layout, bulbIlumPlot.data.config);
    },
    () => { },
    (i) => {
        updatebulbIlumPlotPlot(i);
    },
    () => { },
    () => {
        initbulbIlumPlotData();
        updatebulbIlumPlotPlot();
    }
)

// Initialize the bulbIlumPlot data
function initbulbIlumPlotData() {
    for (let i = 0; i < bulbIlumPlot.data.data[0].x.length; ++i) {
        bulbIlumPlot.data.data[0].x[i] = i / bulbIlumPlot.data.data[0].x.length * 12;
        bulbIlumPlot.data.data[0].y[i] = (i / bulbIlumPlot.data.data[0].x.length) ** 3 * 700;
    }
    bulbIlumPlot.data.data[1].x[0] = bulbIlumPlot.data.initVoltageVal * 12;
    bulbIlumPlot.data.data[1].y[0] = bulbIlumPlot.data.initVoltageVal ** 3 * 700;
}

// Update the plot
function updatebulbIlumPlotPlot(i) {
    voltageRangeElem = document.getElementById("voltageVal");
    bulbIlumPlot.data.data[1].x[0] = voltageRangeElem.value * 12;
    bulbIlumPlot.data.data[1].y[0] = voltageRangeElem.value ** 3 * 700;
    Plotly.update(bulbIlumPlot.id, bulbIlumPlot.data.data, bulbIlumPlot.data.layout);
}