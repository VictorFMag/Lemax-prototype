let hero_btn = document.getElementById("btn_hero_saibaMais");

function findPos(obj) {
  var curtop = 0;
  if (obj.offsetParent) {
    do {
      curtop += obj.offsetTop;
    } while (obj = obj.offsetParent);
    return [curtop - 100];
  }
}

hero_btn.addEventListener('click', function () {
  window.scroll(0, findPos(document.getElementById("contato")));
});


const cardID = document.getElementById("cards");

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3 // 30% do elemento visível
};

//fadein card
const observer1 = new IntersectionObserver(function (entries, observer1) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      cardID.style.opacity = "1";
      cardID.style.animation = "fadein 1s ease";
    }
  });
}, options);
observer1.observe(cardID);