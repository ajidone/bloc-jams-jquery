class Helper {
  playPauseAndUpdate(song) {
    player.playPause(song);
    let duration = player.getDuration();
    if(duration >= 0) {
      $('.total-time').text(player.prettyTime(player.getDuration()));
    } else {
      $('.total-time').text(player.prettyTime(song.duration));
    }
  }
}

const helper = new Helper();
