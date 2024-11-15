function showSignUp() {
    document.getElementById('signupForm').classList.remove('hidden');
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('signupTab').classList.add('active');
    document.getElementById('loginTab').classList.remove('active');
}

function showLogin() {
    document.getElementById('signupForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('loginTab').classList.add('active');
    document.getElementById('signupTab').classList.remove('active');
}

// Event listener for form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission and page refresh

    // Get email and password values from the form
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if email ends with "@gmail.com"
    if (email.endsWith('@gmail.com')) {
        // If valid, redirect to the main page
        // You can replace 'product/product-list.html' with your actual main page URL
        window.location.href = 'index.html';  
    } else {
        // If invalid, show an error message
        alert('Please enter a valid Gmail email address.');
    }
});

