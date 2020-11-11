var currentPosition = 0;

// var prevImage = function () {
//     currentPosition = currentPosition + 500;
//     document.getElementById('imageSlider2').style.transform ='translateX(' + currentPosition + 'px)';
//  }         
                 
function nextImage() {
     if(currentPosition > 1000){
          console.log(currentPosition);
          currentPosition +=500;
          document.getElementById('imageSlider2').style.transform = `translate(${currentPosition}px)`;
     }
    
}             

function prevImage() {
     if(currentPosition > -1000) {
          console.log(currentPosition);
          currentPosition -= 500;
          document.getElementById('imageSlider2').style.transform = `translate(${currentPosition}px)`;
     }

// var nextImage = function(currentPosition){
//     for(let currentPosition = 0; currentPosition <= -2000; currentPosition = currentPosition - 500){
//         document.getElementById('imageSlider2').style.transform ='translateX(' + currentPosition + 'px)';
//     }
// }
// Add some conditional logic to your javascript code to prevent users from translating the imageSlider too far in either direction