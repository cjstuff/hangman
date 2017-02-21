/**
 * Created by htiwari on 21/02/2017.
 */
$(document).ready(function () {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];


  var word ;              // Selected word
  var guess ;             // Geuss
  var guesses = [ ];      // Stored geusses
  var lives ;             // Lives
  var counter ;           // Count correct geusses
  var space;              // Number of spaces in word '-'

  // Get elements
  var showLives = document.getElementById("mylives");
  //var hangmanImg = document.getElementById("hangmanImg");



  // create alphabet ul
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('div');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('button');
      list.type = 'button';
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      list.className = 'btn btn-outline-primary'
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }


  // Create guesses ul
   result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }

  // Show lives
   comments = function () {
     console.log(lives);
     console.log("static/img/stage" + (8-lives).toString() + ".PNG");
    showLives.innerHTML = "You have " + (lives).toString() + " lives";
    hangmanImg.src = "static/img/stage" + (8-lives).toString() + ".PNG#" + new Date().getTime();

    if (lives < 1) {
      showLives.innerHTML = "Game Over";
      myButtons.style.visibility= 'hidden';
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showLives.innerHTML = "You Win!";
        myButtons.style.visibility= 'hidden';
      }
    }
  }


  // OnClick Function
   check = function () {
    list.onclick = function () {
      var guess = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          guesses[i].innerHTML = guess;
          counter += 1;
        }
      }
      var j = (word.indexOf(guess));
      if (j === -1) {
        lives -= 1;
        comments();
      } else {
        comments();
      }
    }
  }


  // Play
  play = function (answer) {
    word = answer.toLowerCase();
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();
    guesses = [ ];
    lives = 8;
    counter = 0;
    space = 0;
    result();
    comments();
  }

  newGame();


   // Reset

  document.getElementById('reset').onclick = function() {
    location.reload();
  }
});


function newGame(){
  // creates random valid IMDB movie ID
  var movie = pad(Math.floor((Math.random() * 2155529) + 1), 7);
  $.ajax({
  type: "GET",
  url: "http://www.omdbapi.com/?i=tt"+ movie,
  data: "",
  success: function(data) {
        play(data.Title.replace(/[^a-zA-Z ]/g, ""));
      },
  error: function(data){
        play("Terminator");
  }
});
}

function pad(number, length) {
  var str = '' + number;
  while(str.length < length) {
    str = '0' + str;
  }
  return str;
}


