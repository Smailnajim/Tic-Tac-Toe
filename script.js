const n = document.getElementById('numberN');
let k = document.getElementById('numberK');
const lyer = document.querySelector('#game .lyer');
let player = 1;
let stock = new Map();

function checkWiner(index){
    let win = 0;
    const xy = index.split('i');
    const x = parseInt(xy[0]);
    const y = parseInt(xy[1]);

    // let  = Math.ceil(k.value / 2);
    let numberToWin = parseInt(k.value);
    let itijah = 1;

    // /
    for(let i = 1; i < numberToWin ; i++){
        if(stock.has((x+(itijah*i))+'i'+(y+(itijah*i))) && stock.get((x+(itijah*i))+'i'+(y+(itijah*i))) == (player % 2 ? 1 : 0)){
            win++;
            if (win == (numberToWin-1)) {
                // winGame();//some steps after win
                console.log('you win by this game');
            }
        }else{
            if (itijah == -1) {
                win = 0;
                itijah = 1;
                break;
            }else{
                itijah *= -1;
                i = 0;
            }
        }
    }


    // |
    for(let i = 1; i < numberToWin; i++){
        if(stock.has(x+'i'+(y+(itijah*i))) && stock.get(x+'i'+(y+(itijah*i))) == (player % 2 ? 1 : 0)){
            win++;
            if (win == (numberToWin-1)) {
                // winGame();//some steps after win
                console.log('you win by this game');
            }
        }else{
            if (itijah == -1) {
                win = 0;
                itijah = 1;
                break;
            }else{
                itijah *= -1;
                i = 0;
            }
        }
    }

    // //-
    for(let i = 1; i <= numberToWin; i++){
        if(stock.has((x+(itijah*i))+'i'+y) && stock.get((x+(itijah*i))+'i'+y) == (player % 2 ? 1 : 0)){
            win++;
            if (win == (numberToWin-1)) {
                // winGame();//some steps after win
                console.log('you win by this game');
            }
        }else{
            if (itijah == -1) {
                win = 0;
                itijah = 1;
                break;
            }else{
                itijah *= -1;
                i = 0;
            }
        }
    }

    // \
    for(let i = 1; i <= numberToWin; i++){
        if((stock.has((x+(-1 * itijah*i))+'i'+(y+(itijah*i)))) && (stock.get((x+(-1 * itijah*i))+'i'+(y+(itijah*i))) == (player % 2 ? 1 : 0))){
            win++;
            if (win == (numberToWin-1)) {
                //winGame();//some steps after win
                console.log('you win by this game');
            }
        }else{
            if (itijah == -1) {
                win = 0;
                itijah = 1;
                break;
            }else{
                itijah *= -1;
                i = 0;
            }
        }
    }

    //
}

function whoPlayNow(){
    const symbolX = document.querySelector('.symbol-x');
    const symbolO = document.querySelector('.symbol-o');

    if(player % 2){
        symbolX.style.backgroundColor = 'white';
        symbolO.style.backgroundColor = 'gray';
    }
    else{
        symbolX.style.backgroundColor = 'gray';
        symbolO.style.backgroundColor = 'white';
    }
    // console.log(symbolO, symbolX);
}
whoPlayNow();
lyer.addEventListener('click', function(event){
    
    if((event.target.className != 'lyer') && (event.target.className == 'red')){
        stock.set(event.target.id, player % 2 ? 1 : 0);//  0=>O, 1=>X
        event.target.classList.remove('red');
        event.target.style.backgroundColor = player % 2 ? 'yellow' : 'orchid';
        checkWiner(event.target.id);
        player++;
        whoPlayNow();
    }
});

function lyerPlay(number){
    player = 1;
    whoPlayNow();
    const fargment = document.createDocumentFragment();
    
    lyer.innerHTML = ''; //remove all children
    
    for(let i = (number-1); i >=0 ; i--){//create many children and append to fargment
        for(let j = 0; j < number; j++){//n*n div
            let child = document.createElement('div');
            child.classList.add('red');//add class red
            child.id = `${j}i${i}`;//add (x, y)
            fargment.appendChild(child);
        }
    }

    lyer.appendChild(fargment);//append fargment to lyer

    Object.assign(lyer.style, {
        display: 'grid',
        gridTemplateColumns: `repeat(${number}, 1fr)`,
        gridTemplateRows: `repeat(${number}, 1fr)`,
    });
}
lyerPlay(3);

n.addEventListener('input', function(){
    let valueN = this.value;
    // console.log(valueN);
    lyerPlay(valueN);
});