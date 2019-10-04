// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const newDiv = document.createElement('div');
    const newSpan = document.createElement('span');
    const newH1 = document.createElement('h1');
    const newSpan2= document.createElement('span');

    newDiv.classList.add('header');
    newSpan.classList.add('date');
    newSpan2.classList.add('temp');

    newSpan.textContent = 'SMARCH 28, 2019';
    newH1.textContent = 'Lambda Times';
    newSpan2.textContent = '98°';

    newDiv.appendChild(newSpan);
    newDiv.appendChild(newH1);
    newDiv.appendChild(newSpan2);

    return newDiv;

}

const header = document.querySelector('.header-container');

header.appendChild(Header());