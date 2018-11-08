
function suurin(lista){
   lista.sort(function (a, b) {return a - b;});
   console.log(lista);
   let pituus = lista.length;
   console.log(pituus);
   let suuri = lista[ pituus-1];
   return suuri;
}

let lista =[];
for(i=0; i<3; i++){
    let luku = prompt('anna luku');
    lista.push(luku);
    console.log(lista);
}
let suur = suurin(lista);

console.log(suur);