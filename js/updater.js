document.getElementById("hostname").innerHTML = lightdm.hostname;
let date = new Date()
const hour = date.getHours();
const welcomeTypes = ['Good Morning', 'Good Afternoon', 'Good Evening'];
let weekday= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let welcomeText = '';
if (hour < 12) welcomeText = welcomeTypes[0];
else if (hour < 18) welcomeText = welcomeTypes[1];
else welcomeText = welcomeTypes[2];
document.getElementById('time-word').innerHTML=welcomeText
date_str = date.getDate() + " " + date.toLocaleString('default', { month: 'long' })
document.getElementById('date').innerHTML=date_str
document.getElementById('year').innerHTML=date.getFullYear()
document.getElementById('day').innerHTML=weekday[date.getDay()]
document.getElementById('user').value=lightdm.users[0].username


const battery_icon = document.getElementById("battery")
if (lightdm.can_access_battery == true) {
    let level = lightdm.battery_data.level
    let ac = lightdm.battery_data.ac_status
    if (ac == true) {
        battery_icon.src = "assets/battery-ac.svg"
    }
    else if (level <= 12.5){
        battery_icon.src = "assets/battery-0.svg"
    }
    else if (level <= 25){
        battery_icon.src = "assets/battery-1.svg"
    }
    else if (level <= 37.5){
        battery_icon.src = "assets/battery-2.svg"
    }
    else if (level <= 50){
        battery_icon.src = "assets/battery-3.svg"
    }
    else if (level <= 62.5){
        battery_icon.src = "assets/battery-4.svg"
    }
    else if (level <= 75){
        battery_icon.src = "assets/battery-5.svg"
    }
    else if (level <= 87.5){
        battery_icon.src = "assets/battery-6.svg"
    }
    else if (level <= 100){
        battery_icon.src = "assets/battery-7.svg"
    }
} else {
    battery_icon.style.visibility = "hidden"
}