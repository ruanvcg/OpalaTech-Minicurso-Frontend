const abas = document.querySelectorAll(".aba"); // Seleciona todos os elementos que representam as abas no HTML

abas.forEach((aba) => {
  aba.addEventListener("click", function () { // Adiciona um evento de clique a cada aba
    const abaSelecionada = document.querySelector(".aba.selecionada"); // Seleciona a aba atualmente selecionada (se houver)

    abaSelecionada?.classList.remove("selecionada"); // Remove a classe "selecionada" da aba anteriormente selecionada (se existir)
    aba.classList.add("selecionada"); // Adiciona a classe "selecionada" à aba atual

    document.querySelectorAll(".informacao.selecionado")
      .forEach((info) => info.classList.remove("selecionado")); // Remove a classe "selecionado" de todas as informações anteriores selecionadas

    document.getElementById(`informacao-${aba.id}`)
      .classList.add("selecionado"); // Adiciona a classe "selecionado" à informação correspondente à aba atual
  });
});
