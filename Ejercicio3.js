/* ############################### 
   EJERCICIO 3                       
   ############################### */
function ArrayNumbers(num,sum){
let numbers=[];
for(let i=0;i<num.length;i++){
    for(let p=i+1;p<num.length;p++){
        if(num[i]+num[p] == sum){
            numbers.push([num[i],num[p]]);
        }
    }
}
return numbers;
}
ArrayNumbers([2,4,6,5,3,5],10);

// Desarrollado por Jose Samuel Alvarez Silva 