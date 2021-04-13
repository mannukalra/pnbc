
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import bg1 from './img/bg1.jpg';
import bg2 from './img/bg2.jpg';
import LogoAct from './logo-actual.svg';
import Bottom from './components/Bottom.js'
import Connect from './components/Connect.js'



class App extends Component{

  constructor() {
    super();
    this.state = {
      connectHidden: true,
      display: 'none'
    }
    this.myDivToFocus = React.createRef();
  }


  showConnect = () =>{
    this.setState({connectHidden: false, display: 'inline-block'});
    setTimeout(function(){ 
      document.getElementById("divToFocus").scrollIntoView({block: 'end', behavior: 'smooth'});
    }, 300);
  }

  hideConnect = () =>{
    this.setState({connectHidden: true, display: 'none'});
  }

  render(){
    return (
      <div className="App" style={{ backgroundImage: `url(${bg1})` }}>
        <header className="App-header">
          <div style={{ color: "#61DAFB" }}>
              <b>CALL (+91) 773-634-9078</b>
          </div>
          
        </header>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "82%", minWidth: "380px", height: "112%" }}>
            <div style={{ backgroundImage: `url(${bg2})`, boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.5)"}}>
              <div className="button-grid">
                <img src={LogoAct} alt="logo" style={{ marginLeft:"12%", maxHeight: "42px", maxWidth: "72px" }} />
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
                <b>Lighter & Effective way to control pest!</b>
              </p>
              <div style={{marginBottom:"3rem"}}>
                <button className="mail-link" hidden={!this.state.connectHidden}
                    onClick={this.showConnect}>
                    Contact us
                </button>
              </div>
              <span>---</span>
            </div>
            <br/>
            <div id="divToFocus" style={{ display: this.state.display, width:"54%", minWidth: "350px"}}>
              <Connect hideConnect={this.hideConnect}/>
            </div>
            <Bottom />
          </div>
        </div>
      </div>
    );
  }

}

export default App;
