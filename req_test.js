const axios = require('axios').default;
const fs = require('fs');
const { argv } = require('process');
const command = require("./command");
// http://gazevedo996.pythonanywhere.com/
// "http://localhost:6546/"

function getdata () {
  axios.get("https://fastapi-selenium-production-30d6.up.railway.app/tjsp/servicos/consulta?cadernos=0&secoes=0", {
    params: {
      "cadernos": argv[2] || 0,
      "secoes": argv[3] || 0
    }
  })
  .then(function (response) {
    // manipula o sucesso da requisição
    console.log(response);
    command("chrome", response.data.url)
    console.log(response.data.list_cadernos)
  })
  .catch(function (error) {
    // manipula erros da requisição
    console.error(error);
  })
  .finally(function () {
    // sempre será executado
  });
}
getdata();
