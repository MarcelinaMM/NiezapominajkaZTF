import React from 'react';

const SearchBox = ({ searchChange }) => {
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
                        <div className="column is-4 has-text-centered">
                            <div className="control">
                                <div className="select">
                                    <select>
                                        <option selected value="default">Wybierz pokój</option>
                                        <option value="dwojka">2-osobowy</option>
                                        <option value="trojka">3-osobowy</option>
                                        <option value="czworka">4-osobowy</option>
                                    </select><br/>
                                    <button className="button is-dark is-large"  type='search' onChange={searchChange} >Szukaj</button>
                                </div>
                            </div>
                        </div>


                        <div className="column is-4 has-text-left">
                            <h1><strong>Udogodnienia:</strong></h1><br />
                            <form>
                                <label className="faci">
                                    <input type="checkbox" name="klimatyzacja" /> klimatyzacja
                                </label><br />
                                <label className="faci">
                                    <input type="checkbox" name="lazienka" /> łazienka
                                </label><br />
                                <label className="faci">
                                    <input type="checkbox" name="balkon" /> balkon
                                </label><br />
                                <label className="faci">
                                    <input type="checkbox" name="aneks_kuchenny" /> aneks kuchenny
                                </label><br />
                                <label className="faci">
                                    <input type="checkbox" name="parter" /> pokój na parterze
                                </label><br />
                                <label className="faci">
                                    <input type="checkbox" name="alergia" /> dla alergików
                                </label>
                            </form>
                        </div>


                        <div className="column is-4 has-text-left">
                            <h1><strong>Usługi:</strong></h1><br />
                            <form>
                                <label className="serv">
                                    <input type="checkbox" name="zameldowanie" /> elastyczne zameldowanie
                                </label><br />
                                <label className="serv">
                                    <input type="checkbox" name="zwierze" /> pobyt ze zwierzeciem
                                </label><br />
                                <label className="serv">
                                    <input type="checkbox" name="dostawka" /> dodatkowe łóżko w pokoju
                                </label><br />
                                <label className="serv">
                                    <input type="checkbox" name="parking" /> rezerwacja miejsca parkingowego
                                </label><br />
                                <label className="serv">
                                    <input type="checkbox" name="sniadanie" /> śniadanie do pokoju
                                </label><br />
                                <label className="serv">
                                    <input type="checkbox" name="budzenie" /> budzenie
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