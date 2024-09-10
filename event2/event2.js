const ballElem = document.querySelector(".ball");

ballElem.addEventListener("animationend", function (e) {
  ballElem.classList.add("end");
});

ballElem.addEventListener("animationiteration", function (e) {
  console.log("반복중");
});
