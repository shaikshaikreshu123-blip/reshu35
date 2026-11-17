import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Pagination = ({
  currentPage,
  totalPages,
  handleNext,
  handlePrevious,
}) => {
  return (
    <div className="pagination">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        <FaArrowLeft />
        Previous
      </button>

      <span>
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Next
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Pagination;