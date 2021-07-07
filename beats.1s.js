#!/usr/bin/env /usr/local/bin/node
// shebang for bitbar - comment out line 1 for web deploy

/*
Internet Time Bitbar Plugin
J L Hoover
Version 1.0 2021.02.20 (9 Sol 2271)
*/

// Bitbar Metadata
// bitbar.title - Internet Time
// bitbar.version - Version 1.0
// bitbar.author - Jerry L Hoover
// bitbar.author.github - realjhoo
// bitbar.desc - Swatch internet time (.beats)
// bitbar.image - working...
// bitbar.dependencies - working...
// bitbar.abouturl - URL to about

function getBeats() {
  const secondsPerBeat = 86.4;

  let time = new Date();
  let seconds = time.getUTCSeconds(),
    minutes = time.getUTCMinutes(),
    hours = time.getUTCHours();

  // correct for "Biel Mean Time" i.e.,
  // Central European Standard -> UTC + 1
  if (hours === 23) {
    hours = 0;
  } else {
    hours++;
  }

  let secondsSoFar = convertToSeconds(hours, minutes, seconds);

  // * * * convert to swatch internet time * * *
  // chop excessive precision
  let internetTime = (secondsSoFar / secondsPerBeat).toFixed(2);
  // pad with leading zeros
  internetTime = "000" + internetTime;
  // cut to correct length start with back
  internetTime = internetTime.slice(-6);
  // add the @
  internetTime = "@" + internetTime;

  // log out displays on the menu bar
  console.log(internetTime);
}

// --------------------------------------------------------
function convertToSeconds(hours, minutes, seconds) {
  return (hours * 60 + minutes) * 60 + seconds;
}

getBeats();
