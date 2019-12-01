class Player {
  constructor() {
    this.currentlyPlaying = album.songs[0];
    this.playState = 'stopped';
    this.volume = 80;
    this.soundObject = new buzz.sound(this.currentlyPlaying.soundFileUrl);
  }

  getDuration() {
    return this.soundObject.getDuration();
  }

  getTime() {
    return this.soundObject.getTime();
  }

  playPause(song = this.currentlyPlaying) {
    if (this.currentlyPlaying !== song) {
      // Stop the currently playing sound file (even if nothing is playing)
      this.soundObject.stop();
      // Clear classes on the song that's currently playing
      this.currentlyPlaying.element.removeClass('playing paused');

      // Update our currentlyPlaying and playState properties
      this.currentlyPlaying = song;
      this.playState = 'stopped';
      this.soundObject = new buzz.sound(this.currentlyPlaying.soundFileUrl);
    }
    if (this.playState === 'paused' || this.playState === 'stopped') {
      this.soundObject.setVolume(this.volume);
      //Play the song that is paused or stopped
      this.soundObject.play();
      //show playing
      this.playState = 'playing';
      //if song is paused or stop, return "playing"
      this.currentlyPlaying.element.removeClass('paused').addClass('playing');
    } else {
      //Otherwise, pause song
      this.soundObject.pause();
      this.playState = 'paused';
      //Clear classes on the song that's playing and add "paused"
      this.currentlyPlaying.element.removeClass('playing').addClass('paused');
    }
  }

  skipTo(percent) {
    //update our playstate properties
    if (this.playState !== 'playing') {
      return
    }
    //return with duration percentage
    this.soundObject.setTime((percent / 100) * this.soundObject.getDuration());
  }

  setVolume(percent) {
    this.volume = percent;
    this.soundObject.setVolume(percent);
  }
}


const player = new Player();