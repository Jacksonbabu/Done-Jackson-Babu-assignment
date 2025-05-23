function generateOddSeries(a) {
    let count = a % 2 === 0 ? a - 1 : a;
    let result = [];
  
    for (let i = 0; i < count; i++) {
      result.push(2 * i + 1); 
    }
  
    console.log(result.join(', '));
  }

  generateOddSeries(1);
  generateOddSeries(2); 
  generateOddSeries(3); 
  generateOddSeries(4); 
  generateOddSeries(5); 
  generateOddSeries(6); 
