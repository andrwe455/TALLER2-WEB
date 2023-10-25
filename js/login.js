const lform =document.getElementById("loginform");
lform.addEventListener("submit", async function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    // Obtener los valores de los campos de entrada
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Crear un objeto con los datos del formulario
    var formData = {
        user: username,
        password: password
    };
    let resp;
    
      fetch('http://localhost:3000/conectar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(res => res.json()).then(data => {
            resp = data;
            alert("Usuario loggeado correctamente");
        }).catch(err => {
            console.log(err);
        });
    console.log(resp);
    return resp; // Enviar la solicitud POST al servidor
});