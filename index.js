function loguear() {
  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("clave").value.trim();
  if (username === "" || password === "") {
      alert("Por favor completa ambos campos.");
      return; 
  }
  if (username === "Rodolfo" && password === "123456") {
      alert("Usuario y contraseña válidos");
  } else {
      alert("Error: Usuario o contraseña inválidos");
  }
}









