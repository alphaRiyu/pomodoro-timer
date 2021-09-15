<!doctype html>
<html lang="en">

<head>
    <title>Pomodoro Timer</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <!-- Font awesome cdn -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">

    <!-- Custom CSS -->
    <link rel="stylesheet" href="/assets/css/master.css">

    <!-- Web icon -->
    <link rel="icon" type="image/png" href="/assets/img/timer_100px.png" />

</head>

<body>

    <div class="pomodoro-section">
        <div class="pomodoro-timer-content">
            <div class="timer-options">
                <button id="focus" class="btn-option active" onclick="focusTimer()">Focus</button>
                <button id="short" class="btn-option" onclick="shortBreakTimer()">Short break</button>
                <button id="long" class="btn-option" onclick="longBreakTimer()">Long break</button>
            </div>
            <div class="timer">
                <div class="minute-section">
                    <h3 id="minutes">25</h3>
                </div>
                <div class="divider-section">
                    <h3>:</h3>
                </div>
                <div class="second-section">
                    <h3 id="seconds">00</h3>
                </div>
            </div>
            <div class="timer-controls">
                <button id="stop" class="control-btn" onclick="stop()">
                    <i class="far fa-stop-circle"></i>
                </button>
                <button id="start-pause" class="control-btn" onclick="checkControl()">
                    <i id="control" class="far fa-play-circle"></i>
                </button>
                <button id="reset" class="control-btn" onclick="reset()">
                    <i class="fas fa-redo-alt"></i>
                </button>
            </div>
        </div>
        <div class="pomodoro-task-content">
            <div class="display-task-pomodoro">
                <h3>FOCUS!</h3>
                <div class="pomodoro-count">
                    <h3>Pomodoro:</h3>
                    <h3 id="pomodoro-counter">1</h3>
                    <h3>/</h3>
                    <h3 id="pomodoro-over">4</h3>
                </div>
                <div class="pomodoro-task">
                    <h4 id="task-display">No Task Added.</h4>
                </div>
            </div>
            <div class="add-pomodoro-task">
                <div class="add-task">
                    <label for="task">Add task</label>
                    <input type="text" id="task" name="task">
                </div>
                <div class="count">
                    Number of pomodoro
                    <button id="minus-1" onclick="deductCount()"><i class="fas fa-minus"></i></button>
                    <p id="num">4</p>
                    <button id="plus-1" onclick="addCount()"><i class="fas fa-plus"></i></button>
                </div>
                <button id="save-button" class="save" onclick="saveConfig()">Save</button>
            </div>
        </div>
        <div class="custom-shape-divider-bottom-1631700590">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
            </svg>
        </div>
    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

    <!-- Custom JS -->
    <script src="/assets/js/master.js"></script>

</body>

</html>