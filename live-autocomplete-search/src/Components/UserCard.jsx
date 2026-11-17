import { FaEnvelope, FaPhone } from "react-icons/fa";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>

      <p>
        <FaEnvelope className="icon" />
        {user.email}
      </p>

      <p>
        <FaPhone className="icon" />
        {user.phone}
      </p>
    </div>
  );
};

export default UserCard;