import { Icon } from "@iconify/react";
import "./NavBar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="navbar">
      <div className="sections">
        <p
          className={`nav-item ${selectedItem === "man" ? "selected" : ""}`}
          onClick={() => handleItemClick("man")}
        >
          <Link to="/man">MAN</Link>
        </p>
        <p
          className={`nav-item ${selectedItem === "woman" ? "selected" : ""}`}
          onClick={() => handleItemClick("woman")}
        >
          <Link to="/woman">WOMAN</Link>
        </p>
      </div>
      <div className="brand">
        <Link to="/">
          <p>GRENN</p>
        </Link>
      </div>
      <div className="icons">
        <Icon icon="mingcute:search-line" color="black" width="25" />
        <Link to="/cart">
          {" "}
          <Icon icon="uil:cart" color="black" width="28" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
}

export default NavBar;
