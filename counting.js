

var countLetters = function(string){
  var object = {};
  var temp = string.split(" ").join("").split("")
  for(var i = 0; i < temp.length; i++){
    var count = 0;
    for(var n = 0; n < temp.length; n++){
      if(temp[i] == temp[n]){
        count += 1;
      }object[temp[i]] = count;
    }
  }return object;
}

console.log(countLetters("lighthouse in the house"))