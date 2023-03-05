const select = document.querySelector("select"); // Seleciona o elemento select

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

const diaMaisVendas = document.querySelector("#most-sell-day");
const diaMenosVendas = document.querySelector("#less-sell-day");

const diasSemana = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"];

const vendas = diasSemana.map((dia) => {
  return document.querySelector(`#sell-${dia}`);
});

const bar = diasSemana.map((dia) => {
  return document.querySelector(`#bar-${dia}`);
});

const btnAdd = document.querySelector("#btn-add");

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
    DiaMaisVenda: "Segunda-Feira",
    DiaMenosVendas: "Terça-Feira",
    DiasVendas: {
      dom: 5,
      seg: 6,
      ter: 4,
      qua: 2,
      qui: 3,
      sex: 5,
      sab: 3,
    },
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
    DiaMaisVenda: "Sexta-Feira",
    DiaMenosVendas: "Domingo",
    DiasVendas: {
      dom: 1,
      seg: 6,
      ter: 4,
      qua: 2,
      qui: 3,
      sex: 9,
      sab: 3,
    },
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
    DiaMaisVenda: "Quarta-Feira",
    DiaMenosVendas: "Quinta-Feira",
    DiasVendas: {
      dom: 5,
      seg: 6,
      ter: 4,
      qua: 10,
      qui: 0,
      sex: 5,
      sab: 3,
    },
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
    DiaMaisVenda: "Sábado",
    DiaMenosVendas: "Segunda-Feira",
    DiasVendas: {
      dom: 5,
      seg: 2,
      ter: 4,
      qua: 3,
      qui: 3,
      sex: 5,
      sab: 13,
    },
  },
];

btnAdd.addEventListener("click", () => {
  alert("Função em desenvolvimento, por favor, aguarde!");
});

select.addEventListener("change", () => {
  const mesSelecionado = select.value; // Obtém o valor do select
  const objetoMes = data.find((obj) => obj.mes === mesSelecionado); // Procura o objeto com o mês selecionado

  if (objetoMes === undefined || objetoMes.value == "non") {
    notaNPS.style.color = "#4ECDC4";
    imgNota.setAttribute("src", "../src/assets/images/Confuse-Face.png");
    notaNPS.textContent = "Sem dados...";
    npsScore.textContent = "00";
    vendasAlcPorc.forEach((vendasAlc) => {
      vendasAlc.textContent = `00%`;
    });
    grafVendasAl.setAttribute("style", `--porcentage: 0`);
    grafMetasAl.setAttribute("style", `--porcentage: 0`);
    vendasEspPorc.textContent = `00%`;

    metaAlcPorc.textContent = `00%`;
    metaEspValor.textContent = "R$ 00K";
    metaAlcValor.textContent = "R$ 00K";
    diaMaisVendas.textContent = "...";
    diaMenosVendas.textContent = "...";

    for (let i = 0; i < bar.length; i++) {
      bar[i].setAttribute("style", `--height: 0rem`);
    }
    return;
  }

  if (objetoMes.NPSGeral === "Excelente!") {
    notaNPS.style.color = "#FB2EFF";
    imgNota.setAttribute("src", "../src/assets/images/Star-Struck.png");
  } else if (objetoMes.NPSGeral === "Bom") {
    notaNPS.style.color = "#81fbb8";
    imgNota.setAttribute("src", "../src/assets/images/Smiling-Face.png");
  } else if (objetoMes.NPSGeral === "Ruim") {
    notaNPS.style.color = "#FCF300";
    imgNota.setAttribute("src", "../src/assets/images/Thinking-Face.png");
  } else {
    notaNPS.style.color = "rgb(255, 46, 46)";
    imgNota.setAttribute("src", "../src/assets/images/Tired-Face.png");
  }

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
  diaMaisVendas.textContent = objetoMes.DiaMaisVenda;
  diaMenosVendas.textContent = objetoMes.DiaMenosVendas;

  for (const [dia, vendas] of Object.entries(objetoMes.DiasVendas)) {
    const index = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"].indexOf(
      dia
    );
    if (index !== -1) {
      bar[index].setAttribute("style", `--height: ${vendas}rem`);
    }
  }

  for (const [dia, qtd] of Object.entries(objetoMes.DiasVendas)) {
    const index = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"].indexOf(
      dia
    );
    if (index !== -1) {
      vendas[index].textContent = `${qtd}`;
    }
  }
});
