const arr=[];
function Rellenar(limite){
    let num;
    for(let i=0;i<=9;i++){
        num=Math.floor(Math.random()*limite);
        arr.push(num);
}
    return arr;
}
function Imprimir(){
    for(let i=0;i<=9;i++){
        console.log(`Index: ${i+1} , Values: ${arr[i]}`);
    }
}
Imprimir(Rellenar(1000));



/*function RangeNumber(a,b){
    if(a > b){
        [a,b]=[b,a];
    }
    const amplitud= parseInt(b-a);
    const dezplasamiento = parseInt(a);
    return Math.floor(Math.random()*amplitud) + dezplasamiento;
}*/