const powerBtn = document.getElementById("power-btn")
const authForm = document.getElementById("auth-form")
const powerOptions = document.getElementById("power-options")
const shtdwnBtn = document.getElementById("shutdown")
const rsrtBtn = document.getElementById("restart")
const susBtn = document.getElementById("suspend")
const body = document.getElementById('body');

function hide_form() {
    authForm.style.visibility = "hidden"
}
function show_form() {
    authForm.style.visibility = "visible"
}
function hide_pwr_options() {
    powerOptions.style.visibility = "hidden"
}
function show_pwr_options() {
    powerOptions.style.visibility = "visible"
}

// Shows Power Dialog
powerBtn.onclick = function() {
    authForm.style.opacity = 0;
    powerOptions.style.opacity = 1
    setTimeout(hide_form, 400)
    show_pwr_options()
}

document.addEventListener('keydown', function(event){
    if (authForm.style.visibility === "hidden") {
        if(event.key === "Escape") {
            powerOptions.style.opacity = 0
            setTimeout(hide_pwr_options, 200)
            authForm.style.opacity = 1;
            show_form()
        }
    }
})

body.addEventListener("click", function () {
    if (authForm.style.visibility == "hidden") {
        powerOptions.style.opacity = 0
        setTimeout(hide_pwr_options, 200)
        authForm.style.opacity = 1;
        show_form()
    }
}, false);
powerOptions.addEventListener("click", function (ev) {
    ev.stopPropagation(); 
}, false);

// Start checking if power option is available

if (lightdm.can_suspend == false) {
    susBtn.style.cursor = "not-allowed"
}
if (lightdm.can_restart == false) {
    rsrtBtn.style.cursor = "not-allowed"
}
if (lightdm.can_shutdown == false) {
    shtdwnBtn.style.cursor = "not-allowed"
}