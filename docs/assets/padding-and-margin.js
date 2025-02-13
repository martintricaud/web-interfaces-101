let container = document.getElementById("padding-and-margin")

const [positionRadios,displayRadios,positionControls,sizeControls] = [
    container.querySelectorAll('input[name="position"]'),
    container.querySelectorAll('input[name="display"]'),
    container.querySelector('#position-controls'),
    container.querySelector('#size-controls')
]

const div2 = container.querySelector('#dummy2');
const demoBlocks = document.querySelectorAll('.demo-block');
positionRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        div2.style.position = radio.value;
        if (radio.value === 'static') {
            positionControls.classList.add('inactive');
        } else {
            positionControls.classList.remove('inactive');
        }
    });
});
container.querySelector('#top-range').addEventListener('input', (e) => {
    div2.style.top = e.target.value + 'vh';
});
container.querySelector('#left-range').addEventListener('input', (e) => {
    div2.style.left = e.target.value + 'vw';
});
displayRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        demoBlocks.forEach(div => {
            div.style.display = radio.value;
        });
        if (radio.value === 'inline') {
            sizeControls.classList.add('inactive');
        } else {
            sizeControls.classList.remove('inactive');
        }
    });
});
container.querySelector('#width-range').addEventListener('input', (e) => {
    demoBlocks.forEach(div => {
        div.style.width = e.target.value + 'px';
    });
});
container.querySelector('#height-range').addEventListener('input', (e) => {
    demoBlocks.forEach(div => {
        div.style.height = e.target.value + 'px';
        div.style.lineHeight = e.target.value + 'px'; // Adjust line height to center text vertically
    });
});