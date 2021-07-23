const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
let value = document.getElementById('value');
let count = 0;

increase.addEventListener('click', () => {
        value.textContent = count += 1;
        
        if(count > 0) {
            value.style.color = 'green';
        } else if (count === 0) {
            value.style.color = '#888';
        }
});

decrease.addEventListener('click', () => {
        value.textContent = count-= 1;
        
        if(count < 0) {
            value.style.color = 'red';
        } else if (count === 0) {
            value.style.color = '#888';
        }
});
