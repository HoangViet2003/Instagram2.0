import "./Menu.css";
import { ReactComponent as Home } from "./image/Home.svg";
import { ReactComponent as Inbox } from "./image/Inbox.svg";
import { ReactComponent as AddPost } from "./image/AddPost.svg";
import { ReactComponent as Explore } from "./image/Explore.svg";
import { ReactComponent as Noti } from "./image/Noti.svg";
import ProfileIcon from "./ProfileIcon.js";
import Avatar from "./image/Avatar.webp";

function Menu() {
  return (
    <div className="menu">
      <Home className="icon" />
      <Inbox className="icon" />
      <AddPost className="icon" />
      <Explore className="icon" />
      <Noti className="icon" />
      <ProfileIcon iconSize="small" image={Avatar} />
    </div>
  );
}

export default Menu;
