/*Lesson 2 */

/* VARIABLES */

/* variable to hold your name*/
const myName = 'Celine Mafigu';

/*place the variable into the HTML file.*/
document.querySelector('#name').textContent = myName;

/* variable to hold the current year*/
const currentYear = new Date().getFullYear();

/* place the current year variable into the HTML file.*/
document.querySelector('#year').textContent = currentYear;

/*variable to hold the name of your picture*/
const profilePicture = 'images/myphoto.jpg'

/*place the value of the picture variable into the HTML file */
document.querySelector('img').setAttribute('src', profilePicture);
document.querySelector('img').setAttribute('width', 300);



/* Add ARRAYS */

/* my favorite food */
let favoriteFood = ['sadza', 'vegetables', 'Chicken', 'beef'];
document.querySelector('#food').textContent = favoriteFood;

/* add another favorite food */
let anotherFavoriteFood = 'pizza';
favoriteFood.push(anotherFavoriteFood);

/*repeat Step */ 
document.querySelector('#food').textContent = favoriteFood;

/* remove the first element on the list */
favoriteFood.shift();

/* repeat Step */
document.querySelector('#food').textContent = favoriteFood;

/* remove last element on the list */
favoriteFood.pop();

/* repeat Step */
document.querySelector('#food').textContent = favoriteFood;

