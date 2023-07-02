const count = document.querySelector(".count");
const add = document.querySelector(".add");

const subtract = document.querySelector(".subtract");

const reset_count = document.querySelector(".reset");

add.addEventListener("click", () => {
  count.innerHTML++;
  changecolor();
});

subtract.addEventListener("click", () => {
  count.innerHTML--;
  changecolor();
});

reset_count.addEventListener("click", () => {
  count.innerHTML = 0;
  changecolor();
});

function changecolor() {
  count.style.color =
    count.innerHTML < 0 ? "blue" : count.innerHTML > 0 ? "black" : "grey";
}
