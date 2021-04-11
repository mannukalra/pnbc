import logo from './logo.svg';
import './App.css';
import bg1 from './img/bg1.jpg';
import bg2 from './img/bg2.jpg';
import LogoAct from './logo-actual.svg';
const sendMail = require("./util/MailUtil.js").sendMail;



function App() {

  const triggerMail = () =>{
    console.log("trigger mail called!")
    // setTimeout(function () {
    //   sendMail("This is the a different subject", "And this is the body");
    // }, 0);
    window.sendEmail('subject from react', 'body from app.js react, happy!');
  }

  return (
    <div className="App" style={{ backgroundImage: `url(${bg1})` }}>
      <header className="App-header">
        <div style={{ color: "#34cceb" }}>
            <b>CALL (+91) 773-634-9078</b>
        </div>
        
      </header>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "82%", backgroundImage: `url(${bg2})`, boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.5)"}}>
          <div className="button-grid">
            <img src={LogoAct} alt="logo" style={{ marginLeft:"3rem", height: "42px", width: "72px" }} />
            <button className="button-color">
              HOME
            </button>
            <button className="button-color">
              ABOUT US
            </button>
            <button className="button-color">
              SERVICES
            </button>
            <button className="button-color">
              Locations
            </button>
          </div>
          <img src={logo} className="App-logo" alt="logo" />
          <p className="font-large">
            <b>Lighter & Effecitive way to control pest!</b>
          </p>
          <div style={{marginBottom:"12rem"}}>
            <button className="mail-link"
                onClick={triggerMail}>
                Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
