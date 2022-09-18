import "./Card.css";
import Stories from "./Stories";
import Post from "./Post";

function Card() {
  const commentsOne = [
    {
      user: "raffagrassetti",
      text: "Woah dude, this is awesome! 🔥",
      id: 1,
    },
    {
      user: "therealadamsavage",
      text: "Like!",
      id: 2,
    },
    {
      user: "mapvault",
      text: "Niceeeee!",
      id: 3,
    },
  ];

  const commentsTwo = [
    {
      user: "mapvault",
      text: "Amazing content, keep it up!",
      id: 4,
    },
  ];

  const commentsThree = [
    {
      user: "dadatlacak",
      text: "Love this!",
      id: 5,
    },
  ];
  return (
    <div className="card">
      <Stories />

      {/* <Post
        accountName="johnkenendy"
        image="https://picsum.photos/800/900"
        comments={commentsOne}
        likeByText="dalatka"
        likeByNumber={89}
        hours={16}
      /> */}
    <Post />

    </div>
  );
}

export default Card;
