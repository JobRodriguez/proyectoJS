let buscador = document.getElementById("search");
buscador.addEventListener("keyup", function () {
  let cont = 0;
  Array.from(document.getElementsByTagName("p")).forEach(elemen => {
    const htmlOriginal = elemen.innerText;
    if (elemen.innerText.includes(buscador.value) && buscador.value != '') {
      htmlNuevo = htmlOriginal.replaceAll(buscador.value, '<span style="background-color: yellow;">' + buscador.value + '</span>')
      elemen.innerHTML = htmlNuevo;
      cont = cont + 1;
    }else{
      elemen.innerHTML = elemen.textContent;

    }
  })
  Array.from(document.getElementsByTagName("h5")).forEach(elemen => {
    const htmlOriginal = elemen.innerText;
    if (elemen.innerText.includes(buscador.value) && buscador.value != '') {
      htmlNuevo = htmlOriginal.replaceAll(buscador.value, '<span style="background-color: yellow;">' + buscador.value + '</span>')
      elemen.innerHTML = htmlNuevo;
      cont = cont + 1;
    }else{
      elemen.innerHTML = elemen.textContent;

    }
  })
  Array.from(document.getElementsByTagName("li")).forEach(elemen => {
    const htmlOriginal = elemen.innerText;
    if (elemen.innerText.includes(buscador.value) && buscador.value != '') {
      htmlNuevo = htmlOriginal.replaceAll(buscador.value, '<span style="background-color: yellow;">' + buscador.value + '</span>')
      elemen.innerHTML = htmlNuevo;
      cont = cont + 1;
    }else{
      elemen.innerHTML = elemen.textContent;

    }
  })
})