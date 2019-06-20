$(document).ready(function(event){
  event.preventDefault();

  var sentence =["It is a beautiful day to be alive"]
  var vowels = ["a", "e", "i","o","u"]
  var replace = vowels.replaceAll("[aeiou]","-");
});

sentence.forEach(function(letter){
 vowels.forEach(function(vowel){
   $("#result").text(sentence);


 });

});
