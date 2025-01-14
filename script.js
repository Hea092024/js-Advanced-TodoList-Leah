const saveBtn = document.querySelector("#mainButton");
const input = document.querySelector("#mainInput");
const checkerBox = document.querySelector("#visInvis");


checkerBox.checked = localStorage.getItem("Hidden");


checkerBox.addEventListener("click", () => {
  console.log (checkerBox.checked)
   localStorage.setItem("Hidden", checkerBox.checked) 
});

saveBtn.addEventListener("click", () => {
  localStorage.setItem("To do list", input.value);
});