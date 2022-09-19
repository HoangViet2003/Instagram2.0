import "./Profile.css";
import ProfileIcon from "./ProfileIcon";

function Profile(props) {
  const { username, caption, urlText, iconSize, captionSize, image } = props;

  let accountName = username;

  return (
    <div className="profile">
      <ProfileIcon
        className="profileUserSuggest"
        iconSize={iconSize}
        image={image}
      />

      <div className="textContainer">
        <span className="userName">{accountName}</span>
        <span className={`caption ${captionSize}`}>{caption}</span>
      </div>

      <a href="/">{urlText}</a>
    </div>
  );
}

export default Profile;
