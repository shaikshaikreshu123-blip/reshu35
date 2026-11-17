import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { fetchUsers } from "../services/api";
import UserCard from "./UserCard";
import Loader from "./Loader";

const SearchBar = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch users once
  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);

      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  // Debounced Search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (search.trim() === "") {
        setFilteredUsers([]);
        return;
      }

      const filtered = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      );

      setFilteredUsers(filtered);
    }, 300);

    return () => clearTimeout(timer);
  }, [search, users]);

  return (
    <div className="search-container">
      <h1>Live User Search</h1>

      <div className="search-box">
        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search users by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div className="results">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <UserCard key={user.id} user={user} />
            ))
          ) : (
            search && (
              <p className="no-results">
                No users found
              </p>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;