document.addEventListener("DOMContentLoaded",function(){
    var background = document.getElementsByClassName('banner');
    var header = document.getElementsByClassName("header");
    var imgs = [
        "./images/bg7.jpg",
        "./images/bg9.jpg"
    ]
    var curent = 0;
    function chuyenslide (){
        background[0].setAttribute("style","background-image: url("+imgs[curent]+");");
        console.log(curent);
        if(curent >= imgs.length - 1){
            curent = 0;
        }else {
            curent++;
        }
    }
    setInterval(chuyenslide,3000);
    window.addEventListener("scroll",function(){
        if(window.pageYOffset >= 120){
            console.log("200");
            header[0].classList.add("fixed");
        }else if(window.pageYOffset < 140){
            header[0].classList.remove("fixed");
        }
    });
    console.log(background);
},false);
