document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Basic validation example
    if (username === 'testuser' && password === 'password123') {
      alert('Login successful!');
      // Redirect or further actions can be added here
    } else {
      alert('Invalid credentials. Try again.');
    }
  });
  