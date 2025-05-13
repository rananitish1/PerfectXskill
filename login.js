const usersKey = 'perfectXskillsUsers';

function getUsers() {
  const users = localStorage.getItem(usersKey);
  return users ? JSON.parse(users) : [];
}

document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;

  const users = getUsers();
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    alert('Login successful!');
    localStorage.setItem('currentUser', JSON.stringify(user));
    window.location.href = 'index.html';
  } else {
    alert('Invalid username or password.');
  }
});
