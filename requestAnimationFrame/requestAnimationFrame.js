let timeId;

function sample() {
  console.log("반복");

  timeId = requestAnimationFrame(sample);
}

sample();
