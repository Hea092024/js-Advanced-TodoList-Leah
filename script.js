const saveBtn = document.querySelector("#mainButton");
const input = document.querySelector("#mainInput");
const checkerBox = document.querySelector("#visInvis");


checkerBox.checked = localStorage.getItem("Hidden");
let taskarr = [];

checkerBox.addEventListener("click", () => {
  console.log (checkerBox.checked)
   localStorage.setItem("Hidden", checkerBox.checked) 
});

saveBtn.addEventListener("click", () => {
    console.log(input.value);
    taskarr.push(input.value);
    console.log(taskarr);
});