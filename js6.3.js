function itseisarvo(luku){
    if(luku<0){
        luku = luku * -1;
        return luku;
    }
    else{
        return luku;
    }
}


let a = prompt('Anna luku. Ohjelma palauttaa luvun itseisarvon.')

let b =itseisarvo(a);
console.log(b);
