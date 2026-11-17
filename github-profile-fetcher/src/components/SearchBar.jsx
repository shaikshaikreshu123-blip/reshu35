import { FaSearch } from "react-icons/fa";

const SearchBar = ({ username, setUsername, handleSearch }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter GitHub username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={handleSearch}>
        <FaSearch />
        Search
      </button>
    </div>
  );
};

export default SearchBar;