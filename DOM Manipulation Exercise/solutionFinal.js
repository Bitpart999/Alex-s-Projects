const task1 = document.getElementById('task1'); // Task 1
task1.innerText = 'I have changed the content using innerText'; // Task 1

const task2 = document.getElementById('task2'); // Task 2
task2.innerHTML = task2.innerHTML + "<button>Submit</button>"; // Task 2

document.body.style.backgroundColor = "#232323";    // Task 3 

const items = document.querySelectorAll('.item');
items.forEach(item => {
  item.style.border = "2px solid black";            // Task 4 
})

const task5 = document.getElementById('task5');
task5.setAttribute('href', 'https://www.springboard.com/'); // Task 5 

const task6 = document.getElementById('task6');   // Task 6 
task6.value = "DOM Master";

const task7 = document.getElementById('task7');
task7.classList.add('new-class');                 //Task 7

const task8 = document.getElementById('task8');
task8.innerHTML += '<button>New Button</button>';   // Task 8

const task9 = document.getElementById('task9');     // Task 9
task9.remove();
