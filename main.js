const range = document.getElementById("dimension");
const create = document.getElementById("create");
create.addEventListener("click", creategrid);
//function to create a NxN grid consist of N^2 cells.
function creategrid() {
  create.disabled = true;
  let dimension = range.value;
  let count = 0;
  let grid = document.getElementById("grid-container");
  for (let row = 0; row < dimension; row++) {
    for (let col = 0; col < dimension; col++) {
      let cell = document.createElement("div");
      ++count;
      cell.classList.add("cell");
      cell.setAttribute("id", `${count}`);
      let dim = 498 / dimension;
      cell.style.width = `${dim}px`;
      cell.style.height = `${dim}px`;
      grid.appendChild(cell);
    }
  }
  //Adding the effect if hover hat change color of cell.
  for (let i = 1; i <= dimension ** 2; i++) {
    const currentCell = document.getElementById(i);
    currentCell.addEventListener("mouseover", () => {
      currentCell.style.backgroundColor = "red";
    });
  }
  // An Event to clear the cell background color.
  const clear = document.getElementById("clear");
  clear.addEventListener("click", () => {
    for (let i = 1; i <= dimension ** 2; i++) {
      const currentCell = document.getElementById(i);
      currentCell.style.backgroundColor = "white";
    }
  });
}

///////////////////////////////////////////////////////////
const reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  create.disabled = false;
  var e = document.querySelector("#grid-container");
  var child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }
});
///////////////////////////////////////////////////////////
