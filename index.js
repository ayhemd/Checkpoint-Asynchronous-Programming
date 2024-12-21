async function iterateWithAsyncAwait(values) {
    for (const value of values) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(value);
    }
  }
  
  // Example usage:
  const values = [1, 2, 3, 4, 5];
  iterateWithAsyncAwait(values);
  