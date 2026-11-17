const ProfileCard = ({ user }) => {
  return (
    <div className="profile-card">
      <img src={user.avatar_url} alt={user.login} />

      <h2>{user.name || user.login}</h2>

      <p className="username">@{user.login}</p>

      <p className="bio">
        {user.bio || "No bio available"}
      </p>

      <div className="stats">
        <div>
          <h3>{user.public_repos}</h3>
          <span>Repositories</span>
        </div>

        <div>
          <h3>{user.followers}</h3>
          <span>Followers</span>
        </div>

        <div>
          <h3>{user.following}</h3>
          <span>Following</span>
        </div>
      </div>

      <a
        href={user.html_url}
        target="_blank"
        rel="noreferrer"
      >
        View Profile
      </a>
    </div>
  );
};

export default ProfileCard;