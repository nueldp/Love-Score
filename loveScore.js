// asking usert input, but we don't really use it, just in case we need it, so we save it.
var name=prompt("What is your name?")
var spouseName=prompt("What is your spouse name?")

//Creating random number and make it into range of 0-100
var n=Math.random()
n=(Math.floor(n*100))+1

// Tell the user their love score using n as love score
alert("Your love score is "+ n)
