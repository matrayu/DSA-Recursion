function reverseString(str) {
    let reversed = ''
    //Base case
    if (str.length === 0) {
      return 'String has no length'
    }
    //General Case
    for (i = str.length - 1; i >= 0; i--) {
      reversed += str.charAt(i)
    }
    
    //output of recursive
    return reversed
  }
  
  
  //input to program
  let string = 'Something to do today'
  reverseString(string)