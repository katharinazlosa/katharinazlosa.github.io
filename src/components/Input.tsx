import { useState } from "react";
import Button from "./Button";

type InputType = {
  onSendMessage: Function;
};

const Input = ({ onSendMessage }: InputType) => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
    onSendMessage(text);
  };
  return (
    <>
      <div className="Input">
        <form onSubmit={onSubmit}>
          <input
            onChange={onChange}
            value={text}
            type="text"
            placeholder="Enter your message and press ENTER"
          />
          <Button text="Send" color="green" />
        </form>
      </div>
    </>
  );
};

export default Input;
