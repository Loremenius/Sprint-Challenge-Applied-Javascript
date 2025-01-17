// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(function (response) {
    // handle success
     response.data.topics.forEach(element => {
         const newDiv = document.createElement('div');
         newDiv.classList.add('tab');
         newDiv.textContent = element;
         const topics = document.querySelector('.topics');
         topics.appendChild(newDiv);
     });
   })
   .catch(function (error) {
    // handle error
     console.log(error);
   });


