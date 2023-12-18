const http = require('http')

const server = http.createServer((request, response)=>{

    response.end('hola')
})

const port = 3000

const host = "localhost"

server.listen(port,host,()=>{
    console.log(`servidor ejecutandose en http://${host}:${port}`)
})

const axios = require('axios');
const config = require('./config');

const apiKey = config.apiKey;
const apiUrl = 'https://newsapi.org/v2/top-headlines';

axios.get(apiUrl, {
  params: {
    apiKey: apiKey,
    country: 'us', 
  },
})
  .then(response => {
    // Manipular los datos de respuesta aquí
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error al obtener noticias:', error);
  });
