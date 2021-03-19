(function () {
  window.onscroll = function () {
    myFunction();
  };
  var navbar = document.getElementById("navbar");
  var scroll = navbar.offsetTop;
  function myFunction() {
    if (window.pageYOffset > scroll) {
      navbar.classList.add("nav-fixed");
    } else {
      navbar.classList.remove("nav-fixed");
    }
  }
})();
