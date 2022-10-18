import React from "react";
import Spinner from "../layout/Spinner";
import { useEffect, useContext } from "react";
import UserItem from "../users/UserItem";
import GitHubContext from "../../context/github/GithubContext";

function UserResults() {
  const { users, loading, fetchUsers } = useContext(GitHubContext);
  // need to pass in values used in githubcontext
  // when you check console - the useState hook is now filled with the user objects

  useEffect(() => {
    fetchUsers();
  }, []);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:gril-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;
