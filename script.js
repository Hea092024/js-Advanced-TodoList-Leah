const saveBtn = document.querySelector("#mainBtn");
const input = document.querySelector("#mainInput");
const checkVis = document.querySelector("#visInvis");
const tasksCont = document.querySelector("#taskCards");

let taskarr = [];
checkVis.checked = localStorage.getItem("Hidden");

checkVis.addEventListener("click", () => {
  console.log(checkVis.checked);
  localStorage.setItem("Hidden", checkVis.checked);
});

saveBtn.addEventListener("click", () => {
  console.log(input.value);
  taskarr.push(input.value);
  console.log(taskarr);
});
