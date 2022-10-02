let vsMax = new anim('vsMax',
    {
        value: 12, // Maximum Voltage supplied
    },
    () => {
        vsMax.value = 12;
        vsMax.elem.value = '12';
        vsMax.elem.readOnly = true;
    },
    () => {
        vsMax.elem.readOnly = false;
        vsMax.elem.addEventListener('change', updateVsMaxVal);
    },
    () => {
        vsMax.value = 12;
        vsMax.elem.value = '12';
        vsMax.elem.readOnly = true;
        vsMax.elem.removeEventListener('change', updateVsMaxVal);
    }
)

function updateVsMaxVal() {
    vsMax.data.value = parseFloat(vsMax.elem.value);
    if (isNaN(vsMax.data.value) || vsMax.data.value <= 0) {
        vsMax.data.value = 0.01;
        vsMax.elem.value = '0.01';
    }
}