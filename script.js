const n = document.getElementById('numberN');
const lyer = document.querySelector('#game .lyer');
let plyer = 1;

function whoPlayNow(){
    const symbolX = document.querySelector('.symbol-x');
    const symbolO = document.querySelector('.symbol-o');

    if(plyer % 2){
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
    console.log(event.target.className);
    if((event.target.className != 'lyer') && (event.target.className == 'red')){
        event.target.classList.remove('red');
        event.target.style.backgroundColor = plyer++ % 2 ? 'yellow' : 'orchid';
        whoPlayNow();
    }
});

function lyerPlay(number){
    plyer = 1;
    whoPlayNow();
    const fargment = document.createDocumentFragment();
    
    lyer.innerHTML = ''; //remove all children
    
    for(let i = 0; i < number; i++){//create many children and append to fargment
        for(let j = 0; j < number; j++){//n*n div
            let child = document.createElement('div');
            child.classList.add('red');//add class
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
