function istouching(caja1,caja2){

    var distanciaCentrosX = caja1.width/2 + caja2.width/2;
    var distanciaCentrosY = caja1.height/2 + caja2.height/2;
  
    if(caja1.x - caja2.x <= distanciaCentrosX && caja2.x - caja1.x <= distanciaCentrosX
      && caja1.y - caja2.y <= 50 &&  caja2.y - caja1.y <= 50 ){
      return true 
    }
    else{
   return false 
    }
  
  }

  function bounceoff(caja1, caja2){

    var distanciaCentrosX = caja1.width/2 + caja2.width/2;
    var distanciaCentrosY = caja1.height/2 + caja2.height/2;
  
    if(caja1.x - caja2.x <= distanciaCentrosX && caja2.x - caja1.x <= distanciaCentrosX
      && caja1.y - caja2.y <= 50 &&  caja2.y - caja1.y <= 50 ){
      caja1.velocityX = caja1.velocityX * (-1)
      caja1.velocityY = caja1.velocityY * (-1)
  
      caja2.velocityX = caja2.velocityX * (-1)
      caja2.velocityY = caja2.velocityY * (-1)
      
    }
    else{
   return false 
}

}