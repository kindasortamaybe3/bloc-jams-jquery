{
    $('button#play-pause').on('click', function () {
        player.playPause();
        $(this).attr('playState', player.playState);
    });
}