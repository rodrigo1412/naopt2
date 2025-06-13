document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const nome = form.querySelector("#nome").value.trim();
      const email = form.querySelector("#email").value.trim();
      const numero = form.querySelector("#numero").value.trim();
      const mensagem = form.querySelector("#mensagem").value.trim();
  
      if (nome === "") {
        alert("Por favor, preencha o campo Nome.");
        return;
      }
  
      if (!validarEmail(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
      }
  
      if (!/^\d{9,15}$/.test(numero)) {
        alert("Por favor, insira um número válido (apenas dígitos, de 9 a 15 caracteres).");
        return;
      }
  
      if (mensagem.length < 10) {
        alert("A mensagem deve conter pelo menos 10 caracteres.");
        return;
      }
  
      alert("Formulário enviado com sucesso!");
      form.reset();
    });
  
    function validarEmail(email) {
      // Expressão regular básica para e-mails válidos
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  });
  