import "./Post.css";
import { ReactComponent as CardButton } from "./image/cardButton.svg";
import { ReactComponent as Icon } from "./image/Icon.svg";
import CardMenu from "./CardMenu";
import ProfileIcon from "./ProfileIcon";

function Post({ name, image, captionPost }) {
  return (
    <div className="post">
      <div className="header">
        <div className="avatar">
          <ProfileIcon iconSize="medium" />
          <div className="name">
            <strong>{name}</strong>
          </div>
        </div>
        <CardButton className="cardButton" />
      </div>
      <div className="commentMenu">
        <img className="image" src={image} alt="image" />
        <CardMenu />
        <div className="like">
          <strong>1,489 liked</strong>
        </div>
        <div className="captionPost">
          <strong>{name}</strong> {captionPost}
        </div>
        <div className="timePosted"> 20 HOURS AGO</div>
        <div className="addComment">
          <div className="addCommentMenu">
            <Icon />
            <div className="commentText">Add a comment...</div>
          </div>
          <div className="postText">POST</div>
        </div>
      </div>
    </div>
  );
}

export default Post;
