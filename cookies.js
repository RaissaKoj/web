// Defina um nome para o cookie
const cookieName = "meuCookie";

// Defina um valor para o cookie
const cookieValue = "valorDoCookie";

// Defina opções adicionais do cookie
const expirationDays = 7; // Dias até o cookie expirar
const path = "/"; // Caminho no qual o cookie será válido

// Crie o cookie
const expirationDate = new Date();
expirationDate.setDate(expirationDate.getDate() + expirationDays);
const cookieString = `${meuCookie}=${valorDoCookie}; expires=${expirationDate.toUTCString()}; path=${path}`;

// Envie o cookie para o navegador
document.cookie = cookieString;

//caso a data seja por mais de um ano
// Defina a data de expiração para 1 ano a partir de agora
var expirationDates = new Date();
expirationDate.setFullYear(expirationDate.getFullYear() + 1);

// Converta a data de expiração em uma string no formato UTC
var expires = expirationDate.toUTCString();

// Crie o cookie e defina a data de expiração
document.cookie = "meuCookie=valorDoCookie; expires=" + expires + "; path=/";

//tipos de valores para atribuir:URL,IDs, Dados estruturados

<script src="cookies.js"></script>
