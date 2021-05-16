function generatePassword(options) {
  // define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  // dummy data of req.body
// const options = {
//     length: 12,
//     lowercase: 'on',
//     uppercase: 'on',
//     numbers: 'on',
//     excludeCharacters: '40'
//   }


  // create a collection to store things user picked up

    let collection = []

    if (options.lowercase === 'on') {
        collection = collection.concat(lowerCaseLetters.split(''))
    }

    if (options.uppercase === 'on') {
        collection = collection.concat(upperCaseLetters.split(''))
    }

    if (options.numbers === 'on') {
        collection = collection.concat(numbers.split(''))
    }

    if (options.symbols === 'on') {
        collection = collection.concat(symbols.split(''))
    }

  // remove things user do not need
    if (options.excludeCharacters) {
        console.log(`exclude characters: ${options.excludeCharacters}`)
        collection = collection.filter(
          character => !options.excludeCharacters.includes(character)
        )
      }
    
  // return error notice if collection is empty
  if (collection.length === 0) {
    return 'There is no valid character in your selection.'
  }

  
  // start generating password
    let password = ''
    for (let i = 0; i < options.length; i++) {
      password += sample(collection)
    }

  // define sample function to randomly return a item in an array
    function sample(array) {
      const index = Math.floor(Math.random() * array.length)
      return array[index]
    }


  // return the generated password
  //  console.log('password', password)
   return password
}

// export generatePassword function for other files to use
module.exports = generatePassword