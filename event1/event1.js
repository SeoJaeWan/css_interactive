const ballElem = document.querySelector(".ball");

window.addEventListener("click", function (e) {
  ballElem.style.transform = `translate(${e.clientX - 15}px, ${
    e.clientY - 15
  }px)`;
});

ballElem.addEventListener("transitionend", function (e) {
  ballElem.classList.add("end");
  console.log(e);
});
