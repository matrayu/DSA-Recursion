function powerCalculator(base, exp) {
    //Base case
    //input to recursive
    if (exp <= 0) {
      //output of program
      return 0
    }
    //General Case
    //output of recursive
    return base ** exp
  }
  
  
  //input to program
  powerCalculator(10,-2) 