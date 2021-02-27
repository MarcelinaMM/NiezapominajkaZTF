import './Header.css';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import logo  from '../../assets/logo.png';


class Header extends Component {

constructor(props){
  super(props);
  this.state = {isToggleOn: false};
  // var logo = require('../../assets/logo.png');
  this.handleClick = this.handleClick.bind(this);
}

handleClick() {
  this.setState(prevState => ({
    isToggleOn: !prevState.isToggleOn
  }));
}

render(){


 
  let menuActive = this.state.isToggleOn ? 'is-active' : '';
  

  return (

      <div className="navbar has-shadow">
        <div className="container navbar-brand">
          <div>
            <img src={logo} width="200" id='logo' alt='tutaj powinno byc logo'/>
          </div>
            <span className={'navbar-burger ' +menuActive} onClick={this.handleClick}>
            <span></span>
            <span></span>
            <span></span>
          </span>

          <div className={'navbar-end navbar-menu ' +menuActive}>

              <Link to="/Rooms" className="navbar-item r-item">Nasze pokoje</Link>
              <Link to="/SpecialOffers" className="navbar-item r-item">Oferty specjalne</Link>
              <Link to="/Prices" className="navbar-item r-item">Cennik</Link>
              <Link to="/Contact" className="navbar-item r-item">Kontakt</Link>

              <div className="navbar-item">
                <p className="control">
                    <a className="button is-info is-outlined" onClick={function(){ alert("Rezerwacja on-line jest niedostępna.")}}>
                      <span>REZERWACJA</span>
                    </a>  
                </p>  
              </div> 
          </div>
        </div>
      </div>
  )}}

  export default Header;