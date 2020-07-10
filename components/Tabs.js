// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        // create all topics variable -- could just do .forEach on response.data.topics
        const allTopics = response.data.topics
        // forEach topic, attach to DOM a newly created tab
        allTopics.forEach(topic => {
            document.querySelector('.topics').appendChild(createTab(topic))
        })  
    })
    .catch(err => console.log(err))


function createTab(topic) {
    // define new element(s)
    const tab = document.createElement('div')
    // set up structure -- n/a
    // add classes to element
    tab.classList.add('tab')
    // set text content -- (to topic parameter passed in)
    tab.textContent = topic
    // RETURN 
    return tab
    }