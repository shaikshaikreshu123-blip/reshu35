import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const RequirementItem = ({ valid, text }) => {
  return (
    <div className={`requirement ${valid ? "valid" : ""}`}>
      {valid ? (
        <FaCheckCircle />
      ) : (
        <FaTimesCircle />
      )}

      <span>{text}</span>
    </div>
  );
};

export default RequirementItem;