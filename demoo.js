
const box = document.getElementById("box");

box.style.color = "white";
box.style.backgroundColor = "blue";
box.style.width = "200px";
box.style.padding = "10px";


box.style.cssText = "color: white; background-color: green; border-radius: 8px;";


box.classList.add("active");
box.classList.remove("hidden");
box.classList.toggle("dark-mode");


document.getElementById("myButton").addEventListener("click", () => {
  box.style.backgroundColor = "red";
});