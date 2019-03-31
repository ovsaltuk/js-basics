function getRandomArbitary (min, max) {
    return Math.random() * (max - min) + min;
}

function renderFromAToFifteen (a){
    for (a ; a <= 15; a++){
        console.log(a);
    }
}

let a = Math.floor(getRandomArbitary(0, 15));


renderFromAToFifteen(a);


