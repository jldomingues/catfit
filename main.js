function gerar(){
  

//captura de dados
  var ppeso=window.document.getElementById("peso")
  var paltura=window.document.getElementById("altura")
  //captura da div de resultado
  var pres=window.document.getElementById("res")
 //conversão de dados em valor 
  var cpeso=Number(ppeso.value)
  var caltura=Number(paltura.value)
  //calculo dos dados
  var dados=cpeso/(caltura*caltura)

  if(dados<18.5){
    pres.innerHTML=(`<h2 onclick="history.go(0)">Refazer</h2>
<img src="imgs/engordar.png" width="200px"><div class="vermelho"><strong>Você está abaixo do peso</strong><br></div>`)
      
  
  }
   if (dados>=18.5&&dados<24){
      pres.innerHTML=(`<h2 onclick="history.go(0)">Refazer</h2> 
      <img src="imgs/emforma.png" width="220px"><div class="verde">Você está em forma </div>`)
      

   }

  if (dados>=24&&dados<29){
      pres.innerHTML=(`<h2 onclick="history.go(0)">Refazer</h2>
<img src="imgs/cartao.png" width="200px"><div class="vermelho"><strong>Você está com alguns quilos a mais!</strong> </div`)
      
      

}
if (dados>29){
      pres.innerHTML=(`<h2 onclick="history.go(0)">Refazer</h2>
<img src="imgs/emagrecer.png"width="200px"><div class="vermelho"><strong>Você está bem acima do peso</strong> </div>`)
      
      

}
}
  
  
  

