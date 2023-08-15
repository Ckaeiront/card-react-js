import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const appLogs = {
  secondImg:
    "https://i.pinimg.com/564x/64/e8/e7/64e8e7c6abacdd50bc444dde316e5d2d.jpg",
  textIntro:
    "Sou um desenvolvedor web e louco por tiozão. Fervendo o leitinho que o tiozão comprou por 3 reais aqui no sitio do vizinho.",
  imageURL:
    "https://i.pinimg.com/564x/0a/16/5d/0a165d5e87257feb36ee20b9e5666ae7.jpg",
};

const Skill = (props) => {
  const { skills, emoji, color } = props;

  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>
        {skills} {emoji}
      </span>
    </div>
  );
};

const SkillList = () => {
  return (
    <div className="skill-list">
      <Skill skills="HTML & CSS" emoji="👍" color="#2f2f2f" />
      <Skill skills="JavaScript" emoji="🖥️" color="#b4aa4e" />
      <Skill skills="MongoDB" emoji="📂" color="#72b372" />
      <Skill skills="Node" emoji="👨‍💻" color="#3c873a" />
      <Skill skills="Mixagem" emoji="🎚️" color="#4caaf2" />
    </div>
  );
};

const Intro = (props) => {
  const { text, name } = props;
  return (
    <div>
      <h1>{name}</h1>
      <p>{text}</p>
    </div>
  );
};

const Avatar = ({ imageSrc }) => {
  return <img src={imageSrc} alt="" className="avatar"></img>;
};

const App = () => {
  return (
    <div className="card">
      <Avatar imageSrc={appLogs.imageURL} />
      <div className="data">
        <Intro name="Gustavo Cainavara" text={appLogs.textIntro} />
        <SkillList />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
