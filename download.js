function showwindow() {

    const button = document.getElementsByClassName("button-download")[0];
    const windowPopup = document.getElementsByClassName("pop-up-background")[0];
    const navbar = document.getElementsByClassName("nav")[0];
    
    button.addEventListener("click", function () {
        windowPopup.style.display = "block";
        navbar.style.display ="none";
    });

}

function closewindow(){
     const navbar = document.getElementsByClassName("nav")[0];
    const buttonclose = document.getElementById("closewindow")
    buttonclose.addEventListener("click", function (){
     const windowPopup = document.getElementsByClassName("pop-up-background")[0];


        navbar.style.display ="grid";
        windowPopup.style.display = "none";
    })
}