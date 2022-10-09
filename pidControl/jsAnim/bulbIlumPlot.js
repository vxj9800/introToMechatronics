let bulbIlumPlot = new anim('bulbIlumPlot',
    {
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
            title: 'Bulb Voltage vs. Illumination',
            titlefont: {
                family: 'Garamond,serif',
                size: 24,
                color: 'white',
            },
            autosize: true,
            xaxis: {
                title: 'Voltage (V)',
                titlefont: {
                    family: 'Garamond,serif',
                    size: 20,
                    color: 'white',
                },
                range: [0, 12],
                tickcolor: '#fff',
                tickfont: { family: 'Garamond,serif', size: 20, color: '#fff' },
            },
            yaxis: {
                title: 'Illumination',
                titlefont: {
                    family: 'Garamond,serif',
                    size: 20,
                    color: 'white',
                },
                range: [0, 1],
                showticklabels: false,
            },
            paper_bgcolor: '#ffffff00',
            plot_bgcolor: '#ffffff00',
            showlegend: false,
        },

        config: {
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
        bulbIlumPlot.data.data[0].y[i] = (i / bulbIlumPlot.data.data[0].x.length) ** 3;
    }
    bulbIlumPlot.data.data[1].x[0] = 0;
    bulbIlumPlot.data.data[1].y[0] = 0;
}

// Update the plot
function updatebulbIlumPlotPlot(i) {
    voltageRangeElem = document.getElementById("voltageVal");
    bulbIlumPlot.data.data[1].x[0] = voltageRangeElem.value * 12;
    bulbIlumPlot.data.data[1].y[0] = voltageRangeElem.value ** 3;
    Plotly.update(bulbIlumPlot.id, bulbIlumPlot.data.data, bulbIlumPlot.data.layout, bulbIlumPlot.data.config);
}