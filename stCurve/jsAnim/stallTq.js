let stallTq = new anim('stallTq',
    {
        value: 0.01, // Maximum Voltage supplied
    },
    () => {
        stallTq.value = 0.01;
        stallTq.elem.value = '0.01';
        stallTq.elem.readOnly = true;
    },
    () => {
        stallTq.elem.readOnly = false;
        stallTq.elem.addEventListener('change', updateStallTqVal);
    },
    () => {
        stallTq.value = 0.01;
        stallTq.elem.value = '0.01';
        stallTq.elem.readOnly = true;
        stallTq.elem.removeEventListener('change', updateStallTqVal);
    }
)

function updateStallTqVal() {
    stallTq.data.value = parseFloat(stallTq.elem.value);
    if (isNaN(stallTq.data.value) || stallTq.data.value <= 0) {
        stallTq.data.value = 0.001;
        stallTq.elem.value = '0.001';
    }
}