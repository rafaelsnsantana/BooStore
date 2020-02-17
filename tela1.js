function Validar(){

    let emailCorreto, senhaCorreto;
    emailCorreto= document.getElementById(email);
    senhaCorreto= document.getElementById(senha);

    if ( emailCorreto == "joao" && senhaCorreto == "joao123" ){
        alert("Parabéns!");
    } else {
        alert("Incorreto!");
    }
    
}


