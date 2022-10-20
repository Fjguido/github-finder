import { useState, useContext } from "react";
import GitHubContext from "../../context/github/GithubContext";

function UserSearch() {
  const [text, setText] = useState("");

  const { users, searchUsers } = useContext(GitHubContext);

  const handleChange = (e) => setText(e.target.value);
  // to check - go to console - components - usersearch - then youll see whatever is typed in

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      alert("Please enter something");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button className="btn btn-ghost btn-lg">Clear</button>
        </div>
      )}
    </div>
  );
}
// line 47-51 made the clear button dissapear only if there is an inout larger then 0

export default UserSearch;
