import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ProfileCard from "./components/ProfileCard";
import { fetchGitHubUser } from "./services/githubApi";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!username.trim()) return;

    try {
      setLoading(true);
      setError("");

      const data = await fetchGitHubUser(username);

      setUser(data);
    } catch (err) {
      setUser(null);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h1>GitHub Profile Fetcher</h1>

        <SearchBar
          username={username}
          setUsername={setUsername}
          handleSearch={handleSearch}
        />

        {loading && <p className="message">Loading...</p>}

        {error && <p className="error">{error}</p>}

        {user && <ProfileCard user={user} />}
      </div>
    </div>
  );
}

export default App;