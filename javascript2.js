let profession = "fiscal";

console.log("Profissao: " + profession);

switch(profession){
      case "fiscal" :
         console.log("Sua camisa verde");
         break;
      case "bombeiro" :
         console.log("Sua camisa vermelho");
         break;
      case "policial" :
            console.log("Sua camisa azul");
            break ; 
      default :
            console.log("sua camisa preta");
            break;
    

}

function gravidade(){
     console.log("A gravidade e 10")

}

gravidade();





function calcPorcentagem(x,y){
   let porcentagem = (y / x ) * 100 ;
   return porcentagem

}

let x = 40 ;
let y = 10 ;
let pct = calcPorcentagem(x,y);
console.log( `${pct}% de ${x} e ${y}`) ;



function calcularImovel(m,q){
     let m2 = 3000 ;
     let valor = 0
    
    switch(q){
       case 1 :
        valor = m * m2;
       break;
       case 2 :
        valor = m * (m2 *1,2); 
       break;
       case 3 :
        valor = m * (m2 * 1,5); 
       break;
       



    }
         return valor
}


let metragem = 123;
let quartos = 3;
let preco = calcularImovel(metragem,quartos);

console.log(`${preco} valor do imovel `);



function validar(usuario,senha){

              
          if(usuario === "pedro" && senha === 123){
           return true;
         }else{
         return false;
         }

    
}

let usuario = "bonienbt";
let senha = 44;
let validacao = validar(usuario,senha);

if(validacao){
   console.log('acesso ok');
}else{
   console.log ("negado");
}





const calcular = (x,y) =>{
      return x - y
}





















