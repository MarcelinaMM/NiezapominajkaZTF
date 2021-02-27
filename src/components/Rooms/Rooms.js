import React, { Component } from 'react';
import './Rooms.css'
import ErrorBoundry from '../../components/ErrorBoundry.js';
import RoomList from '../../components/RoomList.js';
import SearchBox from '../../components/SearchBox.js';
import Scroll from '../../components/Scroll.js';
import '../../components/rooms_list.js';


export default class Rooms extends Component {

    constructor(props) {

        super(props);
        this.state = {value: '',
                      rooms: []                        
        };
    
        this.onSearchChange = this.onSearchChange.bind(this);

      };

    componentDidMount(){
      fetch('../../components/rooms_list.js').then(response => response.json())
        .then(rooms=> this.setState({ rooms: rooms }));
    }

    onSearchChange = (event) => {
      this.setState({ value: event.target.value });
    }


    render(){
    const { rooms } = this.state;
    const filteredRooms = rooms.filter(room => {
        return room.name;
    })

    return (

      <div>
        <div className="container">
          <h2 className="title has-text-centered "> Nasze pokoje </h2>
          <div className="columns pd is-desktop">

            <div className="column is-6 has-text-left">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <div className="column is-1 has-text-right">
              <span className="icon">
                <i className="fas fa-dog">ikony</i> <br />                                    {/*czemu fav icons nie działają?*/}
                {/* <FontAwesomeIcon icon={["fal", "coffee"]} /> */}
              </span>
            </div>
            <div className="column is-5 has-text-left title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br /> quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </div>
          </div>
        </div>
      {/* //   <div className="container">
      //           <div className="browser">
      //               <div className="box">
      //                   <h2 className="has-text-centered"><strong>Znajdź pokój</strong></h2>
      //                   <div className="columns pd is-desktop">
      //                       <div className="column is-4 has-text-left">
      //                           <div className="control">
      //                               <div className="select">
      //                                   <select >
      //                                       <option>Wybierz pokój</option>
      //                                       <option>2-osobowy</option>
      //                                       <option>3-osobowy</option>
      //                                       <option>4-osobowy</option>
      //                                   </select>
      //                               </div>
      //                           </div>
      //                       </div>
      //                       <div className="column is-4 has-text-left">
      //                           <h1><strong>Udogodnienia:</strong></h1><br />
      //                           <form>
      //                               <label className="faci">
      //                                   <input type="checkbox" name="name" /> klimatyzacja
      //                               </label><br />
      //                               <label className="faci">
      //                                   <input type="checkbox" name="name" /> łazienka
      //               </label><br />
      //                               <label className="faci">
      //                                   <input type="checkbox" name="name" /> balkon
      //               </label><br />
      //                               <label className="faci">
      //                                   <input type="checkbox" name="name" /> aneks kuchenny
      //               </label><br />
      //                               <label className="faci">
      //                                   <input type="checkbox" name="name" /> pokój na parterze
      //               </label><br />
      //                               <label className="faci">
      //                                   <input type="checkbox" name="name" /> dla alergików
      //               </label>
      //                           </form>
      //                       </div>


      //                       <div className="column is-4 has-text-left">
      //                           <h1><strong>Usługi:</strong></h1><br />
      //                           <form>
      //                               <label className="faci">
      //                                   <input type="checkbox" name="name" /> elastyczne zameldowanie
      //               </label><br />
      //                               <label className="faci">
      //                                   <input type="checkbox" name="name" /> pobyt ze zwierzeciem
      //               </label><br />
      //                               <label className="faci">
      //                                   <input type="checkbox" name="name" /> dodatkowe łóżko w pokoju
      //               </label><br />
      //                               <label className="faci">
      //                                   <input type="checkbox" name="name" /> rezerwacja miejsca parkingowego
      //               </label><br />
      //                               <label className="faci">
      //                                   <input type="checkbox" name="name" /> śniadanie do pokoju
      //               </label><br />
      //                               <label className="faci">
      //                                   <input type="checkbox" name="name" /> budzenie
      //               </label>
      //                           </form>
      //                       </div>
      //                   </div>
      //               </div>
      //           </div>
      //       </div> */}

        <div className="container">
                <div className='' >
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <RoomList rooms={filteredRooms} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
        </div>

       </div>

    );
  }
}
