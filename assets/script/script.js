function okey(x) {
    var image = document.getElementById('okey','okey2','okey3','okey4','okey5','okey6','okey7','okey8','okey9','okey10');

    if (image.src.match("assets/img/plus.png")) {
        image.src = "assets/img/ok.png";
    }
    else {
        image.src = "assets/img/plus.png";
    }
}

const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Gündüz Modu";
    }else{
        modeText.innerText = "Gece Modu";
        
    }
});