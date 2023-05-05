const powerBtn = document.getElementById("power-btn")
const authForm = document.getElementById("auth-form")
const powerOptions = document.getElementById("power-options")
const shtdwnBtn = document.getElementById("shutdown")
const rsrtBtn = document.getElementById("restart")
const susBtn = document.getElementById("suspend")

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
function disable_pwr_option(element) {
    element.style.cursour = "not-allowed"
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
// Start checking if power option is available
if (lightdm.can_suspend == false) {
    disable_pwr_option(susBtn)
}
if (lightdm.can_restart == false) {
    disable_pwr_option(rsrtBtn)
}
if (lightdm.can_shutdown == false) {
    disable_pwr_option(shtdwnBtn)
}