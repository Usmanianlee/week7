let sentence = 'The quick brown fox\n jump over the lazy dog'

//change to uppercase
sentence = sentence.toUpperCase()

//change to lowercase 
sentence = sentence.toLowerCase()
console.log(sentence)

//the length of the str
let strLength = sentence.length
console.log(strLength)

//the first character
let firstChar = sentence[0]
console.log(firstChar)

//the first character
let tenthChar = sentence[9]
console.log(tenthChar)


//the character at 22
let char22 = sentence.charAt(22)
console.log(char22)

//add cat to the str
let cat = ' and cat'
let catStr =sentence.concat(cat)
console.log(catStr)

//replace dog with goat
sentence = sentence.replace('dog', 'goat')
console.log(sentence)

//replace all 'the' with 'that'
console.log(sentence.replaceAll('the', 'that'))

//repeat 5x
console.log(sentence.repeat(5))

//cut out some str
console.log(sentence.slice(0, sentence.indexOf('fox')*3))

//cut from jump to end of the str
console.log(sentence.slice(sentence.indexOf('jump'), sentence.length-1))

//convert a str to an array
console.log(sentence.split(''))

//convert to a str
let num = 225
console.log(num.toString(16))

//does the str contain fox
console.log(sentence.includes('fox', 30))
console.log(sentence.includes('fox'))
console.log(sentence.includes('goat'))

//whether starts with
console.log(sentence.startsWith('The'))

//whether end with
console.log(sentence.endsWith('goat'))