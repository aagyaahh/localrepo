function showReservationForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('reservationForm').style.display = 'block';
}
// Function to open the sign-up modal
function openSignupModal() {
    document.getElementById('signupModal').style.display = 'block';
}

// Function to close the sign-up modal
function closeSignupModal() {
    document.getElementById('signupModal').style.display = 'none';
}

// Function to submit the sign-up form (you can customize this function as needed)
function submitSignupForm() {
    // Add your form submission logic here

    // For now, simply close the modal
    closeSignupModal();
}

function createAccount() {
    var nameInput = document.getElementById('name');
    var phoneInput = document.getElementById('phone');

    // Validation
    if (nameInput.checkValidity() && phoneInput.checkValidity()) {
        // Perform form validation and account creation logic here
        // For simplicity, let's just display an alert for now
        alert('Account created successfully!');
    } else {
        // If validation fails, display an error message
        alert('Please enter valid information.');
    }
}