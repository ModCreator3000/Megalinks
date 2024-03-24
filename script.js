var links = document.querySelectorAll('a');
var adsLabels = document.querySelectorAll(".ads_label");

adsLabels.forEach(function(element) {
  element.addEventListener("click", function() {
    console.log("Anúncio clicado, liberado!");


    links.forEach(function(link) {
      link.style.display = 'block';
    });
  });
});