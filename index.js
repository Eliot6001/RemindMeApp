function toggleDotFill(item) {
  const parent = item.parentNode;
  console.log(item.parentNode);
  item.children[0].children[0].classList.toggle("filled");
  parent.classList.add("removing");
  console.log(parent, "clone");
  let clone = parent.cloneNode(true);
  console.log(parent, "clone2");

  completedLinks.push(clone);

  console.log("Completed links", completedLinks);
  setTimeout(() => {
    parent.remove();
  }, 200);
} /*a function responsible for removing an Element from Uncompleted list*/
function toggleDropdown() {
  var dropdownMenu = document.getElementById("dropdown-menu");
  var isExpanded = dropdownMenu.getAttribute("aria-expanded") === "true";

  if (isExpanded) {
    dropdownMenu.setAttribute("aria-expanded", "false");
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.setAttribute("aria-expanded", "true");
    dropdownMenu.style.display = "block";
  }
}
/* NavBar hamburger icon DropDown functionality */

var completedLinks = [];

const completedBtn = document.getElementById("completedBtn");

completedBtn.addEventListener("click", function () {
  var parent = document.getElementById("reminders");
  completedLinks.forEach(function (item) {
    item.classList.remove("removing");
    parent.appendChild(item);
  });
});

/* Gives Functionality to Completed Button */

(() => {
  let parent = document.getElementById("reminders").children;
  let parentValues = Object.values(parent);
  console.log(parentValues);

  var currentReminders = parentValues.filter(
    (elem) => elem.classList.contains("removing") == false
  );
})();

