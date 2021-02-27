import React, { Component } from 'react';


export default class Contact extends Component {
  render() {
    return (
      <div> 
      	<section className="dane">
          <div className="container">
            <div className="title special_offer_head">
                <h2><strong>Willa Niezapominajka</strong></h2>
                <h3>adres</h3><br/>
                <h6>
                  <a href="">tel. +48 123-456-789</a><br/>
                  <a href="#contact" class="red" id="email">email: mail@gmail.com</a>
                </h6><br/>
                <p>NIP: 123-45-67-89</p>
              </div>
          </div>
        </section>  
        <section className="mapa">
          <div className="title special_offer_head">
            <p>tu jest miejsce na mape Google</p>
          </div>
        </section>
      </div>
    );
  }
}
