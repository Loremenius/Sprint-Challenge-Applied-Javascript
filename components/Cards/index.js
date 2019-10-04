// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(function (response) {
        // handle success
        console.log(response);
        response.data.articles.bootstrap.forEach(element => {
            const cardsContainer = document.querySelector('.cards-container');
            cardsContainer.appendChild(createComponent(element));
        });
        response.data.articles.javascript.forEach(element => {
            const cardsContainer = document.querySelector('.cards-container');
            cardsContainer.appendChild(createComponent(element));
        });
        response.data.articles.jquery.forEach(element => {
            const cardsContainer = document.querySelector('.cards-container');
            cardsContainer.appendChild(createComponent(element));
        });
        response.data.articles.node.forEach(element => {
            const cardsContainer = document.querySelector('.cards-container');
            cardsContainer.appendChild(createComponent(element));
        });
        response.data.articles.technology.forEach(element => {
            const cardsContainer = document.querySelector('.cards-container');
            cardsContainer.appendChild(createComponent(element));
        });
    })
   .catch(function (error) {
        // handle error
         console.log(error);
   });

   function createComponent(object){
       const newCard = document.createElement('div');
       const newHeadline = document.createElement('div');
       const newAuthor = document.createElement('div');
       const newImgCont = document.createElement('div');
       const newImg = document.createElement('img');
       const newSpan = document.createElement('span');

       newCard.classList.add('card');
       newHeadline.classList.add('headline');
       newAuthor.classList.add('author');
       newImgCont.classList.add('img-container');

       newHeadline.textContent = object.headline;
       newImg.src = object.authorPhoto;
       newSpan.textContent = object.authorName;

       newImgCont.appendChild(newImg);
       newAuthor.appendChild(newImgCont);
       newAuthor.appendChild(newSpan);
       newCard.appendChild(newHeadline);
       newCard.appendChild(newAuthor);

       return newCard;
   }
