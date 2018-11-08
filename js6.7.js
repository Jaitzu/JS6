let parillinen=[];
function parilliset(lista){
    for(i=0; i<lista.length; i++){
        if(lista[i] % 2 ==0){
            parillinen.push(lista[i]);
        }
    }
    return parillinen;
}
let lista=[];
let luku;
do{
   luku= prompt('Anna lukuja. 0 lopettaa lukujen syötön');
   lista.push(luku);
}while(luku!=0);

let vr=parilliset(lista);
alert(vr);