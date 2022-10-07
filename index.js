// chama o express

const express = require("express")

// atalho do express

const app = express()

// rota 
app.get('/usuarios', function (request, response) {
    response.send('Gabriela, Alane, Grazi, Pri, Brizza, Leticia!');
  });

// coloca o servidor no ar

app.listen(3032, () => {
    console.log("Meu servidor ta rodando.")
  })