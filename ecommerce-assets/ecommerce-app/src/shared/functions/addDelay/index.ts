const DELAY_IN_MILLISECONDS = 1000;

const addDelay = (callBack: VoidFunction) => {
  setTimeout(() => {
    callBack();
  }, DELAY_IN_MILLISECONDS);
};

export default addDelay;
