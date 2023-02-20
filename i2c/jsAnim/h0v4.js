let h0v3Wire = new anim('h0v3Wire');
h0v3Wire.val = null;
h0v3Wire.init = function(){
    this.val = 1;
    this.elem.value = this.val;
    this.elem.style.opacity = 1;
    this.handleSignal("11111111111");
};
h0v3Wire.handleSignal = function(bitSeq){
    anime.remove(this.elem.style);
    this.elem.style.opacity = 1;
    h0v3SigPlot.reset();
    anime({
        targets: this.elem.style,
        keyframes: [
            {opacity: 1},
            {opacity: bitSeq[0]},
            {opacity: bitSeq[0]},
            {opacity: bitSeq[0]},
            {opacity: bitSeq[1]},
            {opacity: bitSeq[1]},
            {opacity: bitSeq[1]},
            {opacity: bitSeq[2]},
            {opacity: bitSeq[2]},
            {opacity: bitSeq[2]},
            {opacity: bitSeq[3]},
            {opacity: bitSeq[3]},
            {opacity: bitSeq[3]},
            {opacity: bitSeq[4]},
            {opacity: bitSeq[4]},
            {opacity: bitSeq[4]},
            {opacity: bitSeq[5]},
            {opacity: bitSeq[5]},
            {opacity: bitSeq[5]},
            {opacity: bitSeq[6]},
            {opacity: bitSeq[6]},
            {opacity: bitSeq[6]},
            {opacity: bitSeq[7]},
            {opacity: bitSeq[7]},
            {opacity: bitSeq[7]},
            {opacity: bitSeq[8]},
            {opacity: bitSeq[8]},
            {opacity: bitSeq[8]},
            {opacity: bitSeq[9]},
            {opacity: bitSeq[9]},
            {opacity: bitSeq[9]},
            {opacity: bitSeq[10]},
            {opacity: bitSeq[10]},
        ],
        duration: 11000/4,
        easing: 'easeInOutExpo',
        update: function(anim){
            h0v3SigPlot.appendVal(anim.progress,h0v3Wire.elem.style.opacity);
        }
    })
};
h0v3Wire.reset = function(){
    this.init();
};

let h0v3Sig = new anim('h0v3Sig');
h0v3Sig.val = '';
h0v3Sig.init = function(){
    this.val = '';
    this.elem.value = this.val;
};
h0v3Sig.handleChange = function(){
    this.val = this.elem.value;
    let bitSeq = "11111111111";
    if (this.val)
    {
        bitSeq = this.val.charCodeAt(0);
        h0v3SigToAscii.sig2ascii(bitSeq);
        bitSeq = bitSeq.toString(2).padStart(8, "0");
        h0v3SigToBin.sig2bin(bitSeq);
        bitSeq = bitSeq.split("").reverse().join("");
        bitSeq = "0" + bitSeq + "11";
    }
    h0v3Wire.handleSignal(bitSeq);
};
h0v3Sig.reset = function(){
    this.init();
};

let h0v3SigToAscii = new anim('h0v3SigToAscii');
h0v3SigToAscii.init = function(){
    this.elem.innerHTML = "";
};
h0v3SigToAscii.sig2ascii = function(val){
    this.elem.innerHTML = val;
};
h0v3SigToAscii.reset = function(){
    this.init();
};

let h0v3SigToBin = new anim('h0v3SigToBin');
h0v3SigToBin.init = function(){
    this.elem.innerHTML = "";
};
h0v3SigToBin.sig2bin = function(val){
    this.elem.innerHTML = val;
};
h0v3SigToBin.reset = function(){
    this.init();
};

let h0v3SigPlot = new anim('h0v3SigPlot');
h0v3SigPlot.data = [{
    x: [], // x axis data
    y: [], // y axis data
    mode: 'lines',
    line: {
        simplify: false,
        width: 3,
    },    // data line property
}];
h0v3SigPlot.layout = {
    // autosize: false,
    width: 1200,
    height: 300,
    margin: {
        l: 80,
        r: 10,
        b: 40,
        t: 10,
        pad: 0,
    },
    xaxis: {
        range: [0, 110],
        dtick: 10,
        gridcolor: '#505050',
        // zeroline: false,
        tickcolor: '#fff',
        tickfont: { family: 'Garamond,serif', size: 20, color: '#fff' },
        showticklabels: false,
        title: 'Time',
        titlefont: {
            family: 'Garamond,serif',
            size: 20,
            color: 'white',
        },
    },
    yaxis: {
        gridcolor: '#505050',
        range: [-0.1, 1.1],
        // zeroline: false,
        tickcolor: '#fff',
        tickfont: { family: 'Garamond,serif', size: 20, color: '#fff' },
        showgrid: false,
        dtick: 0.5,
        title: 'GPIO State',
        titlefont: {
            family: 'Garamond,serif',
            size: 20,
            color: 'white',
        },
    },
    paper_bgcolor: '#ffffff00',
    plot_bgcolor: '#ffffff00',
};
h0v3SigPlot.config = {
    staticPlot: true,
};
h0v3SigPlot.init = function () {
    Plotly.purge(this.id);
    this.data[0].x = [];
    this.data[0].y = [];
    Plotly.newPlot(this.id, this.data, this.layout, this.config);
};
h0v3SigPlot.appendVal = function (x,y){
    this.data[0].x.push(x*1.1);
    this.data[0].y.push(y);
    Plotly.update(this.id, this.data, this.layout, this.config);
}
h0v3SigPlot.reset = function (){
    this.init();
}