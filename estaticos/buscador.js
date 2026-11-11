// Buscador de jugadores: filtra la lista ya presente en la página (funciona sin servidor).
// Ignora acentos y mayúsculas; todas las palabras escritas deben aparecer en el nombre.
(function () {
  var input = document.getElementById("buscar");
  var lista = document.getElementById("jugadores");
  var contador = document.getElementById("contador");
  var vacio = document.getElementById("vacio");
  if (!input || !lista) return;
  var items = Array.prototype.slice.call(lista.children);

  function normalizar(s) {
    return s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  }

  function filtrar() {
    var palabras = normalizar(input.value).split(/\s+/).filter(Boolean);
    var visibles = 0;
    items.forEach(function (li) {
      var clave = li.getAttribute("data-clave");
      var ok = palabras.every(function (p) { return clave.indexOf(p) !== -1; });
      li.hidden = !ok;
      if (ok) visibles++;
    });
    contador.textContent = visibles + (visibles === 1 ? " jugador" : " jugadores");
    vacio.hidden = visibles !== 0;
  }

  input.addEventListener("input", filtrar);
  var q = new URLSearchParams(location.search).get("q");
  if (q) { input.value = q; }
  filtrar();
})();
