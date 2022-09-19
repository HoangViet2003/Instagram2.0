
import "./Post.css";
import { ReactComponent as CardButton } from "./image/cardButton.svg";
import { ReactComponent as Icon } from "./image/Icon.svg";
import CardMenu from "./CardMenu";

import ProfileIcon from "./ProfileIcon";


function Post() {
  return (
    <div className="post">
      <div className="header">
        <div className="avatar">
          <ProfileIcon iconSize="medium" />
          <div className="Name">
            <strong>krusor.p</strong>
          </div>
        </div>
        <CardButton className="cardButton" />
      </div>
      <div className="commentMenu">
        <img
          className="image"
          src="https://images.pexels.com/photos/13428312/pexels-photo-13428312.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="image"
        />
        <CardMenu />
        <div className="timePosted"> HOURS AGO</div>
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
