let icon = document.getElementById("menu-icon");
let box = document.getElementById("box");

icon.onclick = function () {
  icon.classList.toggle("active");
  box.classList.toggle("active");
  // alert("hii");
};

document.onclick = function (e) {
  if (!icon.contains(e.target) && !box.contains(e.target)) {
    icon.classList.remove("active");
    box.classList.remove("active");
  }
};
