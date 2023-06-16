import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/body");
  };

  return (
    <>
      <div className="main-img"></div>
      <div className="main-text">
        <h1>Welcome to Chaty!</h1>
        <h3>Connect with other people and chat with us.</h3>
        <Button text="Get started" onClick={handleClick} />
      </div>
    </>
  );
};

export default Main;
