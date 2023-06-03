// Selecting elements from the DOM
const title = document.getElementById('title'); // Selecting the element with ID 'title'
const nameField = document.getElementById('nameField'); // Selecting the element with ID 'nameField'
const signinBtn = document.getElementById('signinBtn'); // Selecting the element with ID 'signinBtn'
const signupBtn = document.getElementById('signupBtn'); // Selecting the element with ID 'signupBtn'

// Function to execute when signup button is clicked
signupBtn.onclick = function(){
    // Changing the title element's innerHTML
    title.innerHTML = 'Sign Up';
    // Setting the display property of nameField element to block
    nameField.style.display = 'block';
}

// Function to execute when signin button is clicked
signinBtn.onclick = function(){
    // Changing the title element's innerHTML
    title.innerHTML = 'Login';
    // Setting the display property of nameField element to none
    nameField.style.display = 'none';
}
