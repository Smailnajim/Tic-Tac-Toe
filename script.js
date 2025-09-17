const n = document.getElementById('numberN');

function lyerPlay(number){
    const lyer = document.querySelector('#game .lyer');
    const fargment = document.createDocumentFragment();
    
    lyer.innerHTML = ''; //remove all children
    
    for(let i = 0; i < number; i++){//create many children and append to fargment
        let child = document.createElement('div');
        child.classList.add('red');//add class
        fargment.appendChild(child);
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
