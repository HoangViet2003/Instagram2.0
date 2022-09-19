import "./Card.css";
import Stories from "./Stories";
import Post from "./Post";

function Card() {
 

  return (
    <div className="card">
      <Stories />

      <div className="post1">
        <Post />
      </div>
      <div className="post2">
        <Post />
      </div>
    </div>
  );
}

export default Card;
