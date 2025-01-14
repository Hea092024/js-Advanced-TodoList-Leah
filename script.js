const saveBtn = document.querySelector("#mainBtn");
const input = document.querySelector("#mainInput");
const checkVis = document.querySelector("#visInvis");
const tasksCont = document.querySelector("#taskCards");

let taskarr = [];
checkVis.checked = localStorage.getItem("Hidden");

checkerBox.addEventListener("click", () => {
  console.log(checkerBox.checked);
  localStorage.setItem("Hidden", checkerBox.checked);
});

saveBtn.addEventListener("click", () => {
  console.log(input.value);
  taskarr.push(input.value);
  console.log(taskarr);
});
