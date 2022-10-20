const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

//used a spread operator b/c you usually spread the objects that are already in the state

export default githubReducer;
