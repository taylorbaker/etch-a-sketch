const display = document.getElementById('display');
const input = document.getElementById('input');

// get matrix dims from user with input
let DIM = parseInt(input.value, 10); // base=10

// helper function to create a row of divs
function createRow(count) {
  const newRow = document.createElement('div');
  newRow.classList.add('row');
  for (let i = 0; i < count; i++) {
    const node = document.createElement('div');
    node.classList.add('node');

    node.addEventListener('mouseover', () => {
      // set background to random color
      node.style.backgroundColor = 'hsl(' + random(359) + ',100%,50%)';
    });

    newRow.appendChild(node);
  }
  return newRow;
}

// create desired number of rows
function createMatrix(count) {
  for (let i = 0; i < count; i++) {
    let newRow = createRow(count);
    display.appendChild(newRow);
  }
}

// button logic
const btn = document.getElementById('button');
btn.addEventListener('click', () => {
  removeAllChildNodes(display);

  // cap DIM at 100
  if (input.value >= 100) {
    DIM = 100;
  } else {
    DIM = parseInt(input.value, 10);
  }

  createMatrix(DIM);
});

// function to empty parent node
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

// return random number between 0 and int
function random(i) {
  return Math.floor(Math.random() * i);
}
