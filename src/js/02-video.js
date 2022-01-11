var throttle = require('lodash.throttle');
    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    const stringCurrentTime = localStorage.getItem("videoplayer-current-time");
    
    const currentTime = JSON.parse(stringCurrentTime);

    player.setCurrentTime(currentTime)

    player.on('timeupdate', function (data) {

    const time = data.seconds;
    const stringTime = JSON.stringify(time)
    console.log(time);
    
        const setTime = localStorage.setItem("videoplayer-current-time", `${stringTime}`);
        throttle(setTime, 10000)
        // data is an object containing properties specific to that event
    });


// var throttle = require('lodash.throttle');

// const iframe = document.querySelector('iframe');
// const player = new Vimeo.Player(iframe);

// player.on('timeupdate', throttle(function (e) {
//     console.log(e.seconds);
//     //only for check
//     localStorage.setItem("videoplayer-current-time", `${e.seconds}`);
// }, 1000));
// const continueTime = localStorage.getItem("videoplayer-current-time");
// if (continueTime) { player.setCurrentTime(continueTime) };

// he


