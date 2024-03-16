/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2: Place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').textContent = myName;*/

const myName = " Celine Mafigu";
const currentYear = new Date().getFullYear();
const myPicture = "images/photo.jpg";


/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document-querySelect("#year");
const imageElement = document-querySelect("img");


/* Step 4 - Adding Content */
nameElement.innerHTML = "<stong>${fullName}</stong>";
Element.textcontent = "currentYear";
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt","profilePictureOf ${fullName}");
document.querySelector('img').setAttribute('src', myPicture);




/* Step 5 - Array */
const favoritefood = ["african Food", "sushi","grean salad", "chicken niddles"];
foodElement.innerHTML += "<brv>${favoritefood</br>";
document.querySelector('#food').textContent = favoriteFoods;
let newfavoritefood = "butter chicken and riSce";
favoritefood.push(new favoritefood);


foodElement.innerHTML += "<br>${favotitefood}</br>";

//Remove first elemeent
favoritefood.shift(0);
foodElement.innerHTML += "<br>${favotitefood}</br>";

//Remove last element
favoritefood.pop();
foodElement.innerHTML += "<br>${favotitefood}</br>";


