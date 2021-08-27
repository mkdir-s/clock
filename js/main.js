const secondArrow = document.querySelector('.second-arrow');
const minuteArrow = document.querySelector('.min-arrow');
const hourArrow = document.querySelector('.hour-arrow');
const arrows = document.querySelectorAll('arrow');
const userTime = document.querySelector('.time');
const userDate = document.querySelector('.date');
const modeButton = document.querySelector('.mode');

const daysName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthsName = ["January", "February", "March", "April", "May", "Juny", "July", "August", "Septemper", "October", "November", "December"];



function setDate() {
    const date = new Date();
    const seconds = date.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360 + 90);
    secondArrow.style.transform = `rotate(${secondsDegrees}deg)`;
    const minutes = date.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360 + 90);
    minuteArrow.style.transform = `rotate(${minutesDegrees}deg)`;
    const hours = date.getHours();
    const hoursDegrees = ((hours / 12) * 360 + 90);
    hourArrow.style.transform = `rotate(${hoursDegrees}deg)`;
    getDate();
}
function getDate() {
    const time = new Date();
    const day = time.getDay();
    const month = time.getMonth();
    const date = time.getDate();
    const year = time.getFullYear();
    const currentTime = time.toLocaleTimeString();
    userTime.textContent = currentTime;
    userDate.innerHTML = `${daysName[day]}, ${monthsName[month]} <span class="black">${date}</span> | ${year} year`;
}
modeButton.addEventListener('click', (elem) => {
    const html = document.querySelector('html');
    if(html.classList.contains('dark')) {
        html.classList.remove('dark');
        elem.target.innerHTML = 'Dark mode';
    } else {
        html.classList.add('dark')
        elem.target.innerHTML = 'Light mode'
    }
})

setInterval(setDate, 1000);