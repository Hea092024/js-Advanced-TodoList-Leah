const saveBtn = document.querySelector("#mainBtn");
const input = document.querySelector("#mainInput");
const checkVis = document.querySelector("#visInvis");
const tasksCont = document.querySelector("#taskCards");
const clearBtn = document.querySelector("#clearBtn");

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

clearBtn.addEventListener("click", () => {
  taskarr = [];
  savedarr();
  taskCardCreate();
});

const savedarr = () => {
  localStorage.setItem("SavedTasks", JSON.stringify(taskarr));
  console.log(taskarr);
};

function taskCardCreate() {
    tasksCont.textContent = ""
    taskarr.forEach((e) => {
       const div = document.createElement("div")
       div.className = "taskBoxes"
       const p = document.createElement("p")
       const txt = document.createTextNode(e)
       p.append(txt)
       div.appendChild(p)
       tasksCont.append(div)
    })
}

taskCardCreate()