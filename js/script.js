// Clicking on a the left button opens a modal
// Modal has text that says "Clicked Left Image" (not pictured, use any modal design you'd like)

// Clicking on the right button swaps the background from the two side by side images, 
// to a full-screen silent background video that auto plays. (Not provided, video can be any you prefer from youtube, 
//     vimeo, or a locally embedded one.) 

const leftButton = document.querySelector('#left-btn');
const rightButton = document.querySelector('#right-btn');

const modal = document.querySelector('.modal-container');
const closeModal = document.querySelector('.close');

const backgroundVideo = document.querySelector('.backVideo');

function showModal(){
  console.log('top/left click');
     modal.style.display = 'block';
}

function hideModal(){
    modal.style.display = 'none';
}

function videoPlayer(){
  console.log('bot/right click');
    backgroundVideo.style.display = 'block';
}

leftButton.addEventListener('click', showModal);
closeModal.addEventListener('click', hideModal);
rightButton.addEventListener('click', videoPlayer);

window.onclick = function(e){
    if(e.target == modal){
      modal.style.display = "none"
    }
  }