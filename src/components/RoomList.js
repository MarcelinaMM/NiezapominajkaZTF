import React from 'react';
import Room from './Room';
import './rooms_list.js'

const RoomList = ({ rooms }) => {
    return(
        <div>
            {rooms
                ? rooms.map((name, i) => {
                    return(
                        <Room 
                            key={i}
                            id={rooms[i].id}
                            name={rooms[i].name}
                        />
                    );
                })
            :"Ładowanie"
}
        </div>
        
    );
}

export default RoomList;