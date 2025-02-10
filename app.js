// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();
  const lista = document.getElementById("listaAmigos");

  if (nombre === "" || !isNaN(nombre)) {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  if (amigos.includes(nombre)) {
    alert("Este nombre ya ha sido agregado.");
    return;
  }

  amigos.push(nombre);

  const li = document.createElement("li");
  li.textContent = nombre;
  lista.appendChild(li);

  input.value = "";
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Debes ingresar al menos dos nombres para sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li> ${amigos[indiceAleatorio]} es el amigo secreto! </li>`;

  amigos.length = 0;
  document.getElementById("listaAmigos").innerHTML = "";
}
