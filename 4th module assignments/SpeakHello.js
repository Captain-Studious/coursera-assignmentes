(function(window){

var helloSpeaker={};

// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
helloSpeaker.speakWord = "Hello";

helloSpeaker.speak = function (names) {
  console.log(helloSpeaker.speakWord + " " + names);
}

window.helloSpeaker=helloSpeaker;
window.names=names;
})(window);