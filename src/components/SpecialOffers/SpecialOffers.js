import React, { Component } from 'react';
import './SpecialOffers.css';
import axios from 'axios';

export default class SpecialOffers extends Component {

  constructor(props){
      super(props);

      this.state = {
          offers: []
      };
  }  

  componentDidMount(){
    axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(res => {
            const offers = res.data.slice(0, 9);
            this.setState({ offers });
        })
  }


  render() {



    return (
      <div> 
         <div className="container">
            <section className="section">
                <h1 className="title special_offer_head">Oferty specjalne</h1>
                <h2 className="subtitle is-4 special_offer_head">Lorum ipsum...</h2>

                    
                <div className="columns">
                    {this.state.offers.map(offer =>
                        <div className="column is-one-third">
                            <div className="card">
                                <div className="card-content">
                                    <p className="title">{ offer.title }</p>
                                    <p className="answer">{ offer.body }</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>    
          
      </div>
    );
  }
}
