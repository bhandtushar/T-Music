
let mysong=document.querySelector(".mysong1");
let icon=document.querySelector("#icon1");
let Button=document.querySelector(".nav-btn")
let Playbtn=document.querySelector(".Play")
let lightmode=document.querySelector(".lightmode");
let body=document.querySelector("body");
let songGrid=document.querySelector(".song-grid");
let navbtn=document.uerySelector(".nav-btn");

navbtn.onclick=function(){
    if(navbtn.onclick){

    navbtn.src="login.html";
    }
}

icon.onclick = function() {
    if(mysong1.paused){
        mysong1.play();
        icon1.src="media/image9.jpg";
        Playbtn.innerText="Pause";

    }else{
        mysong1.pause();
        icon1.src ="media/image3.jpg";
        Playbtn.innerText="Play";
    }
   

}
Playbtn.onclick=function(){
    if(mysong1.paused){
        mysong1.play();
        icon1.src="media/image9.jpg";
        Playbtn.innerText="Pause";
        Playbtn.style.boxShadow="2px 4px 5px rgb(21, 212, 78)"; 

    }else{
        mysong1.pause();
        icon1.src ="media/image3.jpg";
        Playbtn.innerText="Play";
       Playbtn.style.boxShadow="2px 4px 5px red ";

    }
}
//light mode //

