let countingSheep = function(sheep) {
    //input to each recursive call
    while (sheep >= 0) {
      //Base Case
      if (sheep === 0) {
        //output of the program
        console.log("All sheep jumped over the fence")
        return
      } 
      //General case
      //output of each recursive call
      console.log(`${sheep}: Another sheep jumps over the fence`)
      sheep = sheep - 1
    }
    return
  }
  
  //input to the program
  let numSheep = 3
  
  countingSheep(numSheep)