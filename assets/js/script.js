window.onload = function () {
  document.querySelector(".menuMobile").addEventListener("click", function () {
    if (document.querySelector(".menu nav ul").style.display == "flex") {
      document.querySelector(".menu nav ul").style.display = "none";
    } else {
      document.querySelector(".menu nav ul").style.display = "flex";
    }
  });
};

window.addEventListener('resize', function () {
    var largura = window.innerWidth;

    if (largura > 600)
       document.querySelector(".menu nav ul").removeAttribute('style');
    });
