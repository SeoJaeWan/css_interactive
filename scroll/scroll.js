(function () {
  const outputEle = document.querySelector(".output");
  const ilbuniEle = document.querySelector(".ilbuni");

  function showValue() {
    return ilbuniEle.getBoundingClientRect().top;
  }

  window.addEventListener("scroll", function (e) {
    const posY = showValue();

    outputEle.innerHTML = posY;

    if (posY < window.innerHeight / 4) {
      ilbuniEle.classList.add("zoom");
    } else {
      ilbuniEle.classList.remove("zoom");
    }
  });
})();
