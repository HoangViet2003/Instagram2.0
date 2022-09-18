import Profile from "./Profile";
import "./Post.css";
import { ReactComponent as CardButton } from "./image/cardButton.svg";
import CardMenu from "./CardMenu";
import Comment from "./Comment";
import ProfileIcon from "./ProfileIcon";

// function Post(props) {
//   const {  image, comments, likeByText, likeByNumber, hours } =
//     props;
//   return (
//     <div className="post">
//       <header>
//         <Profile iconSize="medium" />
//         <CardButton className="cardButton" />
//       </header>
//       <img className="cardImage" src={image} alt="card content" />
//       <CardMenu />
//       <div className="likeBy">
//         <Profile iconSize="small" hideAccountName={true} />
//         <span>
//           Liked by <strong>{likeByText}</strong> and{" "}
//           <strong>{likeByNumber}</strong>other
//         </span>
//       </div>
//       <div className="comment">
//         {comments.map((comments) => {
//           return (
//             <Comment
//               key={comments.id}
//               accountName={comments.user}
//               comment={comments.text}
//             />
//           );
//         })}
//       </div>
//       <div className="timePosted">{hours} HOURS AGO</div>
//       <div className="addComment">
//         <div className="commentText">Add a comment...</div>
//         <div className="postText">POST</div>
//       </div>
//     </div>
//   );
// }

function Post() {
  return (
    <div className="Post">
      <div className="header">
        <ProfileIcon iconSize="medium" />
        <div className="accountName">mathana</div>
        <CardButton className="cardButton" />
      </div>
      <div className="postImage">
        <img
          className="Image"
          src="https://images.pexels.com/photos/13428312/pexels-photo-13428312.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="picture"
        />
        <CardMenu />
        <div className="timePosted"> HOURS AGO</div>
        <div className="addComment">
          <div className="commentText">Add a comment...</div>
          <div className="postText">POST</div>
        </div>
      </div>
    </div>
  );
}

export default Post;
