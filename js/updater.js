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

