// Randomness
function save() {
    let random = Math.ceil(Math.random()*6);
    let x = document.createElement('img');
    let nwork = document.getElementById('roll').classList.add('disabled');
if(random<=1) {
   
    x.setAttribute('src', "/img/kec.png");
    x.setAttribute('width', "150");
    x.setAttribute('height', "150");
    document.getElementById('result').innerHTML = "Unfortunately, you are supposed to die!";
    document.getElementById('result').style.color = "red"; 
    document.getElementById('dice').appendChild(x);
    nwork
}
else if (random<=2) {
   
    x.setAttribute('src', "/img/Screenshot_1.png");
    x.setAttribute('width', "150");
    x.setAttribute('height', "150");
    document.getElementById('result').src = "/img/Screenshot_1.png";
    document.getElementById('result').innerHTML = "Unfortunately, you are supposed to die!";
    document.getElementById('result').style.color = "red";
    document.getElementById('dice').appendChild(x);
    
    nwork
    
}
else if (random<=3) {
    
    x.setAttribute('src', "/img/Screenshot_2.png");
    x.setAttribute('width', "150");
    x.setAttribute('height', "150");
    document.getElementById('result').innerHTML = "Unfortunately, you are supposed to die!";
    document.getElementById('result').style.color = "red";
    document.getElementById('dice').appendChild(x);
    nwork
    
}
else if (random<=4) {
    x.setAttribute('src', "/img/Screenshot_3.png");
    x.setAttribute('width', "150");
    x.setAttribute('height', "150");
    document.getElementById('result').innerHTML = "Unfortunately, you are supposed to die!";
    document.getElementById('result').style.color = "red";
    document.getElementById('dice').appendChild(x);
    nwork
}
else if (random<=5) {
    x.setAttribute('src', "/img/Screenshot_4.png");
    x.setAttribute('width', "150");
    x.setAttribute('height', "150");
    document.getElementById('result').innerHTML = "Congrats, you survived!";
    document.getElementById('result').style.color = "green";
    document.getElementById('dice').appendChild(x);
    dnwork
} else if (random<=6){
    x.setAttribute('src', "/img/Screenshot_5.png");
    x.setAttribute('width', "150");
    x.setAttribute('height', "150");
    document.getElementById('result').innerHTML = "Congrats, you survived!";
    document.getElementById('result').style.color = "green";
    document.getElementById('dice').appendChild(x);
    nwork
}


};