import React from 'react';
import Room from './Room.js';
import './rooms_list.js';

const RoomList = ({ rooms }) => {
    return(
        <div>
            {rooms?
                 rooms.map((room, i) => {
                    return(
                        <Room 
                            key={i}
                            // id={rooms[i].id}
                            name={room[i].name}
                            
                        />
                    );
                })
            :"Ładowanie"
}
        </div>
        
    );
}

export default RoomList;