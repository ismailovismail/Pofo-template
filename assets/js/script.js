

function hover() {
 document.querySelector('.market-icon .box').style.width='8%'
 document.querySelector('.market-icon .box').style.backgroundColor='red'
//  document.querySelector('.market-icon .box span').innerHTML='BUY THEME'
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
    // document.querySelector('.letter-icon .box span').innerHTML='QUICK QUESTION?'
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
     localStorage.setItem('sec2display','1')
    document.querySelector('.upsec2').style.opacity=localStorage.getItem('sec2display')
    localStorage.setItem('sec1display','0')
    document.querySelector('.upsec1').style.opacity=localStorage.getItem('sec1display')
   


    



}

let btnsec2=document.querySelector('.upsec2 .sec2 header .buton-icon .exit-btn')

btnsec2.addEventListener('click',display2)
function display2() {
    localStorage.setItem('sec1display','1')
    document.querySelector('.upsec1').style.opacity=localStorage.getItem('sec1display')
    localStorage.setItem('sec2display','0')
   document.querySelector('.upsec2').style.opacity=localStorage.getItem('sec2display')




   
  
   

}




window.onscroll=scroll

function scroll() {
    if (document.documentElement.scrollTop > 2) {
        localStorage.setItem('scrollBtn','1')
        document.querySelector('footer .container-fluid button').style.opacity=localStorage.getItem('scrollBtn')
    }else{
        localStorage.setItem('scrollBtn','0')
        document.querySelector('footer .container-fluid button').style.opacity=localStorage.getItem('scrollBtn')

    }
}

const scrollbtn=document.querySelector('footer .container-fluid button')
scrollbtn.addEventListener('click',scrollTopes)

function scrollTopes() {
    document.documentElement.scrollTop = 0
}
const btnLang=document.querySelector('.change-lang')
const helloBackgr=document.querySelector('.hello h1')
const titleColin=document.querySelector('.sec1 .text .text1 p')
const textColin=document.querySelector('.sec1 .text .text2')
const marketBtn=document.querySelector('.butons .market-icon .box span')
const letterBtn=document.querySelector('.butons .letter-icon .box span')


document.querySelector('.change-lang').addEventListener('click',function () {
    if (btnLang.innerHTML == 'AZ') {
        localStorage.setItem('helloBackgrLang','SALAM')
        helloBackgr.innerHTML=localStorage.getItem('helloBackgrLang')
        localStorage.setItem('titleColinLang','Mən <span>colin smith</span>')
        titleColin.innerHTML=localStorage.getItem('titleColinLang')
        localStorage.setItem('textColinLang','DİZAYNER & FRONTEND PROQRAMÇI')
        textColin.innerHTML=localStorage.getItem('textColinLang')
        localStorage.setItem('marketBtnLang','TEMA AL')
        marketBtn.innerHTML=localStorage.getItem('marketBtnLang')
        localStorage.setItem('letterBtnLang','CƏLD SUAL?')
        letterBtn.innerHTML=localStorage.getItem('letterBtnLang')
        localStorage.setItem('sec1textWidth','75%')
        document.querySelector('.sec1 .text').style.width=localStorage.getItem('sec1textWidth')
        localStorage.setItem('sec1text1Width','100%')
        document.querySelector('.sec1 .text .text1').style.width=localStorage.getItem('sec1text1Width')
        localStorage.setItem('sec1MainLineWidth','100%')
        document.querySelector('.sec1 .main-line').style.width=localStorage.getItem('sec1MainLineWidth')
        localStorage.setItem('sec1RedLineWidth','75%')
        document.querySelector('.sec1 .main-line .line').style.width=localStorage.getItem('sec1RedLineWidth')
        localStorage.setItem('btnLanginner','EN')
        btnLang.innerHTML=localStorage.getItem('btnLanginner')
    }else{
        localStorage.setItem('helloBackgrLang','HELLO')
        helloBackgr.innerHTML=localStorage.getItem('helloBackgrLang')
        localStorage.setItem('titleColinLang',"I'm <span>colin smith</span>")
        titleColin.innerHTML=localStorage.getItem('titleColinLang')
        localStorage.setItem('textColinLang','DESIGNER & FRONTEND DEVELOPER')
        textColin.innerHTML=localStorage.getItem('textColinLang')
        localStorage.setItem('marketBtnLang','BUY THEME')
        marketBtn.innerHTML=localStorage.getItem('marketBtnLang')
        localStorage.setItem('letterBtnLang','QUICK QUESTION')
        letterBtn.innerHTML=localStorage.getItem('letterBtnLang')
        localStorage.setItem('sec1textWidth','70%')
        document.querySelector('.sec1 .text').style.width=localStorage.getItem('sec1textWidth')
        localStorage.setItem('sec1MainLineWidth','96%')
        document.querySelector('.sec1 .main-line').style.width=localStorage.getItem('sec1MainLineWidth')
        localStorage.setItem('sec1RedLineWidth','75%')
        document.querySelector('.sec1 .main-line .line').style.width=localStorage.getItem('sec1RedLineWidth')
        localStorage.setItem('btnLanginner','AZ')
        btnLang.innerHTML=localStorage.getItem('btnLanginner')
    }
})

helloBackgr.innerHTML=localStorage.getItem('helloBackgrLang')
titleColin.innerHTML=localStorage.getItem('titleColinLang')
textColin.innerHTML=localStorage.getItem('textColinLang')
marketBtn.innerHTML=localStorage.getItem('marketBtnLang')
letterBtn.innerHTML=localStorage.getItem('letterBtnLang')
btnLang.innerHTML=localStorage.getItem('btnLanginner')
document.querySelector('.sec1 .text').style.width=localStorage.getItem('sec1textWidth')
document.querySelector('.sec1 .text .text1').style.width=localStorage.getItem('sec1text1Width')
document.querySelector('.sec1 .main-line').style.width=localStorage.getItem('sec1MainLineWidth')
document.querySelector('.sec1 .main-line .line').style.width=localStorage.getItem('sec1RedLineWidth')
document.querySelector('.upsec1').style.opacity=localStorage.getItem('sec1display')
document.querySelector('.upsec2').style.opacity=localStorage.getItem('sec2display')
document.querySelector('footer .container-fluid button').style.opacity=localStorage.getItem('scrollBtn')














const changeBackgrBtn=document.querySelector('.change-backgr')
const background=document.querySelector('.upsec1')
const headImage=document.querySelector('.body .container-fluid .into .image img')
const headerIcons=document.querySelectorAll('header .icons i')
const headerLogo=document.querySelector('.sec1 header .logo img')
const imgSource=[
     {src:'assets/img/logo-white.png'},
     {src:'assets/img/logo.png'}
]



document.querySelector('.change-backgr').addEventListener('click',function () {
    if (changeBackgrBtn.innerHTML == 'Dark') {
        localStorage.setItem('background','darkblue')
        background.style.background=localStorage.getItem('background')
        localStorage.setItem('colorColinTitle','white')
        titleColin.style.color=localStorage.getItem('colorColinTitle')
        localStorage.setItem('colorTextColin','white')
        textColin.style.color=localStorage.getItem('colorTextColin')
        localStorage.setItem('helloBackColor','gray')
        helloBackgr.style.color=localStorage.getItem('helloBackColor')
        localStorage.setItem('headerIconSColor','white')
        for (let index of headerIcons) {
            index.style.color=localStorage.getItem('headerIconSColor')
        }
        localStorage.setItem('changeImage',imgSource[0].src)
        headerLogo.setAttribute('src',localStorage.getItem('changeImage'))
        localStorage.getItem('changeImage')
        localStorage.setItem('backgrBtnColor','white')
        changeBackgrBtn.style.background=localStorage.getItem('backgrBtnColor')
        localStorage.setItem('langBtnColor','white')
        btnLang.style.background=localStorage.getItem('langBtnColor')
        localStorage.setItem('navBtnColor','white')
        btnsec1.style.background=localStorage.getItem('navBtnColor')
        localStorage.setItem('langBtn','Light')
        changeBackgrBtn.innerHTML=localStorage.getItem('langBtn')
    }else{
        localStorage.setItem('background','white')
        background.style.background=localStorage.getItem('background')
        localStorage.setItem('colorColinTitle','black')
        titleColin.style.color=localStorage.getItem('colorColinTitle')
        localStorage.setItem('colorTextColin','gray')
        textColin.style.color=localStorage.getItem('colorTextColin')
        localStorage.setItem('changeImage',imgSource[1].src)
       headerLogo.setAttribute('src',localStorage.getItem('changeImage'))
        localStorage.setItem('headerIconSColor','black')
        for (let index of headerIcons) {
            index.style.color=localStorage.getItem('headerIconSColor')
        }
        localStorage.setItem('helloBackColor','rgba(0, 0, 0, 0.021)')
        helloBackgr.style.color=localStorage.getItem('helloBackColor')
        localStorage.setItem('langBtn','Dark')
        changeBackgrBtn.innerHTML=localStorage.getItem('langBtn')
    }
})

background.style.background=localStorage.getItem('background')
titleColin.style.color=localStorage.getItem('colorColinTitle')
textColin.style.color=localStorage.getItem('colorTextColin')
helloBackgr.style.color=localStorage.getItem('helloBackColor')
for (let index of headerIcons) {
    index.style.color=localStorage.getItem('headerIconSColor')
}
headerLogo.setAttribute('src',localStorage.getItem('changeImage'))
changeBackgrBtn.innerHTML=localStorage.getItem('langBtn')
changeBackgrBtn.style.background=localStorage.getItem('backgrBtnColor')
btnLang.style.background=localStorage.getItem('langBtnColor')
btnsec1.style.background=localStorage.getItem('navBtnColor')









const chngLangBtn=document.querySelector('.upsec2 .sec2 .lang-btn button') 
const links1Lang={
    az:['Ana səhifə','Portfel','Elementlər'],
    en:['Home','Portfolio','Elements']
}
const links2Lang={
    az:['Səhifələr','Məqalə','Xüsusiyyətlər'],
    en:['Pages','Blog','Features']
}
const LondonTitle=document.querySelector('.sec2 .body .text .title h1')

const links=document.querySelectorAll('.sec2 .links1 ul li a')
const links2=document.querySelectorAll('.sec2 .links2 ul li a')
document.querySelector('.upsec2 .sec2 .lang-btn button').addEventListener('click',function () {

    if (chngLangBtn.innerHTML == 'AZ') {
        localStorage.setItem('linksLang',links1Lang.az)
        for (let lang in links1Lang.az) {
           links[lang].innerHTML=links1Lang.az[lang]
        }
        localStorage.setItem('links2Lang',links2Lang.az)
        for (let index in links2Lang.az) {
           links2[index].innerHTML=links2Lang.az[index]
        }
        localStorage.setItem('LondontitleLang','London Əsaslı Yaradıcılıq Studiyası')
        LondonTitle.innerHTML=localStorage.getItem('LondontitleLang')
        localStorage.setItem('langBtnInner','EN')
        chngLangBtn.innerHTML=localStorage.getItem('langBtnInner')
    }else{
        localStorage.setItem('linksLang',links1Lang.en)
        for (let lang in links1Lang.en) {
            links[lang].innerHTML=links1Lang.en[lang]

         }
         localStorage.setItem('links2Lang',links2Lang.en)
         for (let index in links2Lang.en) {
           links2[index].innerHTML=links2Lang.en[index]
         }
         localStorage.setItem('LondontitleLang','London Based Creative Studio')
        LondonTitle.innerHTML=localStorage.getItem('LondontitleLang')
        localStorage.setItem('langBtnInner','AZ')
         chngLangBtn.innerHTML=localStorage.getItem('langBtnInner')

    }
    
})
for (let lang in links1Lang.az) {
    links[lang].innerHTML=localStorage.getItem('linksLang').split(',')[lang]
 }
 chngLangBtn.innerHTML=localStorage.getItem('langBtnInner')
 for (let index in links2Lang.az) {
    links2[index].innerHTML=localStorage.getItem('links2Lang').split(',')[index]
 }
 LondonTitle.innerHTML=localStorage.getItem('LondontitleLang')







const darkLightBtn=document.querySelector('.sec2 .chng-backgr button')
const headersec2Logo=document.querySelector('.sec2 header .logo img')
const sec2=document.querySelector('.sec2')
const exitBtn=document.querySelector('.sec2 .exit-btn i')
darkLightBtn.addEventListener('click',function () {
    if (darkLightBtn.innerHTML == 'Light') {
        localStorage.setItem('sec2BackColor','white')
        sec2.style.background=localStorage.getItem('sec2BackColor')
        localStorage.setItem('linksColor','red')
        for(let index of links) {
            index.style.color=localStorage.getItem('linksColor')
        }
        localStorage.setItem('links2Color','red')
        for (let index of links2) {
            index.style.color=localStorage.getItem('links2Color')
        }
        localStorage.setItem('headerLogo',imgSource[1].src)
        headersec2Logo.setAttribute('src',localStorage.getItem('headerLogo'))
        localStorage.setItem('darkLightBtnInner','Dark')
        darkLightBtn.innerHTML=localStorage.getItem('darkLightBtnInner')
        localStorage.setItem('exitBtnColor','black')
        exitBtn.style.color=localStorage.getItem('exitBtnColor')
    }else{
        localStorage.setItem('sec2BackColor','black')
        sec2.style.background=localStorage.getItem('sec2BackColor')
        localStorage.setItem('linksColor','white')
        for(let index of links) {
            index.style.color=localStorage.getItem('linksColor')
        }
        localStorage.setItem('links2Color','white')
        for (let index of links2) {
            index.style.color=localStorage.getItem('links2Color')
        }
        localStorage.setItem('headerLogo',imgSource[0].src)
        headersec2Logo.setAttribute('src',localStorage.getItem('headerLogo'))
        localStorage.setItem('darkLightBtnInner','Light')
        darkLightBtn.innerHTML=localStorage.getItem('darkLightBtnInner')
        localStorage.setItem('exitBtnColor','white')
        exitBtn.style.color=localStorage.getItem('exitBtnColor')

    }
})
sec2.style.background=localStorage.getItem('sec2BackColor')
for(let index of links) {
    index.style.color=localStorage.getItem('linksColor')
}
for (let index of links2) {
    index.style.color=localStorage.getItem('links2Color')
}
headersec2Logo.setAttribute('src',localStorage.getItem('headerLogo'))
darkLightBtn.innerHTML=localStorage.getItem('darkLightBtnInner')
exitBtn.style.color=localStorage.getItem('exitBtnColor')








    
     