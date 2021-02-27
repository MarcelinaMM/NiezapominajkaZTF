
import React from 'react';
import room  from '../assets/room.jpg'



const Room = ({name}) => {
    return(
        <div className='box is-3'>
            <img src={room} alt='room' />
            <div>
                <h2>{name}</h2>
            </div>
        </div>
    );
}

export default Room;