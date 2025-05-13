const usersKey = 'perfectXskillsUsers';

// Function to get users from localStorage
function getUsers() {
  const users = localStorage.getItem(usersKey);
  return users ? JSON.parse(users) : [];
}

// Function to save a new user
function saveUser(user) {
  const users = getUsers();
  users.push(user);
  localStorage.setItem(usersKey, JSON.stringify(users));
}

// Sign Up Form Submission
if (document.getElementById('signupForm')) {
  document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const phone = document.getElementById('phone').value;

    const users = getUsers();
    const userExists = users.some(user => user.username === username);

    if (userExists) {
      alert('Username already exists. Please choose a different one.');
      return;
    }

    const newUser = {
      username,
      password,
      age,
      gender,
      phone
    };

    saveUser(newUser);
    alert('Signup successful! Redirecting to login page...');
    window.location.href = 'login.html';
  });
}
