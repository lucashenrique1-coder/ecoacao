const formulario = document.querySelector("#cadastro form");

// Substitui o comportamento que estava no onsubmit do HTML
formulario.onsubmit = function (evento) {
    evento.preventDefault();

    const nome = document.getElementById("nome").value.trim();

    alert(
        `Obrigado por participar, ${nome}! ` +
        "Esta é uma demonstração: nenhum dado foi enviado ou salvo."
    );

    formulario.reset();
};