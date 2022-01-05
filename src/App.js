import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="left">
        <img
          src="https://uploads-ssl.webflow.com/6036972e08af561b470b4831/6135c64b57cf212f2aa106f1_Peppertype-logo-dark-horizontal.svg"
          alt="Peppertype Logo"
          className="logo"
        />
        <div className="leftMainText">
          <div className="name">
            <h1>Hi Siva</h1>
            <img
              src="https://img.icons8.com/emoji/48/000000/waving-hand-emoji.png"
              alt="hello"
              className="hello"
            />
          </div>
          <h1 className="welcome">Welcome to Peppertype.ai</h1>
          <h3>
            Congratulations on taking your first step towards creating content,
            the modern way!
          </h3>
          <h3>
            Help us tailor an amazing experience for you by answering these
            three questions
          </h3>
          <div className="buttons">
            <button className="skip">Skip for now</button>
            <button className="continue">Continue</button>
          </div>
          <p className="demo">
            Get the most out of it - <u>Book a live demo</u>
          </p>
        </div>
      </div>
      <div className="right">
        <p className="line">
          A few clicks away from an awesome writing experience
        </p>
        <div className="irregular">
          <p className="text">
            <b>50K+</b> Peppertypers <br />
            trust us with their content
          </p>
          <div className="irregular2"></div>
        </div>
        <button className="help">
          <img
            src="https://png.pngitem.com/pimgs/s/359-3593595_blue-circle-question-mark-hd-png-download.png"
            alt="ques"
            className="ques"
            fill="#2F2EE9"
          />
          Need Help?
        </button>
      </div>
    </div>
  );
}

export default App;
