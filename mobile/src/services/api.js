import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3333', //url localhost funciona apenas no emulador IOS
    baseURL: 'http://192.168.0.2:3333', //Para funcionar em outros dispositivos na mesma rede, trocar localhost pelo IP da maquina no Expo Developer Tools

});


export default api;