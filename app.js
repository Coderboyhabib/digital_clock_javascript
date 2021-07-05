function digitalClock() {
    let date = new Date();
    let hours = date.getHours();
    let minits = date.getMinutes();
    let seconds = date.getSeconds();
    let timeFormat = 'AM';

    if (hours === 0) {
        hours = 12;
    }
    if (hours > 12) {
        hours = hours - 12;
        timeFormat = 'PM';
    }

    if (hours < 10) {
        hours = '0' + hours;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    let finalTIme = `${hours}:${minits}:${seconds}`;

    document.getElementById('time').innerText = finalTIme;
    document.querySelector('small').innerText = timeFormat;
    setInterval(digitalClock, 1000);
};

digitalClock();