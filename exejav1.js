  var A = 0 
  var B = 0
  var C = 0

  while (A == null | A <= 0) {
     prompt(' Digite o primeiro número')
    } 

  while (B == null | B <= 0) {
     prompt(' Digite o segundo número')
    }
    
  while (C == null | C <= 0) {
   prompt(' Digite o terceiro número')
    }
  
  var Equilatero =  A == B & B == C 
  var Escaleno = A !== B & B !== C & A !== C

  if (Equilatero) {
    alert('Esse triângulo é Equilátero')

  } else if (Escaleno) {
    alert('Esse triângulo é Escaleno')

  } else {
    alert('Esse triângulo é Isósceles')

  }

  


  
 




   
    






