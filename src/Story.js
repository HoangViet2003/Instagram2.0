import "./Story.css";
import ProfileIcon from "./ProfileIcon";
import user from "./dataUser/user";

function Story() {

    let accountName = user[Math.floor(Math.random() * user.length)].username;
    

    if(accountName.length >10){
        accountName = accountName.substring(0,10) + "...";
    }
  return <div className="story">
    <ProfileIcon iconSize = "big" storyBorder={true} />
    <span className="accountName">{accountName}</span>
  </div>;

}

export default Story;