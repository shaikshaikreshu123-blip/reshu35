import { useState } from "react";
import DataTable from "./components/DataTable";
import Pagination from "./components/Pagination";
import users from "./data/users";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 5;

  // Calculate indexes
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;

  // Slice users for current page
  const currentUsers = users.slice(
    indexOfFirstRow,
    indexOfLastRow
  );

  // Total pages
  const totalPages = Math.ceil(users.length / rowsPerPage);

  // Next Page
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Previous Page
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="app">
      <div className="card">
        <h1>Paginated User Table</h1>

        <DataTable users={currentUsers} />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      </div>
    </div>
  );
}

export default App;