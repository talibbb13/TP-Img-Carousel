var index = 0;

imgShowCase(index);

function imgShowCase(i) {
  index += i;

  var images = document.getElementsByClassName("img");

  var dots = document.getElementsByClassName("dot");

  for (var j = 0; j < images.length; j++) {
    images[j].style.display = "none";
  }

  for (var j = 0; j < dots.length; j++) {
    dots[j].className = dots[j].className.replace("active", "");
  }

  if (index > images.length - 1) {
    index = 0;
  }

  if (index < 0) {
    index = images.length - 1;
  }

  images[index].style.display = "block";
  dots[index].className += " active";
}



// •Grd bg
// •img slide