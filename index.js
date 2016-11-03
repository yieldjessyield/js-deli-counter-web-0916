var katzDeli = [];

function takeANumber(currentLine, newCus){

  currentLine.push(newCus)
  return `Welcome, ${newCus}. You are number ${currentLine.length} in line.`

}

function nowServing(currentLine){
  if (currentLine.length === 0) {
     return "There is nobody waiting to be served!"
  } else {
  var next = currentLine.shift()
  return `Currently serving ${next}.`
  }

}

function currentLine(line){
  if (line.length === 0) {
    return "The line is currently empty."
  }else{
    var i = 0
    var order = []
    while (i < line.length){
      order.push(` ${i + 1 }. ${line[i]}`)
      i += 1
    }
    return `The line is currently:`+ order.join(',')
  };
}



//   function isPerson(element) {
//   return element === name
// }

// currentLine.findIndex(isPerson)

