
function login()
{
  let username= "prueba";
  let password;
  username = document.getElementById('username').value;
  password = document.getElementById('password').value;
  alert("bienvenido "+ username);
  
  return {username,password};
}