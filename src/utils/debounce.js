const debounce = (fn, timeout = 100) => {
  let isProceed = true;

  return (...args) => {
    if (isProceed) {
      fn(...args);
      isProceed = false;
      setTimeout(() => {
        isProceed = true;
      }, timeout);
    }
  };
};

export { debounce };
