'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let numDecimal = 0
  let m = 0
  let i = 0
  let num2 = num
  for(i = 0; i < num.length; i++) {
    m = Math.floor(num2/Math.pow(10,num.length - 1 - i))
    numDecimal += m*Math.pow(2,num.length - 1 - i)
    num2 = num2 - Math.pow(10,num.length - 1 - i)
  }
  return numDecimal
}

function DecimalABinario(num) {
  // tu codigo aca
  if (num == 0) {
    return num
  }
  else {
    const num3 = ''
    let numBinario = 0
    let num2 = num
    let i = 0
    while (num2 - Math.pow(2,i) >= 0) {
      let i = 0
      while (num2 - Math.pow(2,i) >= 0) {
        i = i + 1
      }
      numBinario += Math.pow(10,i - 1)
      num2 = num2 - Math.pow(2,i - 1)
    }
    return numBinario + num3
  }
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}