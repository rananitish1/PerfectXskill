// Simulate a database using localStorage
const usersKey = 'perfectXskillsUsers';

// Function to get users from localStorage
function getUsers() {
  const users = localStorage.getItem(usersKey);
  return users ? JSON.parse(users) : [];
}

// Login Form Submission
if (document.getElementById('loginForm')) {
  document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    const users = getUsers();

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
      alert('Login successful!');
      // Save current user (optional)
      localStorage.setItem('currentUser', JSON.stringify(user));
      // Redirect to home page
      window.location.href = 'index.html';
    } else {
      alert('Invalid username or password.');
    }
  });
}
