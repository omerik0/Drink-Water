const waterLevel = document.querySelector(".water");
const bottle = document.querySelector(".bottle");
const content = document.querySelector(".content");
const liter = document.querySelector(".liter");

const glassArr = Array.from({ length: 8 }, (el, i) => {
  return (el = 250 * (i + 1));
});
let glassElArr = [];
let curAmount = 0;
console.log(glassArr);
glassArr.forEach((glass, i) => {
  const glassEl = document.createElement("span");
  glassElArr.push(glassEl);

  glassEl.classList.add("glass");
  glassEl.innerHTML = ` <p>250<br />ml</p>`;
  document.querySelector(".glasses").appendChild(glassEl);
});

glassElArr.forEach((glass, idx) =>
  glass.addEventListener("click", () => markGlass(idx))
);

function markGlass(curI) {
  if (curI === 7 && glassElArr[curI].classList.contains("full")) curI--;
  else if (
    glassElArr[curI].classList.contains("full") &&
    !glassElArr[curI < 7 && curI + 1].classList.contains("full")
  ) {
    console.log(curI);
    curI--;
  }

  glassElArr.forEach((glass, idx2) => {
    curI >= idx2 ? glass.classList.add("full") : glass.classList.remove("full");
  });

  addWater(curI);
}

let level = 100;
function addWater(curI) {
  const prec = (curI + 1) * (100 / glassElArr.length);
  waterLevel.style.height = `${prec}%`;
  waterLevel.innerHTML = prec === 0 ? "" : `<p>${prec}%</p>`;
  level = level - prec;
  content.style.height = `${level}%`;
  content.style.display = level === 0 ? "none" : "flex";
  liter.innerHTML = `<p>${2 - (2 * (curI + 1)) / glassElArr.length}L</p>`;
  level = 100;
}
