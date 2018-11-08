function liitä(lista){
let yhd =lista.join("");
return yhd;
}

let lista =[], x;

do{
    x = prompt('Anna merkkijonoja. Lopeta merkkijonojen syöttö syöttämällä 0.');
    if(x !=0) {
        lista.push(x);
    }
}while(x!=0);

let y = liitä(lista);
alert(y);
