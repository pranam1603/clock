const hours = document.querySelector('.hour');
const minutes = document.querySelector('.minute');
const seconds = document.querySelector('.second');
const toogle = document.querySelector('.toogle');
const dateEL = document.querySelector('.date');
const timeEL = document.querySelector('.time');
const circleEL = document.querySelector('.circle');

const ampm = hours >= 12 ? "PM" : "AM";

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

toogle.addEventListener('click', () => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        toogle.textContent = "Dark Mode"
    } else {
        html.classList.add('dark')
        toogle.textContent = "Light Mode"
    }
});

const setTime = () => {
    const time = new Date()
    const hour = time.getHours()
    const hourForClock = hour % 12;
    const minute = time.getMinutes()
    const second = time.getSeconds()
    const day = time.getDay()
    const date = time.getDate()
    const month = time.getMonth()

    hours.style.transform = `translate(-50%, -100%) rotate(${scale(hourForClock, 0, 11, 0, 360)}deg)`;
    minutes.style.transform = `translate(-50%, -100%) rotate(${scale(minute, 0, 59, 0, 360)}deg)`;
    seconds.style.transform = `translate(-50%, -100%) rotate(${scale(second, 0, 59, 0, 360)}deg)`;

    timeEL.innerHTML = `${hourForClock}:${minute < 10 ? `0${minute}` : minute} ${ampm}`
    dateEL.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

setTime()

setInterval(setTime, 1000)