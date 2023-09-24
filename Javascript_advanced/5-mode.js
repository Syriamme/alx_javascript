#!/usr/bin/node
// Changing DOM with closure


function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    };
}

function main() {
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');
  
    const parag = document.createElement('p');
    parag.textContent = 'Welcome Holberton!';
  
    document.body.appendChild(parag);
  
    const spookyBtn = document.getElementById('spookyButton');
    const darkModeBtn = document.getElementById('darkModeButton');
    const screamModeBtn = document.getElementById('screamModeButton');
  
    spookyBtn.addEventListener('click', spooky);
    darkModeBtn.addEventListener('click', darkMode);
    screamModeBtn.addEventListener('click', screamMode);
  }

main();
