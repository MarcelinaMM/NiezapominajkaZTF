import React from 'react';
import Room from './Room.js';
import {roomsData} from './rooms_list';

const RoomList = ({ roomsData }) => {
    return(
        <div>
            {roomsData?
                 roomsData.map((value, i) => {
                    return(
                        <Room 
                            key={i}
                            id={value[i].id}
                            name={value[i].name}
                            // rodzaj={room[i].rodzaj}
                            // klimatyzacja={room[i].klimatyzacja}
                            // lazienka= {room[i].lazienka}
                            // balkon={room[i].balkon}
                            // aneks_kuchenny={room[i].aneks_kuchenny}
                            // parter={room[i].parter}
                            // alergia={room[i].alergia}
                            // zameldowanie={room[i].zameldowanie}
                            // zwierze={room[i].zwierze}
                            // dostawka={room[i].dostawka}
                            // parking={room[i].parking}
                            // sniadanie={room[i].sniadanie}
                            // budzenie={room[i].budzenie}                          
                        />
                    );
                })
            :"Ładowanie..."
}
        </div>
        
    );
}

export default RoomList;