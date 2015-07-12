exports.question = function(req,res){
    res.render('quizes/question',{pregunta:"Capital De Italia",title:"Quiz Juego"});
};
exports.answer = function(req,res){
    if(req.query.respuesta === 'roma'){
        res.render('quizes/answer',{respuesta:'Correcto',title:"Ganaste"});
    }else{
        res.render('quizes/answer',{respuesta:'Incorrecto',title:"Perdiste"});
    }
};