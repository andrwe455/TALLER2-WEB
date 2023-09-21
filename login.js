document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginform');
  const loginStatus = document.getElementById('login-status');

  loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  });
});