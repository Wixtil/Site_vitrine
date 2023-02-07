window.onscroll = function () {
  var nav = document.querySelector("header");
  var sticky = nav.offsetTop;
  if (window.pageYOffset > sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};
