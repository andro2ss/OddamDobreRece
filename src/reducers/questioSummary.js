const questioSummary = (state = "init", action) => {
  switch (action.type) {
    case "SETSUMMARY":
      return action.payload;
    default:
      return state;
  }
};
export default questioSummary;
