let noLoadSpeed = new anim('noLoadSpeed',
    {
        value: 400, // Maximum Voltage supplied
    },
    () => {
        noLoadSpeed.value = 400;
        noLoadSpeed.elem.value = '400';
        noLoadSpeed.elem.readOnly = true;
    },
    () => {
        noLoadSpeed.elem.readOnly = false;
        noLoadSpeed.elem.addEventListener('change', updateNoLoadSpeedVal);
    },
    () => {
        noLoadSpeed.value = 400;
        noLoadSpeed.elem.value = '400';
        noLoadSpeed.elem.readOnly = true;
        noLoadSpeed.elem.removeEventListener('change', updateNoLoadSpeedVal);
    }
)

function updateNoLoadSpeedVal() {
    noLoadSpeed.data.value = parseFloat(noLoadSpeed.elem.value);
    if (isNaN(noLoadSpeed.data.value) || noLoadSpeed.data.value <= 100) {
        noLoadSpeed.data.value = 100.1;
        noLoadSpeed.elem.value = '100.1';
    }
}