
function vastaluvuksi(lista){
    let vastaluku=[];

    for(i=0; i<lista.length; i++){
        let vasta = lista[i];
        vasta = vasta * -1;
        vastaluku.push(vasta);
    }
    console.log(vastaluku);
    alert(vastaluku);
    return;
}
let lista = [];
let luku;
do{
    luku = prompt('Anna lukuja. Lopeta lukujen anto 0.');
    lista.push(luku);
}while(luku !=0);
vastaluvuksi(lista);