// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

import axios from "axios";

const articleTitles = [ // an array stored in a variable called 'articleTitles'
  "bootstrap",  // These will be the trending topics
  "javascript",
  "technology",
  "jquery",
  "node",
];

const cardsContainer = document.querySelector(".cards-container"); // gets the first '.cards-container' element
const errorContainer = document.querySelector('.errors-container'); // gets the first '.errors-container' element

axios // object 
  .get("https://lambda-times-backend.herokuapp.com/articles") // returns a promise, busy getting data and will return in a moment
  .then((result) => {   // .then and .catch needed to deal with the data
    articleTitles.forEach((title) => { // deal with the response data in here (.then)
        const className = `article-topic-${title}`;
      result.data.articles[title].forEach((article) => {
        cardsContainer.appendChild(createCard(article, className)); 
      });
    });
  })
  .catch((error) => {  // deal with the error in here
    const errorMessage = document.createElement('p');
    errorMessage.innerText = error.message;
    errorContainer.appendChild(errorMessage);
    errorContainer.classList.toggle('hidden');
  });

function createCard(cardData, topicClass) {

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card");
  cardContainer.classList.add(topicClass);

  const headline = document.createElement("div");
  headline.classList.add("headline");
  headline.innerText = `${cardData.headline}`;
  cardContainer.appendChild(headline);

  const author = document.createElement("div");
  author.classList.add("author");
  cardContainer.appendChild(author);

  const authorImgContainer = document.createElement("div");
  authorImgContainer.classList.add("img-container");
  author.appendChild(authorImgContainer);

  const authorImg = document.createElement("img");
  authorImg.setAttribute("src", cardData.authorPhoto);
  authorImgContainer.appendChild(authorImg);

  const authorName = document.createElement("span");
  authorName.innerText = `${cardData.authorName}`;
  author.appendChild(authorName);

  cardContainer.addEventListener("click", () => {
    console.log(cardData.headline);
  });

  return cardContainer;
}