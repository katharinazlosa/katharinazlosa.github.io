import logo from "./../assets/logo.png";
import brandlogo from "./../assets/brand-logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="header">
        <img
          className="header__img"
          src={logo}
          onClick={() => navigate("/body")}
        ></img>
        <img className="header__img" src={brandlogo}></img>
      </div>
    </>
  );
};

export default Header;
