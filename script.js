async function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("errorMessage");

    errorMessage.textContent = ''; // Clear previous error messages

    // Simulate an authentication API call to validate email and password
    try {
        let response = await authenticateUser(email, password);
        if (response.success) {
            alert("Login successful!");
            return true; // Allow form submission
        } else {
            errorMessage.textContent = response.message;
            return false; // Prevent form submission
        }
    } catch (error) {
        errorMessage.textContent = "Error authenticating user.";
        return false;
    }
}

// Simulating an API request to check email and password
async function authenticateUser(email, password) {
    // Mock data for checking
    const validCredentials = {
        email: "finefabricsenterprises@gmail.com",
        password: "finefabrics@2024"
    };

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (email === validCredentials.email && password === validCredentials.password) {
        return { success: true };
    } else {
        return { success: false, message: "Invalid email or password." };
    }
}