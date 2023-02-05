let h0v5numberSystems = new anim('h0v5numberSystems');
h0v5numberSystems.decInputElem = [];
h0v5numberSystems.decSplitElem = [];
h0v5numberSystems.decVal = 0;
h0v5numberSystems.binValElem = [];
h0v5numberSystems.binSplitElem = [];
h0v5numberSystems.binVal = 0;
h0v5numberSystems.hexValElem = [];
h0v5numberSystems.hexSplitElem = [];
h0v5numberSystems.hexVal = 0;
h0v5numberSystems.init = function () {
    this.decInputElem = this.elem.children[0].children[0];
    this.decSplitElem = this.elem.children[1];
    this.binValElem = this.elem.children[2];
    this.binSplitElem = this.elem.children[3];
    this.hexValElem = this.elem.children[4];
    this.hexSplitElem = this.elem.children[5];
    this.splitDec();
    this.splitBin();
    this.splitHex();
}
h0v5numberSystems.handleValChange = function () {
    let val = Number(this.decInputElem.value);
    if (isNaN(val) || val < 0)
        this.decInputElem.value = 0;
    else if (val > 65535)
        this.decInputElem.value = 65535;
    // this.decVal = Number(this.decInputElem.value);
    anime({
        targets: this,
        decVal: Number(this.decInputElem.value),
        easing: 'easeInOutExpo',
        round: 1,
        update: function() {
            h0v5numberSystems.splitDec();
            h0v5numberSystems.splitBin();
            h0v5numberSystems.splitHex();
        }
    });
}

h0v5numberSystems.splitDec = function (){
    let decStr = this.decVal.toString();
    while (decStr.length < 5) decStr = "0" + decStr;
    let decSplitStr = decStr[0] + '^{\\cdot 10^{' + (decStr.length-1).toString() + '}}';
    for (let i = 1; i < decStr.length; ++i){
        decSplitStr += '+' + decStr[i] + '^{\\cdot 10^{' + (decStr.length-1-i).toString() + '}}';
    }
    katex.render(decSplitStr,this.decSplitElem,{
        throwOnError: false
    });
}

h0v5numberSystems.splitBin = function (){
    let binStr = this.decVal.toString(2);
    while (binStr.length < 16) binStr = "0" + binStr;
    let binSplitStr = '\\begin{alignat*}{32}'
                        + ' & \\ &   & \\ &' + binStr[0] + '^{\\cdot 2^{' + (binStr.length-1).toString() + '}}'
                        + ' & \\ & + & \\ &' + binStr[1] + '^{\\cdot 2^{' + (binStr.length-2).toString() + '}}'
                        + ' & \\ & + & \\ &' + binStr[2] + '^{\\cdot 2^{' + (binStr.length-3).toString() + '}}'
                        + ' & \\ & + & \\ &' + binStr[3] + '^{\\cdot 2^{' + (binStr.length-4).toString() + '}}'
                        + ' & \\ & + & \\ &' + binStr[4] + '^{\\cdot 2^{' + (binStr.length-5).toString() + '}}'
                        + ' & \\ & + & \\ &' + binStr[5] + '^{\\cdot 2^{' + (binStr.length-6).toString() + '}}'
                        + ' & \\ & + & \\ &' + binStr[6] + '^{\\cdot 2^{' + (binStr.length-7).toString() + '}}'
                        + ' & \\ & + & \\ &' + binStr[7] + '^{\\cdot 2^{' + (binStr.length-8).toString() + '}}'
                        + ' \\\\ '
                        + ' & \\ & + & \\ &' + binStr[8] + '^{\\cdot 2^{' + (binStr.length-9).toString() + '}}'
                        + ' & \\ & + & \\ &' + binStr[9] + '^{\\cdot 2^{' + (binStr.length-10).toString() + '}}'
                        + ' & \\ & + & \\ &' + binStr[10] + '^{\\cdot 2^{' + (binStr.length-11).toString() + '}}'
                        + ' & \\ & + & \\ &' + binStr[11] + '^{\\cdot 2^{' + (binStr.length-12).toString() + '}}'
                        + ' & \\ & + & \\ &' + binStr[12] + '^{\\cdot 2^{' + (binStr.length-13).toString() + '}}'
                        + ' & \\ & + & \\ &' + binStr[13] + '^{\\cdot 2^{' + (binStr.length-14).toString() + '}}'
                        + ' & \\ & + & \\ &' + binStr[14] + '^{\\cdot 2^{' + (binStr.length-15).toString() + '}}'
                        + ' & \\ & + & \\ &' + binStr[15] + '^{\\cdot 2^{' + (binStr.length-16).toString() + '}}'
                        + ' \\end{alignat*}';
    katex.render('\\begin{matrix} \\verb|' + '0b' + binStr.slice(0,8) + '|' + '\\\\' + '\\verb|  ' + binStr.slice(8) + '| \\end{matrix} =',this.binValElem,{
        throwOnError: false
    });
    katex.render(binSplitStr,this.binSplitElem,{
        displayMode: true,
        throwOnError: false
    });
}

h0v5numberSystems.splitHex = function (){
    let hexStr = this.decVal.toString(16);
    while (hexStr.length < 4) hexStr = "0" + hexStr;
    let hexSplitStr = + hexStr[0] + '^{\\cdot 16^{' + (hexStr.length-1).toString() + '}}';
    for (let i = 1; i < hexStr.length; ++i){
        hexSplitStr += '+' + hexStr[i] + '^{\\cdot 16^{' + (hexStr.length-1-i).toString() + '}}';
    }
    katex.render('\\verb| 0x' + hexStr + '| =',this.hexValElem,{
        throwOnError: false
    });
    katex.render(hexSplitStr,this.hexSplitElem,{
        throwOnError: false
    });
}