const NUM_PIPS = 24;
const MAX_CHECKERS = 15;



function init()
{
  //pip15.innerHTML = "<div class='circle-black' id='checker1'></div>";
  //document.getElementById("checker13_1_white").style.display = "block";

  var checkers = [];
  for (var i = 1; i <= NUM_PIPS; ++i)
  {
    checkers[i] = 0;
  }
  
  var i = 0;
  if (randInt(0,100))
  {
    var r = randInt(2,7);
    checkers[6] = r;
    i += r;
  }
  if (randInt(0,20))
  {
    var r = randInt(2,5);
    checkers[13] = r;
    i += r;
  }
  if (randInt(0,40))
  {
    var r = randInt(1,4);
    checkers[8] = r;
    i += r;
  }
  while (i < MAX_CHECKERS)
  {
    if (randInt(0,10) && i < MAX_CHECKERS - 1)
    {
      ++i;
      var r = randInt(1,24);
      if (r == 19 && randInt(0, 200) )
      {
        r = randInt(20, 24);
      }
      else if (r == 17 && randInt(0, 50) )
      {
        r = randInt(3, 11);
      }
      else if (r == 12 && randInt(0, 50) )
      {
        r = randInt(4, 11);
      }
      checkers[r] += 2;
    }
    else
    {
      var r = randInt(1,24);
      if ((r == 19 || r == 17 || r == 12) && randInt(0,50))
        r = 5;
      checkers[r]++;
    }
    ++i;
  }





  for (var i = 1; i < checkers.length; ++i)
  {
    for (var j = 1; j <= 5; ++j)
    {
      if (checkers[i] >= j)
      {
        document.getElementById("checker" + i + "_" + j + "_white").style.display = "block";
        if (checkers[i] > 5 && j == 5)
          document.getElementById("checker" + i + "_" + j + "_white").innerHTML = checkers[i];
      }
    }
  }
  divDebug.innerHTML = checkers;
}


function randInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}