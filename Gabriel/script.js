// Função para validar o formulário de contato

function enviar() {
    const nome = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("message").value;

    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    alert("Página em construção");
    }

// Gerador de senhas

function gerarSenha() {
    const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
    const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeros = "0123456789";
    const especiais = "!@#$%&*?_-";

    // junta todos os caracteres possíveis
    const todos = letrasMinusculas + letrasMaiusculas + numeros + especiais;

    let senha = "";

    // garante ao menos 1 de cada tipo
    senha += letrasMinusculas[Math.floor(Math.random() * letrasMinusculas.length)];
    senha += letrasMaiusculas[Math.floor(Math.random() * letrasMaiusculas.length)];
    senha += numeros[Math.floor(Math.random() * numeros.length)];
    senha += especiais[Math.floor(Math.random() * especiais.length)];

    // completa até 16 caracteres
    for (let i = 4; i < 16; i++) {
        senha += todos[Math.floor(Math.random() * todos.length)];
    }

    // embaralha a senha para não seguir padrão fixo
    senha = senha.split("").sort(() => Math.random() - 0.5).join("");

    // exibe na tela
    document.getElementById("resultado").innerHTML = "<p><strong>" + senha + "</strong></p>";
}
