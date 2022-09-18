import "./Navigation.css";
import logo from "./image/InstagramLogo.png";
import searchIcon from "./image/SearchIcon.png";
import Menu from "./Menu";

function Navigation() {
  return (
    <div className="navigation">
      <div className="container">
        <img className="logo" src={logo} alt="insta logo" />
        <div className="search">
          <img className="searchIcon" src={searchIcon} alt="search icon" />
          <span className="searchText">Search</span>
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default Navigation;
