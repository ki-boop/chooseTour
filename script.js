
let array =[];
let cur = 0;
let i = 0;
let k = 100;
let scrl1 = document.getElementById('img1')
let scrl2 = document.getElementById('img2')
let scrl3 = document.getElementById('img3')
let timerI;
array.push  (scrl1);
array.push  (scrl2);
array.push  (scrl3);
let next;
let prev;
setInterval(() => {
    if (cur ==2){
        next = 0;
        prev = 2;
        cur = 0;
    }else{
        prev = +cur;
        next = +cur+1;
        cur+=1;
        
    }
   
        timerI = setInterval(() => {
        k--;
        array[prev].style.opacity = k/100 ;
        i=100-k;
        array[next].style.opacity = i/100 ;
        if(k <= 0||i>=100) clearInterval(timerI);
    }, 20);

    k=100;
    i=0;
}, 8000);
//-----------------------------------------------------------------------------------------------
let dol = document.getElementById('dol');
let euro = document.getElementById('euro');
let rubl = document.getElementById('rubl')
let funt = document.getElementById('funt')



function imgesDol (){
    
        dol.style.opacity = 1;
        euro.style.opacity = 0.5;
        rubl.style.opacity = 0.5;
        funt.style.opacity = 0.5;
}
function imgesEu (){
        euro.style.opacity = 1;
        dol.style.opacity = 0.5;
        rubl.style.opacity = 0.5;
        funt.style.opacity = 0.5;
}
function imgesRub (){
        rubl.style.opacity = 1;
        euro.style.opacity = 0.5;
        dol.style.opacity = 0.5;
        funt.style.opacity = 0.5;
        
    
}
function imgesFu (){
        funt.style.opacity = 1;
        euro.style.opacity = 0.5;
        rubl.style.opacity = 0.5;
        dol.style.opacity = 0.5;
        
}
//----------------------------------------------------------------------------------------------
function check1(){
    console.log(check.checked);
    return check.checked
}


//-----------------------------------------------------------------------------------------------
let SanktPeterburg = {
    region : "Россия",
    pereezd : 'Авто-транспорт',
    language : 'Русский',
    climat : 'Холодный',
    beach : 'Нет',
    valuta : 'Рубль',
    child : true,
};

let OAE = {
    region : 'Африка',
    pereezd : 'Самолет',
    language : 'Арабский',
    climat : 'Теплый',
    beach : 'Да',
    valuta : 'Доллар',
    child : true,
}

let Paris = {
    region : 'Европа',
    pereezd : 'Самолет',
    language : 'Французский',
    climat : 'Умеренный',
    beach : 'Нет',
    valuta : 'Евро',
    child : true,
}

let Berlin = {
    region : 'Европа',
    pereezd : 'Самолет',
    language : 'Немецкий',
    climat : 'Умеренный',
    beach : 'Нет',
    valuta : 'Евро',
    child : true,
}

let Maldiv = {
    region : 'Острова',
    pereezd : 'Самолет',
    language : 'Немецкий',
    climat : 'Теплый',
    beach : 'Да',
    valuta : 'Доллар',
    child : true,
}

let Kuba = {
    region : 'Острова',
    pereezd : 'Самолет',
    language : 'Другой',
    climat : 'Теплый',
    beach : 'Да',
    valuta : 'Доллар',
    child : true,
}
let Ispania= {
    region : 'Европа',
    pereezd : 'Самолет',
    language : 'Испанский',
    climat : 'Теплый',
    beach : 'Да',
    valuta : 'Евро',
    child : true,
}

let Italia= {
    region : 'Европа',
    pereezd : 'Самолет',
    language : 'Другой',
    climat : 'Теплый',
    beach : 'Да',
    valuta : 'Евро',
    child : true,
}
 let England = {
    region : 'Острова',
    pereezd : 'Самолет',
    language : 'Английский',
    climat : 'Холодный',
    beach : 'Нет',
    valuta : 'Фунт',
    child : true,
    
}
 let VAshington = {
    region : 'Америка',
    pereezd : 'Самолет',
    language : 'Английский',
    climat : 'Теплый',
    beach : 'Да',
    valuta : 'Доллар',
    child : true,
}
let Rio = {
    region : 'Америка',
    pereezd : 'Самолет',
    language : 'Английский',
    climat : 'Теплый',
    beach : 'Да',
    valuta : 'Доллар',
    child : true,
}
let Egept = {
    region : 'Африка',
    pereezd : 'Самолет',
    language : 'Английский',
    climat : 'Теплый',
    beach : 'Да',
    valuta : 'Доллар',
    child : true,
}
//---------------------------------------------------------------------------------------------------------------------
function find (){
   sessionStorage.clear()
    
    let curr = {
        region: document.getElementById('place1').value,
        pereezd: document.getElementById('plane').value,
        language: document.getElementById('language').value,
        climat: document.getElementById('clipart').value,
        beach: document.getElementById('beach').value,
        valuta: 'Другое',
        child: check1()
    }
    //console.log(lastForm);

   
    if (dol.style.opacity == 1){
        curr.valuta = 'Доллар';
    }
    if (euro.style.opacity == 1){
        curr.valuta = 'Евро';
    }
    if (rubl.style.opacity == 1){
        curr.valuta = 'Рубль';
    }
    if (funt.style.opacity == 1){
        curr.valuta = 'Фунт';
    }
    sessionStorage.setItem('lastForm', JSON.stringify(curr));

   
    console.log(person2)
   
//------------------------------------------------------------------------------------------------------------------------
    if(!deepEqul(curr,England)) {
        engl.style.display = 'none';
    }else{
        engl.style.display = 'flex'
    }
    if(!deepEqul(curr,Egept)) {
        eg.style.display = 'none';
    }else{
        eg.style.display = 'flex'
    }
    if(!deepEqul(curr,Rio)) {
        rio.style.display = 'none';
    }else{
        rio.style.display = 'flex'
}
    if(!deepEqul(curr,VAshington)) {
        vash.style.display = 'none';
    }else{
        vash.style.display = 'flex'
    }
    if(!deepEqul(curr,Italia)) {
        rome.style.display = 'none';
    }else{
        rome.style.display = 'flex'
    }
    if(!deepEqul(curr,Ispania)) {
        isp.style.display = 'none';
    }else{
        isp.style.display = 'flex'
    }
    if(!deepEqul(curr,Kuba)) {
        cuba.style.display = 'none';
    }else{
        cuba.style.display = 'flex'
    }
    if(!deepEqul(curr,Maldiv)) {
        mald.style.display = 'none';
    }else{
        mald.style.display = 'flex'
    }
    if(!deepEqul(curr,Berlin)){
        berl.style.display = 'none';
    }else{
        berl.style.display = 'flex'
    }
    if(!deepEqul(curr,Paris)) {
        paris.style.display = 'none';
    }else{
        paris.style.display = 'flex'
    }
    if(!deepEqul(curr,OAE)) {
        OAR.style.display = 'none';
    }else{
        OAR.style.display = 'flex'
    }
    if(!deepEqul(curr,SanktPeterburg)) {
        peter.style.display = 'none';
    }else{
        peter.style.display = 'flex'
    }
    
    
    
 

}
function deepEqul (form,country){
    console.log(form);
    console.log(country);
    //console.log(JSON.stringify(form) == JSON.stringify(country));
    return JSON.stringify(form) == JSON.stringify(country);
}


//------------------------------------------------------------------------------------------------------------
let peter = document.getElementById('Peter')
let eg = document.getElementById('Egipet')
let rio = document.getElementById('rio')
let vash = document.getElementById('vash')
let engl = document.getElementById('engl')
let rome = document.getElementById('rome')
let isp = document.getElementById('isp')
let cuba = document.getElementById('cuba')
let mald = document.getElementById('mald')
let berl = document.getElementById('berl')
let OAR = document.getElementById('OAR')
let paris = document.getElementById('paris')
let child1 = document.getElementById('child')
let check = document.getElementById ('check')


   
let row = sessionStorage.getItem('lastForm')
let person2 = JSON.parse(row);




     curr = person2   
     document.getElementById('plane').value = curr.pereezd
     document.getElementById('place1').value = curr.region
     document.getElementById('language').value = curr.language
     document.getElementById('clipart').value = curr.climat
     document.getElementById('beach').value = curr.beach
     if(curr.valuta == 'Рубль'){
         rubl.style.opacity = 1;
     }
     if(curr.valuta == 'Доллар'){
        dol.style.opacity = 1;
    }
    if(curr.valuta == 'Евро'){
        euro.style.opacity = 1;
    }
    if(curr.valuta == 'Фунт'){
        funt.style.opacity = 1;
    }
    if (curr.child){
        check.checked = true;
    }else {
        check.checked = false;
    }

    

    
    //  document.getElementById('valuta').value = curr.valuta
    //  document.getElementById('plane').value = curr.child
console.log(curr.pereezd);


        if(!deepEqul(curr,England)) {
            engl.style.display = 'none';
        }else{
            engl.style.display = 'flex'
        }
        if(!deepEqul(curr,Egept)) {
            eg.style.display = 'none';
        }
        if(!deepEqul(curr,Rio)) {
            rio.style.display = 'none';
        }
        if(!deepEqul(curr,VAshington)) {
            vash.style.display = 'none';
        }
        if(!deepEqul(curr,Italia)) {
            rome.style.display = 'none';
        }
        if(!deepEqul(curr,Ispania)) {
            isp.style.display = 'none';
        }
        if(!deepEqul(curr,Kuba)) {
            cuba.style.display = 'none';
        }
        if(!deepEqul(curr,Maldiv)) {
            mald.style.display = 'none';
        }
        if(!deepEqul(curr,Berlin)){
            berl.style.display = 'none';
        }
        if(!deepEqul(curr,Paris)) {
            paris.style.display = 'none';
        }
        if(!deepEqul(curr,OAE)) {
            OAR.style.display = 'none';
        }
        if(!deepEqul(curr,SanktPeterburg)) {
            peter.style.display = 'none';
        }else{
            peter.style.display = 'flex'
        }