var target;
var color=["blue","cyan","gold","gray","green","magenta","orange","red","white","yellow"];
var guess_input;
var finished=false;
var guess=0;

function do_game()
{
  var random_color=color(math.floor(math.random*(color.length));//get a random value from array

  target=random_color.toLowerCase();

}
while(!finished)
{
  guess_inputtext=prompt("I am thinking of one of these colors:\n\n" +color \n\n+"what color I am thinking of?");
  guess_input=guess_inputtext.toLowerCase();
  guess+=1;
  finished=check_guess();
}
function check_guess()
{
  if(isNaN(guess_input))
  {
    alert("Sorry, I don't recognize your color.\n\n\n" + "Please try again");
    return false;
  }
  if(target>guess_input)
  {
    alert("Sorry, your guess is not correct! \n\n" +
                      "Hint: your color is alphabetically lower than mine. \n\n" +
                      "Please try again.");
                      return false;
  }
  if(target<guess_input)
  {
    lert("Sorry, your guess is not correct! \n\n" +
                      "Hint: your color is alphabetically higher than mine. \n\n" +
                      "Please try again.");
                      return false;
  }
  if(target==guess_input)
  {
    style.background-color=target;
    alert("congratulations You have guessed the color! \n\n It took you "+guesses+"guesses to finish the game! \n\n You can see the color in the background");
  }
}
