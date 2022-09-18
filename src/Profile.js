import "./Profile.css";
import ProfileIcon from "./ProfileIcon";
import user from "./dataUser/user";

function Profile(props) {
  const {
    username,
    caption,
    urlText,
    iconSize,
    captionSize,
    hideAccountName,
    image,
  } = props;

  let accountName = username
    ? username
    : user[Math.floor(Math.random() * user.length)].username;
  return (
    <div className="profile">
      <ProfileIcon iconSize={iconSize} image={image} />
      {(accountName || caption) && !hideAccountName && (
        <div className="textContainer">
          <span className="accountName">{accountName}</span>
          <span className={`caption ${captionSize}`}>{caption}</span>
        </div>
      )}
      <a href="/">{urlText}</a>
    </div>
  );
}

export default Profile;
