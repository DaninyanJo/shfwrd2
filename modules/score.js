// export  {getPoints, addPoint,clearPoints}
export function getPoints() {
  let points = JSON.parse(localStorage.getItem("user"));
  score.textContent = `Your score: ${points.score}`;
}
export function addPoint() {
  let points = JSON.parse(localStorage.getItem("user"));
  points.score += 1;
  localStorage.setItem("user", JSON.stringify(points));

  getPoints();
}
export function clearPoints() {
  let score = {
    score: 0,
  };
  localStorage.setItem("user", JSON.stringify(score));
  getPoints();
}
