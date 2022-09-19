import "./Card.css";
import Stories from "./Stories";
import Post from "./Post";

function Card() {
  return (
    <div className="card">
      <Stories />
      <div className="post1">
        <Post
          name="krusor.p"
          image="https://images.pexels.com/photos/13428312/pexels-photo-13428312.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load "
          captionPost="Perfect"
        />
      </div>
      <div className="post2">
        <Post
          name="stephan"
          image="https://images.pexels.com/photos/13484865/pexels-photo-13484865.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          captionPost="A Nice day !!!!!!"
        />
      </div>
    </div>
  );
}

export default Card;
