// console.log(document.body);

// target an element via it's id
const todoList = document.getElementById('todo-list');

// console.log(todoList);
// returns html collection
const allListItems = document.getElementsByTagName('li');

// console.log(allListItems[2]);

// you can turn an html collection into an array
// [...allListItems]  -  Array.from(allListItems)

const todoListItems = todoList.getElementsByTagName('li');

// todoListItems[2].innerText = 'solve katas';

// console.log(todoListItems[2].innerText);

// console.log(todoListItems);

// turn all the content of the todo list items to uppercase

// for (let i = 0; i < todoListItems.length; i++) {
//     todoListItems[i].innerText = todoListItems[i].innerText.toUpperCase();
// }

for (const item of todoListItems) {
    item.innerText = item.innerText.toUpperCase();
}
// targets all elements where the class has `todo-container`
const container = document.getElementsByClassName('todo-container');
// console.log(container[0]);

// selects all elements using a css selector
// const container = document.querySelectorAll('.todo-container');
// console.log(container);

// selects the first element that matches a querySelectorAll
const firstItem = document.querySelector('#todo-list li');
// console.log(li);
// change style of element
// firstItem.style.backgroundColor = 'red';
// firstItem.style['background-color'] = 'red';

// firstItem.className = 'checked';
// firstItem.classList.add('checked');

// firstItem.classList.remove('b');

// firstItem.classList.toggle('a');
// firstItem.classList.toggle('a');

// set Attributes
firstItem.setAttribute('id', 'first-item');
// const attribute = firstItem.getAttribute('id');
// console.log(attribute);
// firstItem.removeAttribute('id');

// we can fix the broken image
// document.querySelector('img').setAttribute(
//     'src',
//     'https://images.unsplash.com/photo-1564258646808-fac8e26166a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'
// );


// we wanna add a heading
// we create it
// // const todoList = document.getElementById('todo-list');
const heading = document.createElement('h1');
heading.innerText = 'My Todo List';
const parent = document.querySelector('.todo-container');
parent.insertBefore(heading, todoList);

// let's use javascript to remove the p tag
const paragraph = document.getElementsByTagName('p')[0];
parent.removeChild(paragraph);

const newListItem = document.createElement('li');

// newListItem.innerText = 'watch westworld';
// you can also add html:
newListItem.innerHTML = 'watch <strong>westworld</strong>';
todoList.appendChild(newListItem);

// i can add an event listener directly in the html
// onclick="trigger()"
// function trigger() {
//     console.log('click');
// }

document.getElementById('add-todo').onclick = addTodo;

function addTodo() {
    console.log('click');
}