
import React from 'react';
import room  from '../assets/room.jpg'


const Room = ({ name }) => {
    return(
        <div className='box'>
            <img alt= 'room' src={ room } />
            <div>
                <h2>{name}</h2>
            </div>
        </div>
    );
}

export default Room;