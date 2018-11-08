const fibo = (luku) =>
{
    if (luku<2) {
        return luku;
    }
    else {

        return fibo(luku-1) + fibo(luku-2);
    }
}


 luku = prompt('Anna fibonaccin lukujonon suurin alkio');
alert(fibo(luku));
console.log(fibo(luku));