//declaracao de variaveis
const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");

//evento de submit(enviar)
form.addEventListener("submit", (e) => {
  e.preventDefault();// ele serve para resetar o comportamento padrão do formulário no html.

  checkInputs();
});

//essa função serve para as validações
function checkInputs() {
  const emailValue = email.value.trim();// trim serve para remover todos os espaços em branco do texto.
  const passwordValue = password.value.trim();

  if (emailValue === "") {
    // mostrar erro
    // add classe error
    setErrorFor(email, "Preencha esse campo");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email inválido");
  } else {
    // adicionar a classe de sucesso
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    // mostrar erro
    // add classe
    setErrorFor(password, "Preencha esse campo");
  } else if (passwordValue.length < 8) {
    setErrorFor(password, "Senha deve ter mais que 8 caracteres");
  } else {
    // adicionar a classe de sucesso
    setSuccessFor(password);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;//parentElemnte retorna uma referencia direto do seu pai. O elemento desse filho seria o formControl, que vai reatribuir a classe form-control error.
  const small = formControl.querySelector("small");

  small.innerText = message;

  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  formControl.className = "form-control success";
}

function isEmail(email) {
  //Essa é uma função de validação de campo de email, para que venha no formato correto. essa função foi pega na internt ja pronta.Conhecido por regex.
  return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
    email
  );
}
