function nthTriangularNumber(num) {
    let triangle = 0
    //Base case
    if (num === 0) {
      console.log('Length is too small')
      return
    }
    //General Case
    for (i = 1; i <= num; i++) {
      triangle += i
    }
    
    //output of recursive
    console.log(triangle)
    return
}

let triNumber = 60;
nthTriangularNumber(triNumber)