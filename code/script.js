let turnMusic = new Audio();

let gameover="1";
let turn="X";
// turn changing fn
changeTurn = ()=>{
    if(turn==="X") turn ="0";
    else turn="X"
}

//function to check for win

checkWin=()=>{

    let wins=[
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135]
    ]
    let text= document.getElementsByClassName('text');
    wins.forEach((e)=>{
        if(text[e[0]].innerText===text[e[1]].innerText&&
            text[e[1]].innerText===text[e[2]].innerText&&
            text[e[1]].innerText !==""){
               (document.querySelector('.turninfo')).innerText =  text[e[1]].innerText+" Won"
               document.querySelector('.img').getElementsByTagName('img')[0].style.width="186px"
               document.querySelector('.line').style.transform = `Translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
               document.querySelector('.line').style.width="20vw";
               gameover="0";
        }
        
    })

}

//how to work x and o changing

    let mat=document.getElementsByClassName('mat');
    Array.from(mat).forEach(el=>{
        let text=el.querySelector('.text')
        el.addEventListener('click',()=>{
            if(text.innerText===''&&gameover==="1"){
                text.innerText=turn;
                changeTurn();
                turnMusic.play();
                checkWin();
                if(gameover==="1"){
                    document.getElementsByClassName('turninfo')[0].innerText= "Turn for "+ turn;
                }
            }
        })
    })


//reset button
let reset=document.querySelector('.reset');
reset.addEventListener('click',()=>{
    let text= document.querySelectorAll('.text');
    Array.from(text).forEach(element=>{
        element.innerText= ""
    });
    turn="X";
    gameover="1"
    if(gameover==="1"){
        document.getElementsByClassName('turninfo')[0].innerText= "Turn for "+ turn;
    }
    document.querySelector('.img').getElementsByTagName('img')[0].style.width="0px"
    document.querySelector('.line').style.width="0vw";
})
