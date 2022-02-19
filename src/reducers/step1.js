const step1 = (state = "init", action) => {
  switch (action.type) {
    case "STEP1NEWVALUE":
      return action.payload;
    default:
      return state;
  }
};
export default step1;
