'use strict'

window.onload = function () {
  var button = document.querySelector("button");
  var input = document.getElementById("txtfield");
  var dropdown = document.getElementById("ddfield")
  var result = document.getElementById("result");


  input.addEventListener("input", function (e) {
    updateResult()
  })

  dropdown.addEventListener("change", function (e) {
    updateResult()
  })

  button.addEventListener("click", function (e) {
    updateResult()
  })

function updateResult ()
  var thevalue = input.value
  var thepercentage = dropdown.options[dropdown.selectedIndex].value;
  result.innerHTML= valadate(thevalue,thepercentage)
}

function calculateTip (thevalue, percentage) {
      return ((thevalue/100) * percentage ).toFixed(2)
}


function valadate (thevalue,thepercentage){
  thevalue = thevalue.replace('$','')

  var message
  if (thevalue%1 === 0)
      {
      if (thepercentage === 'how')
        {
          message = "Please pick a valid option DUNPKOFF"
        }
      else
        {
          message = "The correct amount to tip at  " + thepercentage + "% is $" + calculateTip(thevalue, thepercentage)
        }
      }
    else
   {
    message = "Please input a valid number"
   }
   return message
}

};
