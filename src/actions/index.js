const incrCounter = () => {
  return {
    type: "INCREMENT",
  };
};

const decrCounter = () => {
  return {
    type: "DECREMENT",
  };
};

export { incrCounter, decrCounter };
