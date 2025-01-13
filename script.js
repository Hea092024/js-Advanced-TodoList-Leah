const saveBtn = document.querySelector("#mainButton");
const checkerBox = document.querySelector("#visInvis");





checkerBox.addEventListener("click", () => {
  console.log (checkerBox.checked)
   localStorage.setItem("Hidden", checkerBox.checked) 
})