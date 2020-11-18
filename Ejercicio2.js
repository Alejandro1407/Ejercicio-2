function palindromo(){

   let palabra =  prompt("Ingrese su palabra").trim().toLowerCase();
   let palabraInversa = "";
   for(let i = palabra.length - 1;i >= 0;i--){
        palabraInversa += palabra[i];
   }
   console.log(palabraInversa)
   if(palabra == palabraInversa){
       alert("La Palabra " + palabra + " es palindroma")
   }else{
       alert("La Palabra " + palabra + " no es palindroma")
   }

}