let focus = document.getElementById('focus')
let shortBreak = document.getElementById('short')
let longBreak = document.getElementById('long')
let minutes = document.getElementById('minutes').innerHTML
let seconds = document.getElementById('seconds').innerHTML
let timeControl = document.getElementById('control')
let pomodoroCount = document.getElementById('num').innerHTML
let pomodoroCounter = document.getElementById('pomodoro-counter').innerHTML
let pomodoroOver = document.getElementById('pomodoro-over').innerHTML
let timer = false
let switching = true
let clickedFocus = false
let clickedShort = true
let clickedLong = true

function focusTimer() {
    // check if timer is running, and prompt user to either stop or not
    if (clickedFocus) {
        if (timer) {
            let isConfirmed = confirm('Timer is running, switch to focus timer anyway?')
            if (isConfirmed) {
                clearInterval(timer)
                timer = false
                timeControl.classList.remove('fa-pause-circle')
                timeControl.classList.add('fa-play-circle')
                switching = true
            } else {
                switching = false
            }
        }
        if (switching) {
            focus.classList.add('active')
            shortBreak.classList.remove('active')
            longBreak.classList.remove('active')
            minutes = 25
            seconds = 0
            document.getElementById('minutes').innerHTML = formatDigit(25)
            document.getElementById('seconds').innerHTML = formatDigit(0)
            clickedFocus = false
            clickedShort = true
            clickedLong = true
        }
    }
}

function shortBreakTimer() {
    if (clickedShort) {
        // check if timer is running, and prompt user to either stop or not
        if (timer) {
            let isConfirmed = confirm('Timer is running, switch to short break anyway?')
            if (isConfirmed) {
                clearInterval(timer)
                timer = false
                timeControl.classList.remove('fa-pause-circle')
                timeControl.classList.add('fa-play-circle')
                switching = true
            } else {
                switching = false
            }
        }
        if (switching) {
            shortBreak.classList.add('active')
            focus.classList.remove('active')
            longBreak.classList.remove('active')
            minutes = 5
            seconds = 0
            document.getElementById('minutes').innerHTML = formatDigit(5)
            document.getElementById('seconds').innerHTML = formatDigit(0)
            clickedFocus = true
            clickedShort = false
            clickedLong = true
        }
    }
}

function longBreakTimer() {
    if (clickedLong) {
        // check if timer is running, and prompt user to either stop or not
        if (timer) {
            let isConfirmed = confirm('Timer is running, switch to long break anyway?')
            if (isConfirmed) {
                clearInterval(timer)
                timer = false
                timeControl.classList.remove('fa-pause-circle')
                timeControl.classList.add('fa-play-circle')
                switching = true
            } else {
                switching = false
            }
        }
        if (switching) {
            longBreak.classList.add('active')
            focus.classList.remove('active')
            shortBreak.classList.remove('active')
            minutes = 15
            seconds = 0
            document.getElementById('minutes').innerHTML = formatDigit(15)
            document.getElementById('seconds').innerHTML = formatDigit(0)
            clickedFocus = true
            clickedShort = true
            clickedLong = false
        }
    }
}

function checkControl() {
    if (timeControl.classList.contains('fa-play-circle')) {
        if (minutes != 0) {
            timeControl.classList.remove('fa-play-circle')
            timeControl.classList.add('fa-pause-circle')
            timer = setInterval(pomodoroTimer, 1000)
        }
    } else {
        timeControl.classList.remove('fa-pause-circle')
        timeControl.classList.add('fa-play-circle')
        clearInterval(timer)
    }
}

function pomodoroTimer() {
    // check seconds first
    // check if seconds is equals to 0, then decrement by 1 the minutes
    if (seconds == 0) {
        minutes--
        document.getElementById('minutes').innerHTML = formatDigit(minutes)
        seconds = 60
    }
    seconds--
    document.getElementById('seconds').innerHTML = formatDigit(seconds)

    if (seconds == 0 && minutes == 0) {
        clearInterval(timer)
        timer = false
        timeControl.classList.remove('fa-pause-circle')
        timeControl.classList.add('fa-play-circle')
    }

    // check for time if both minutes and seconds for focus is 0, then proceed to short break
    if (seconds == 0 && minutes == 0 && focus.classList.contains('active')) {
        setClickShort()
    }
    // check for time if both minutes and seconds for short break is 0, then proceed to long break
    if (seconds == 0 && minutes == 0 && shortBreak.classList.contains('active')) {
        if (pomodoroCounter == pomodoroOver) {
            longBreakTimer()
        } else {
            setClickFocus()
            pomodoroCounter++
            document.getElementById('pomodoro-counter').innerHTML = pomodoroCounter
        }
    }
    // check if long break is done, proceed to next pomodoro
    if (seconds == 0 && minutes == 0 && longBreak.classList.contains('active')) {
        setClickFocus()
    }
}

function stop() {
    if (timer) {
        let isConfirm = confirm('Are you sure to stop everything?')
        if (isConfirm) {
            pomodoroCounter = 1
            pomodoroOver = pomodoroCount
            document.getElementById('pomodoro-counter').innerHTML = pomodoroCounter
            document.getElementById('task-display').innerHTML = 'No Task Added.'
            document.getElementById('num').innerHTML = '4'
            timeControl.classList.remove('fa-pause-circle')
            timeControl.classList.add('fa-play-circle')
            clearInterval(timer)
            timer = false
            setClickFocus()
        }
    }
}

function reset() {
    if (timer) {
        let isConfirm = confirm('Are you sure to reset the timer?')
        if (isConfirm) {
            timeControl.classList.remove('fa-pause-circle')
            timeControl.classList.add('fa-play-circle')
            clearInterval(timer)
            timer = false
            if (focus.classList.contains('active')) {
                setClickFocus()
            } else if (shortBreak.classList.contains('active')) {
                setClickShort()
            } else if (longBreak.classList.contains('active')) {
                setClickLong()
            }
        }
    }
}

function formatDigit(time) {
    return time < 10 ? (`0${time}`) : time;
}

function addCount() {
    if (pomodoroCount != 10) {
        pomodoroCount++
        document.getElementById('num').innerHTML =  pomodoroCount
    }
}

function deductCount() {
    if (pomodoroCount != 1) {
        pomodoroCount--
        document.getElementById('num').innerHTML =  pomodoroCount
    }
}

function saveConfig() {
    let value = document.getElementById('task').value;
    if (value === '') {
        alert('No task added');
    } else {
        document.getElementById('task-display').innerHTML = value
        document.getElementById('task').value = ''
        pomodoroOver = pomodoroCount
        document.getElementById('pomodoro-over').innerHTML = pomodoroCount
    }
}

// these functions enable the button to either not be clickable when timer is running or just switch between timer
function setClickFocus() {
    clickedFocus = true
    focusTimer()
    clickedFocus = false
}

function setClickShort() {
    clickedShort = true
    shortBreakTimer()
    clickedShort = false
}

function setClickLong() {
    clickedLong = true
    longBreakTimer()
    clickedLong = false
}