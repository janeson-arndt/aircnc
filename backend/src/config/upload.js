const multer = require('multer');
const path = require('path');

module.exports = { //como o multer vai salvar os arquivos
    storage: multer.diskStorage({ //para salvar no disco, nos proprios arquivos da aplicação
        //path.resolve garante que todos os sistemas operacionais entendam em que diretório chegar
        destination: path.resolve(__dirname,'..','..','uploads'), //dirname variavel global que informa qual o diretorio atual
        filename: (req, file, cb) => { //retorna o nome do arquivo original
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);

           cb(null, `${name}-${Date.now()}${ext}`);  //formato template string - incluir variáveis dentro de strings
        },
    }),
};