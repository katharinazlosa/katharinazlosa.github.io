import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import Messages from "./Messages";
import Button from "./Button";

const randomName = () => {
  const adjectives = [
    "autumn",
    "hidden",
    "bitter",
    "misty",
    "silent",
    "empty",
    "dry",
    "dark",
    "summer",
    "icy",
    "delicate",
    "quiet",
    "white",
    "cool",
    "spring",
    "winter",
    "patient",
    "twilight",
    "dawn",
    "crimson",
    "wispy",
    "weathered",
    "blue",
    "billowing",
    "broken",
    "cold",
    "damp",
    "falling",
    "frosty",
    "green",
    "long",
    "late",
    "lingering",
    "bold",
    "little",
    "morning",
    "muddy",
    "old",
    "red",
    "rough",
    "still",
    "small",
    "sparkling",
    "throbbing",
    "shy",
    "wandering",
    "withered",
    "wild",
    "black",
    "young",
    "holy",
    "solitary",
    "fragrant",
    "aged",
    "snowy",
    "proud",
    "floral",
    "restless",
    "divine",
    "polished",
    "ancient",
    "purple",
    "lively",
    "nameless",
  ];
  const nouns = [
    "waterfall",
    "river",
    "breeze",
    "moon",
    "rain",
    "wind",
    "sea",
    "morning",
    "snow",
    "lake",
    "sunset",
    "pine",
    "shadow",
    "leaf",
    "dawn",
    "glitter",
    "forest",
    "hill",
    "cloud",
    "meadow",
    "sun",
    "glade",
    "bird",
    "brook",
    "butterfly",
    "bush",
    "dew",
    "dust",
    "field",
    "fire",
    "flower",
    "firefly",
    "feather",
    "grass",
    "haze",
    "mountain",
    "night",
    "pond",
    "darkness",
    "snowflake",
    "silence",
    "sound",
    "sky",
    "shape",
    "surf",
    "thunder",
    "violet",
    "water",
    "wildflower",
    "wave",
    "water",
    "resonance",
    "sun",
    "wood",
    "dream",
    "cherry",
    "tree",
    "fog",
    "frost",
    "voice",
    "paper",
    "frog",
    "smoke",
    "star",
  ];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return adjective + noun;
};
const randomColor = () => {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
};

const Body = () => {
  const [messages, setMessages] = useState([]);
  const [member, setMember] = useState({
    username: randomName(),
    color: randomColor(),
  });
  const [drone, setDrone] = useState(null);

  useEffect(() => {
    const initializeDrone = () => {
      const newDrone = new window.Scaledrone("2swrzJbjKUidJYmA", {
        data: member,
      });
      newDrone.on("open", (error: BodyType) => {
        if (error) {
          return console.error(error);
        }
        const updatedMember = { ...member };
        updatedMember.id = newDrone.clientId;
        setMember(updatedMember);
      });
      const room = newDrone.subscribe("observable-room");
      room.on("data", (data, member) => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { member, text: data },
        ]);
      });
      setDrone(newDrone);
    };

    initializeDrone();
  }, []);

  const onSendMessage = (message) => {
    drone.publish({
      room: "observable-room",
      message,
    });
  };

  const navigate = useNavigate();

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <div className="body-component" id="body-component">
        <Messages messages={messages} currentMember={member} />
        <Input onSendMessage={onSendMessage} />
        <Button
          text="Exit conversation"
          color="yellow"
          onClick={() => navigate(-1)}
        />
        <div ref={bottomRef} />
      </div>
    </>
  );
};

export default Body;
