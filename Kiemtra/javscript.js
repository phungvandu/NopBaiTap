document.addEventListener("DOMContentLoaded", function () {

    console.log("oke");
    var menu = document.getElementsByClassName("menu");
    var deletemenu = document.getElementsByClassName("delete");
    var targetmenu = document.getElementsByClassName("targetmenu");
    console.log(menu);
    console.log(deletemenu);
    console.log(targetmenu);

    deletemenu[0].addEventListener('click', function () {
        menu[0].classList.remove("block");
        targetmenu[0].classList.remove("hiden");
        deletemenu[0].classList.remove("block");

        menu[0].classList.add("hiden");
        targetmenu[0].classList.add("none");
    });
    targetmenu[0].addEventListener('click', function () {
        menu[0].classList.add("block");
        deletemenu[0].classList.add("block");
        targetmenu[0].classList.add("hiden");
    });

}, false);