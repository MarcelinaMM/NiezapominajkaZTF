
import React from 'react';

const Room = ({ name, id }) => {
    return(
        <div className='box'>
            <div>
                <h2>{name}</h2>
                <p>{id}</p>
            </div>
        </div>
    );
}

export default Room;