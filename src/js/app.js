const notaNPS = document.querySelector("#npsgeral-nota");
const imgNota = document.querySelector("#img-npsgeral");
const npsScore = document.querySelector("#score-nota");
const vendasAlcPorc = document.querySelectorAll(".vendaalcancadas-porc");
const grafVendasAl = document.querySelector("#porcentagem-vendas");
const grafMetasAl = document.querySelector("#porcentagem-meta");
const vendasEspPorc = document.querySelector("#vendaesperada-porc");
const metaAlcPorc = document.querySelector("#metaalcancada-porc");
const metaEspValor = document.querySelector("#metaesperada-valor");
const metaAlcValor = document.querySelector("#metaalcancada-valor");

const data = [
  {
    mes: "jan",
    NPSGeral: "Excelente!",
    NPSScoreNota: 95,
    VendasAlcancadas: "93",
    VendasEsperadas: "97",
    MetaEsperada: "50K",
    MetaAtingida: "43.5K",
    MetaAlcancada: 80,
  },
  {
    mes: "fev",
    NPSGeral: "Bom",
    NPSScoreNota: 87,
    VendasAlcancadas: "67",
    VendasEsperadas: "32",
    MetaEsperada: "70K",
    MetaAtingida: "52.7K",
    MetaAlcancada: 88,
  },
  {
    mes: "mar",
    NPSGeral: "Ruim",
    NPSScoreNota: 32,
    VendasAlcancadas: "17",
    VendasEsperadas: "100",
    MetaEsperada: "70K",
    MetaAtingida: "12.7K",
    MetaAlcancada: 5,
  },
  {
    mes: "abr",
    NPSGeral: "Péssimo",
    NPSScoreNota: 12,
    VendasAlcancadas: "7",
    VendasEsperadas: "100",
    MetaEsperada: "20K",
    MetaAtingida: "1K",
    MetaAlcancada: 0.5,
  },
];

const select = document.querySelector("select"); // Seleciona o elemento select
select.addEventListener("change", () => {
  const mesSelecionado = select.value; // Obtém o valor do select
  const objetoMes = data.find((obj) => obj.mes === mesSelecionado); // Procura o objeto com o mês selecionado

  if (objetoMes === undefined) {
    notaNPS.style.color = "#4ECDC4";
    imgNota.setAttribute("src", "../src/assets/images/Confuse-Face.png");
    notaNPS.textContent = "Sem dados...";
    npsScore.textContent = "00";
  }

  if (objetoMes.NPSGeral === "Excelente!") {
    notaNPS.style.color = "#FB2EFF";
    imgNota.setAttribute("src", "../src/assets/images/Face-Heart-Eyes.png");
  } else if (objetoMes.NPSGeral === "Bom") {
    notaNPS.style.color = "#81fbb8";
    imgNota.setAttribute("src", "../src/assets/images/Smiling-Face.png");
  } else if (objetoMes.NPSGeral === "Ruim") {
    notaNPS.style.color = "#FCF300";
    imgNota.setAttribute("src", "../src/assets/images/Thinking-Face.png");
  } else {
    notaNPS.style.color = "#D72638";
    imgNota.setAttribute("src", "../src/assets/images/Tired-Face.png");
  }

  console.log(objetoMes); // Exibe o objeto encontrado no console

  notaNPS.textContent = objetoMes.NPSGeral;
  npsScore.textContent = objetoMes.NPSScoreNota;

  vendasAlcPorc.forEach((vendasAlc) => {
    vendasAlc.textContent = `${objetoMes.VendasAlcancadas + "%"}`;
  });
  grafVendasAl.setAttribute(
    "style",
    `--porcentage: ${objetoMes.VendasAlcancadas}`
  );
  grafMetasAl.setAttribute("style", `--porcentage: ${objetoMes.MetaAlcancada}`);
  vendasEspPorc.textContent = `${objetoMes.VendasEsperadas + "%"}`;

  metaAlcPorc.textContent = `${objetoMes.MetaAlcancada + "%"}`;
  metaEspValor.textContent = objetoMes.MetaEsperada;
  metaAlcValor.textContent = objetoMes.MetaAtingida;
});
