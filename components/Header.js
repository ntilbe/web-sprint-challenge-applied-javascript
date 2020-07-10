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

const headerContainer = document.querySelector(".header-container");

function header() {
  const container = document.createElement("div");
  container.classList.add("header");
  const dateSpan = document.createElement("span");
  dateSpan.classList.add("date");
  dateSpan.innerText = "March 28, 2020";
  container.appendChild(dateSpan);
  const h1 = document.createElement("h1");
  h1.innerText = "Lambda Times";
  const tempSpan = document.createElement("span");
  tempSpan.classList.add("temp");
  tempSpan.innerText = "98°";
  container.appendChild(h1);
  container.appendChild(tempSpan);
  return container;
}

headerContainer.appendChild(header());
