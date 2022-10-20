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
    case "CLEAR_USERS":
      return {
        ...state,
        users: []
        
      }
      // put users to empty array in clear so when we clear it is empty

    default:
      return state;
  }
};

//used a spread operator b/c you usually spread the objects that are already in the state

export default githubReducer;
