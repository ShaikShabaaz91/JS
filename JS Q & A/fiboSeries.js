function generateFibonacci(n) {
    const fibonacciSeries = [0, 1];
  
    for (let i = 2; i < n; i++) {
      const nextFibonacci = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
      fibonacciSeries.push(nextFibonacci);
    }
  
    return fibonacciSeries;
  }
  
  // Example: Generate the first 10 terms of the Fibonacci series
  const fibonacciTerms = generateFibonacci(10);
  console.log(fibonacciTerms);