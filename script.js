const btns = document.querySelector('.btn');
const screen = document.querySelector('.screen');
const equalbtn = document.querySelector('.btn-equal');
const clearbtn = document.querySelector('.btn-clear');


for (let i=0 i<btns.lenght; i++){
    btns[i].addEvenntListener(click function(){
        let number=btns[i].getAttribute('data-num');
        screen.value += number
    })
}

equalBtn.addEventListener('click' function(){
    if (screen.value===''){
        alert('input is empty')
    }
    else{
    let value = eval(screen.value);
    screen.value = value;
}
})

clearBtn.addEventListener('click' function(){
    screen.value = "";
})
