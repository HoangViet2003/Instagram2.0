import "./CardMenu.css";
import {ReactComponent as Heart} from "./image/Noti.svg";
import {ReactComponent as Comment} from "./image/Comment.svg";
import {ReactComponent as Share} from "./image/Share.svg";
import {ReactComponent as Save} from "./image/Save.svg";



function CardMenu() {
  return (
    <div className="cardMenu">
      <div >
        <Heart className="icon" />
        <Comment className="icon" />
        <Share className="icon" />
      </div>
      <Save className="icon" />
    </div>
  );
}

export default CardMenu;