var currentPosition = 0;

var prevImage = function () {
   currentPosition = currentPosition + 500;
   document.getElementById('imageSlider2').style.transform ='translateX(' + currentPosition + 'px)';
}         
                 
var nextImage = function () {
    currentPosition = currentPosition - 500;        
    document.getElementById('imageSlider2').style.transform ='translateX(' + currentPosition + 'px)';
}                