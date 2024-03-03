 (function(window){


  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  
  for (var i=0; i<names.length; i++) {
    var small = function (){
      var sm = names[i].toLowerCase();
      // console.log(samll[i].toLowerCase());
      return sm;
  };
  var firstLetter = function(){
      const index = 0;
      var ch=small(i).charAt(index);
      return ch;
  };
  // console.log(firstLetter());

   
    if (firstLetter(i)=='j') {
      byeSpeaker.speak();

    } else {
      helloSpeaker.speak();
    }
  }



 })(window);
 
