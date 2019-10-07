const {Schema, model} = require('mongoose');
//estrutura do meu banco de dados
const DevSchema = new Schema ({
    //obj nome+tipo+obrigatoriedade
    name:{
        type:String,
        required:true,
    },
    //obj nomeDeUsuario+tipo+obrigatoriedade
    user:{
        type:String,
        required:true,
    },
    likes:[{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
    dislikes:[{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
    //obj descrição+tipo+obrigatoriedade
    bio:String,
    //obj avatar(foto)+tipo+obrigatoriedade,OBS: type=string pq ta pegando a URL
    avatar:{
        type:String,
        required:true,
    },
}, {
    //cria colunas "createdAT"=data de criaçãoe"updatedAT"=data de ultima atualização
    timestamps:true,
});
module.exports = model('Dev', DevSchema);