/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function createCarosel(){

  let currentIndex = 1
  const newCarousel = document.createElement('div');
  const newLeftButton = document.createElement('div');
  const newRightButton = document.createElement('div');
  const newImg1 = document.createElement('img');
  const newImg2 = document.createElement('img');
  const newImg3 = document.createElement('img');
  const newImg4 = document.createElement('img');

  newCarousel.classList.add('carousel');
  newLeftButton.classList.add('left-button');
  newRightButton.classList.add('right-button');

  newImg1.src = './assets/carousel/mountains.jpeg';
  newImg2.src = './assets/carousel/computer.jpeg';
  newImg3.src = './assets/carousel/trees.jpeg';
  newImg4.src = './assets/carousel/turntable.jpeg';
  newImg1.style.display = 'block';

  function imgChange(){
    if(currentIndex === 1){
      newImg1.style.display = 'block';
      newImg2.style.display = 'none';
      newImg3.style.display = 'none';
      newImg4.style.display = 'none';
    }else if(currentIndex === 2){
      newImg1.style.display = 'none';
      newImg2.style.display = 'block';
      newImg3.style.display = 'none';
      newImg4.style.display = 'none';
    }else if(currentIndex === 3){
      newImg1.style.display = 'none';
      newImg2.style.display = 'none';
      newImg3.style.display = 'block';
      newImg4.style.display = 'none';
    }else if(currentIndex === 4){
      newImg1.style.display = 'none';
      newImg2.style.display = 'none';
      newImg3.style.display = 'none';
      newImg4.style.display = 'block';
    }
  }


  newLeftButton.addEventListener('click',(e)=>{
    if(currentIndex===1){
      currentIndex = 4;
    }else {
      currentIndex = currentIndex -1;
    }
    imgChange()
  });

  newRightButton.addEventListener('click',(e)=>{
    if(currentIndex===4){
      currentIndex = 1;
    }else {
      currentIndex = currentIndex +1;
    }
    imgChange()
  });

  newCarousel.appendChild(newLeftButton);
  newCarousel.appendChild(newImg1);
  newCarousel.appendChild(newImg2);
  newCarousel.appendChild(newImg3);
  newCarousel.appendChild(newImg4);
  newCarousel.appendChild(newRightButton);

  return newCarousel;
}

const carouselCont = document.querySelector('.carousel-container');
carouselCont.appendChild(createCarosel());