import React, { Component } from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

export default class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      offers: []
    };
  }

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/posts')
      .then(res => {
        const offers = res.data.slice(0, 6);
        this.setState({ offers });
      })
  }

  render() {
    let heading = "JAKIEŚ HASŁO PROMOCYJNE";
    let subheading = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."


    return (




      <div>
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">{heading}</h1>
              <div className="is-two-thirds column is-paddingless">
                <h2 className="subtitle is-4">{subheading}</h2>
              </div>
              <a className="button is-medium is-info" id="learn" onClick={function () { alert("jakieś wyskakujące okno") }}>O Mielnie</a>
            </div>
          </div>
        </section>

{/* 
        <span class="icon-text">
          <span class="icon">
            <i class="fas fa-home"></i>
          </span>
          <span>Home</span>
        </span> */}


        <section className="section">
          <div className="container">
            <div className="columns pd is-desktop">
              <div className="column is-1 has-text-centered">
                <span className="icon">
                  <i className="fas fa-dog">ikona</i>                                     {/*czemu fav icons nie działają?*/}
                  {/* <FontAwesomeIcon icon={["fal", "coffee"]} /> */}
                </span>
              </div>
              <div className="column is-2">
                <p className=""><strong>Lorem ipsum dolor sit amet</strong></p>
              </div>

              <div className="column is-1 has-text-centered">
                <i className="fa ">ikona</i>
              </div>
              <div className="column is-2">
                <p className=""><strong>Lorem ipsum dolor sit amet</strong></p>
              </div>

              <div className="column is-1 has-text-centered">
                <i className="fa">ikona</i>
              </div>
              <div className="column is-2">
                <p className=""><strong>Lorem ipsum dolor sit amet</strong></p>
              </div>
              <div className="column is-1 has-text-centered">
                <i className="fa">ikona</i>
              </div>
              <div className="column is-2">
                <p className=""><strong>Lorem ipsum dolor sit amet</strong></p>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <div>
          <div className="container">
            <section className="section">
              <h1 className="title special_offer_head">Wybrane oferty specjalne </h1><br />

              <div className="columns">
                {this.state.offers.map(offer =>
                  <div className="column is-one-third">
                    <div className="card">
                      <div className="card-content">
                        <p className="title">{offer.title}</p>
                        <p className="answer">{offer.body}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>
          </div>

        </div>
      </div>
    );
  }
}
