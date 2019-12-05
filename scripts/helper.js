class Helper {
    //Method
    playPauseAndUpdate(song) {
        // Calling the method
        player.playPause(song);
        //Update the time
        const totalTime = player.getDuration();
        $('#time-control .total-time').text(totalTime);
    }
}

const helper = new Helper();