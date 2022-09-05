

function hover() {
 document.querySelector('.market-icon .box').style.width='8%'
 document.querySelector('.market-icon .box').style.backgroundColor='red'
 document.querySelector('.market-icon .box span').innerHTML='BUY THEME'
 document.querySelector('.market-icon .box i').style.color='white'
 document.querySelector('.market-icon .box span').style.color='white'
 document.querySelector('.market-icon .box span').style.fontSize='12px'
 document.querySelector('.market-icon .box span').style.display='block'

 
}

function hoverout() {
    document.querySelector('.market-icon .box').style.width='3%'
    document.querySelector('.market-icon .box').style.backgroundColor='white'
    document.querySelector('.market-icon .box i').style.color='black'
    document.querySelector('.market-icon .box span').style.display='none'



}

function hover1() {
    document.querySelector('.letter-icon .box').style.width='11%'
    document.querySelector('.letter-icon .box').style.backgroundColor='red'
    document.querySelector('.letter-icon .box span').innerHTML='QUICK QUESTION?'
    document.querySelector('.letter-icon .box i').style.color='white'
    document.querySelector('.letter-icon .box span').style.color='white'
    document.querySelector('.letter-icon .box span').style.fontSize='12px'
    document.querySelector('.letter-icon .box span').style.display='block'
    
}

function hoverout1() {
    document.querySelector('.letter-icon .box').style.width='3%'
    document.querySelector('.letter-icon .box').style.backgroundColor='white'
    document.querySelector('.letter-icon .box i').style.color='black'
    document.querySelector('.letter-icon .box span').style.display='none'
}


let btnsec1=document.querySelector('.upsec1 .sec1 header .buton button')
btnsec1.addEventListener('click',display)

function display() {

    document.querySelector('.upsec2').style.opacity='1'
    document.querySelector('.upsec1').style.opacity='0'
   


    



}

let btnsec2=document.querySelector('.upsec2 .sec2 header .buton-icon button')

btnsec2.addEventListener('click',display2)
function display2() {
    document.querySelector('.upsec1').style.opacity='1'
   document.querySelector('.upsec2').style.opacity='0'




   
  
   

}


window.onscroll=scroll

function scroll() {
    if (document.documentElement.scrollTop > 2) {
        document.querySelector('footer .container-fluid button').style.opacity='1'
    }else{
        document.querySelector('footer .container-fluid button').style.opacity='0'

    }
}

const scrollbtn=document.querySelector('footer .container-fluid button')
scrollbtn.addEventListener('click',scrollTopes)

function scrollTopes() {
    document.documentElement.scrollTop = 0
}

