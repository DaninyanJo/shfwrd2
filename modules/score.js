(function checkPoints() {
  if (localStorage.getItem("user") == null) {
    clearPoints();
  } else {
    getPoints();
  }
})();
function getPoints() {
  let points = JSON.parse(localStorage.getItem("user"));
  score.textContent = `Your score: ${points.score}`;
}
function addPoint() {
  let points = JSON.parse(localStorage.getItem("user"));
  points.score += 1;
  localStorage.setItem("user", JSON.stringify(points));

  getPoints();
}
function clearPoints() {
  let score = {
    score: 0,
  };
  localStorage.setItem("user", JSON.stringify(score));
  getPoints();
}

