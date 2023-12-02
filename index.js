function teste(number){
  let counter = 0
  let numbers = []
  for(let i = 1; i < number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      counter += i
      numbers.push(i) 
    }
  }
  return console.log(`Resultado:  ${counter}
  Números que foram somados ${numbers}`)
}

teste(11)