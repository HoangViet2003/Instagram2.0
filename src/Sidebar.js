import "./Sidebar.css";
import Sticky from "react-sticky-el";
import Profile from "./Profile";
import Suggestions from "./Suggestions";
import Footer from "./Footer";
import image from "./image/ProfileImage.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <Sticky topOffset={-80}>
        <div className="sidebar">
          <Profile
            username="nghoang"
            caption="Nguyen Hoang Viet"
            urlText="Switch"
            iconSize="big"
            image={image}
          />
          <Suggestions />
          <Profile
            username="nghoang"
            caption="Follow you"
            urlText="Follow"
            iconSize="medium"
            image={image}
          />
          <Profile
            username="nghoang"
            caption="Suggestion for you"
            urlText="Follow"
            iconSize="medium"
            image={image}
          />
          <Profile
            username="nghoang"
            caption="Invite you join"
            urlText="Follow"
            iconSize="medium"
            image={image}
          />

          <Footer />
        </div>
      </Sticky>
    </div>
  );
}

export default Sidebar;
