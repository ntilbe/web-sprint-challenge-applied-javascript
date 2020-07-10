// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    // define new elements
    const header = document.createElement('div')
    const date = document.createElement('span')
    const title = document.createElement('h1')
    const temp = document.createElement('span')
    // set up structure
    header.appendChild(date)
    header.appendChild(title)
    header.appendChild(temp)
    // add appropriate classes
    header.classList.add('header')
    date.classList.add('date')
    temp.classList.add('temp')
    // set text content
    date.textContent = 'MARCH 28, 2020'
    title.textContent = 'Lambda Times'
    temp.textContent = '98'
    // return parent

    // console.log("Header -> header", header)
    return header
}
// and append to the DOM inside the div.header-container
document.querySelector('div.header-container').appendChild(Header());
