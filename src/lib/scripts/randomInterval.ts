

// yoink!
// code for set random interval. npm package is deprecated.
//https://stackoverflow.com/a/60308175/12471420

export const setRandomInterval = (intervalFunction : Function, minDelay:number, maxDelay:number) => {
    let timeout :number;
  
    const runInterval = () => {
      const timeoutFunction = () => {
        intervalFunction();
        runInterval();
      };
  
      const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
  
      timeout = setTimeout(timeoutFunction, delay);
    };
  
    runInterval();
  
    return {
      clear() { clearTimeout(timeout) },
    };
  };