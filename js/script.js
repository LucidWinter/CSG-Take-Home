// Clicking on a the left button opens a modal
// Modal has text that says "Clicked Left Image" (not pictured, use any modal design you'd like)

// Clicking on the right button swaps the background from the two side by side images, 
// to a full-screen silent background video that auto plays. (Not provided, video can be any you prefer from youtube, 
//     vimeo, or a locally embedded one.) 

const leftButton = document.querySelector('#left-btn');
const rightButton = document.querySelector('#right-btn');
const modal = document.querySelector('.modal-container');
const closeModal = document.querySelector('.close');

const backgroundVideo = document.querySelector('#video-container');

function showModal(){
     modal.style.display = 'block';
}

function hideModal(){
    modal.style.display = 'none';
}

function videoPlayer(){
    
}

leftButton.addEventListener('click', showModal);
rightButton.addEventListener('click', videoPlayer);

closeModal.addEventListener('click', hideModal);
window.onclick = function(e){
    if(e.target == modal){
      modal.style.display = "none"
    }
  }