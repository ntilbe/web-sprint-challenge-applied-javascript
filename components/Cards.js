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


axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        // grab appropriate response.data
        const articlesData = response.data.articles;
        // loop through each key(topic) in returned response data
        Object.keys(articlesData).forEach(topic => {
            // loop through every article in subject
            articlesData[topic].forEach(article => {
                // attach newly created card to appropriate DOM element
                document.querySelector('.cards-container').appendChild(createCard(article));
            });
        });
    })
    .catch(err => {
        console.log('oops!');
    })

function createCard(attrs) {
    // define and create new elements
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const authorName = document.createElement('span');
    //set up structure
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    author.appendChild(authorName);
    imgContainer.appendChild(img);
    // add class names
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');
    // add content
    headline.textContent = attrs.headline;
    img.src = attrs.authorPhoto;
    authorName.textContent = attrs.authorName;
    // return
    return card;
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        // grab appropriate response data
        const articles = response.data.articles;
        console.log("articles", articles);

        // push eveything from each 'subject' into an array so we can use .forEach
        // // 'subjects' -- bootstrap, javascript, jquery, node, technology
        const subjectsArray = Array.from(articles);
        subjectsArray.push(articles.bootstrap, articles.javascript, articles.jquery, articles.node, articles.technology);
        console.log("subjectsArray", subjectsArray);

        // push every article from each subject into new array 
        const everyArticle = []
        subjectsArray.forEach(subject => subject.forEach(article => { everyArticle.push(article) }));
        console.log("everyArticle", everyArticle);

        // create articles class constructor which uses createCard when instantiated
        class ArticleCard {
            constructor(article) {
                // assign variables
                this.headline = article.headline;
                this.authorName = article.authorName;
                this.authorPhoto = article.authorPhoto;

                // create new card and add to .cards-container
                const newArticle = createCard(this);
                document.querySelector('.cards-container').appendChild(newArticle);
            }
        }

        // loop through everyArticleArray and create card using 'new' Articles constructor
        const updateArticles = everyArticle.forEach(article => new ArticleCard(article));
    })
    .catch(error => {
        console.log(error);
    })