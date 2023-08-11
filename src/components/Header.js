import React from "react";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/modal">
        <SportsEsportsIcon />
      </Link>
      
      <div className="navigation">
        <Link to="/">
          <span>Ev</span>
        </Link>
        <Link to="/popüler">
          <span>Popüler</span>
        </Link>
        <Link to="/favorites">
          <span>Favoriler</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
