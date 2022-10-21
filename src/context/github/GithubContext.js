import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GitHubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // dispatch is like "setState" but it is used to dispatch an action used from githubreducer file

  // Get search results
  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const { items } = await response.json();

    dispatch({
      type: "GET_USERS",
      payload: items,
    });

    // setUsers(data);
    // setLoading(false);

    // delete setUsers and setLoading b/c we no longer use useState hook - instead we now use dispatch

    // we use data for payload b/c that is where we get our data from the api - payload is the convention word to use

    // changed payload to items because the info we want is in that array - check postman
  };

  //Get single user
  const getUser = async (login) => {
    setLoading();

    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const { data } = await response.json();

      dispatch({
        type: "GET_USER",
        payload: data,
      });
    }
  };

  // Clear users from state
  const clearUsers = () => dispatch({ type: "CLEAR_USERS" });
  // show loading spinner
  const setLoading = () => dispatch({ type: "SET_LOADING" });

  return (
    <GitHubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        searchUsers,
        clearUsers,
        getUser,
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
};

// need to pass down state and can't just have "users, loading" b/c were dealing with state and dispatch now in line 15

export default GitHubContext;
