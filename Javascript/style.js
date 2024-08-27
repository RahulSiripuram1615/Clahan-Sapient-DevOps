document.getElementById('orderForm').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const orderDetails = document.getElementById('orderDetails').value;

    if (name.trim() === '' || email.trim() === '' || phone.trim() === '' || address.trim() === '' || orderDetails.trim() === '') {
        alert('Please fill in all fields.');
        event.preventDefault(); // Prevent form submission
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        event.preventDefault(); // Prevent form submission
    }
});
