let res;
let not_found_comp = `
  <div id="msjB">
    <h2 class="N_msj"> Ningún mensaje fue encontrado </h2>
    <p class="txt"> Ingresa el texto que desees encriptar o desencriptar. </p>
  </div>`;

const encriptar = () => {
  let text = document.querySelector("#textD").value.toLowerCase();
  let mD = { a: "ai", e: "enter", i: "imes", o: "ober", u: "ufat" };
  let acentos = {á:'a' ,é:'e', í:'i', ó:'o', ú:'u', ü : "u", ñ : "n"};
  
  let a = text.replace(/(?:á|é|í|ó|ú|ü|ñ)/g, (m) => acentos[m]);

  if (text != "")  {
    res = [...a]
      .map((cod) =>
        cod
          .split("")
          .map((cod) => (mD[cod] == undefined ? cod : mD[cod]))
          .join(" "))
          .join("");

    document.querySelector("#textD").value = "";
    document.querySelector("#tBox_D").innerHTML = `
    <p id="code" value=${res}>${res}</p>
    <div class="tooltip">
     <button class="copiarB" type="button" onclick="copiar()">
      <span class="tooltiptext" id="myTooltip">Copiar al portapapeles</span>
      Copiar
     </button>
    </div>`;
  } else {
    document.querySelector("#tBox_D").innerHTML = not_found_comp;
  }
};

const desencriptar = () => {
  let text = document.querySelector("#textD").value.toLowerCase();
  let mD = { ai: "a", enter: "e", imes: "i", ober: "o", ufat: "u" };

  if (text != "") {
    res = text.replace(/(?:ai|enter|imes|ober|ufat)/g, (m) => mD[m]);

    document.querySelector("#textD").value = "";
    document.querySelector("#tBox_D").innerHTML = `
    <p id="code" value=${res}>${res}</p>
    <div class="tooltip">
     <button class="copiarB" type="button" onclick="copiar()">
      <span class="tooltiptext" id="myTooltip">Copiar al portapapeles</span>
      Copiar
     </button>
    </div>`;
  } else {
    document.querySelector("#tBox_D").innerHTML = not_found_comp;
  }
};

const copiar = () => {
  navigator.clipboard.writeText(res)
  let tooltip = document.querySelector("#myTooltip");
  tooltip.innerHTML = `Copiado: ${res}`;
};

const outFunc = () => {
  let tooltip = document.querySelector("myTooltip");
  tooltip.innerHTML = "Copiado al portapapeles";
}