import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
    return (
        // <div className='pa2'>
        //     <input
        //         className='pa3 ba b--green bg-lightest-blue'
        //         type='search'
        //         placeholder='search robots'
        //         onChange={searchChange}
        //     />
            <div className="container">
                <div className="browser">
                    <div className="box">
                        <h2 className="has-text-centered"><strong>Znajdź pokój</strong></h2>
                        <div className="columns pd is-desktop">
                            <div className="column is-4 has-text-left">
                                <div className="control">
                                    <div className="select">
                                        <select>
                                            <option>Wybierz pokój</option>
                                            <option>2-osobowy</option>
                                            <option>3-osobowy</option>
                                            <option>4-osobowy</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="column is-4 has-text-left">
                                <h1><strong>Udogodnienia:</strong></h1><br />
                                <form>
                                    <label className="faci">
                                        <input type="checkbox" name="name" /> klimatyzacja
                    </label><br />
                                    <label className="faci">
                                        <input type="checkbox" name="name" /> łazienka
                    </label><br />
                                    <label className="faci">
                                        <input type="checkbox" name="name" /> balkon
                    </label><br />
                                    <label className="faci">
                                        <input type="checkbox" name="name" /> aneks kuchenny
                    </label><br />
                                    <label className="faci">
                                        <input type="checkbox" name="name" /> pokój na parterze
                    </label><br />
                                    <label className="faci">
                                        <input type="checkbox" name="name" /> dla alergików
                    </label>
                                </form>
                            </div>


                            <div className="column is-4 has-text-left">
                                <h1><strong>Usługi:</strong></h1><br />
                                <form>
                                    <label className="faci">
                                        <input type="checkbox" name="name" /> elastyczne zameldowanie
                    </label><br />
                                    <label className="faci">
                                        <input type="checkbox" name="name" /> pobyt ze zwierzeciem
                    </label><br />
                                    <label className="faci">
                                        <input type="checkbox" name="name" /> dodatkowe łóżko w pokoju
                    </label><br />
                                    <label className="faci">
                                        <input type="checkbox" name="name" /> rezerwacja miejsca parkingowego
                    </label><br />
                                    <label className="faci">
                                        <input type="checkbox" name="name" /> śniadanie do pokoju
                    </label><br />
                                    <label className="faci">
                                        <input type="checkbox" name="name" /> budzenie
                    </label>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default SearchBox;