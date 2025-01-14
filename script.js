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

if (
  localStorage.getItem("SavedTasks") !== "" &&
  localStorage.getItem("SavedTasks") !== null
) {
  taskarr = JSON.parse(localStorage.getItem("SavedTasks"));
} else {
  console.log("local was empty");
}

saveBtn.addEventListener("click", () => {
  console.log(input.value);
  taskarr.push(input.value);
  savedarr();
  taskCardCreate();
});

const savedarr = () => {
  localStorage.setItem("SavedTasks", JSON.stringify(taskarr));
  console.log(taskarr);
};

