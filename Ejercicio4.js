/* ############################### 
   EJERCICIO 4                       
   ############################### */
const arrSecuencia=[]
function secuencia(numLimite){
    for(let i=1;i<=numLimite;i++){
        arrSecuencia[i]=[]
        for(let x=1;x<=i;x++){
            arrSecuencia[i].push(x);
        }
        
    }
    return arrSecuencia
}
secuencia(15);
console.table(arrSecuencia);

// Desarrollado por Jose Samuel Alvarez Silva 