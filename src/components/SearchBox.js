import React from 'react';

const SearchBox = ({ onSearchChange }) => {
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
                            <form>
                            {/* <form onSubmit={this.handleSubmit}> */}
                                    <select value={this.state.value}  onChange={this.onSearchChange} >
                                        <option value="default">Wybierz pokój</option>
                                        <option value="dwojka" >2-osobowy</option>
                                        <option value="trojka">3-osobowy</option>
                                        <option value="czworka">4-osobowy</option>
                                    </select><br/>
                                    {/* <input className="button is-dark is-large"  type='submit' value="Szukaj" >Szukaj</input> */}
                            </form>
                        </div>


                        <div className="column is-4 has-text-left">
                            <h1><strong>Udogodnienia:</strong></h1><br />
                            <form >
                                <label className="faci">
                                    <input type="checkbox"  checked={this.state.klimatyzacja} onChange={this.onSearchChange} name="klimatyzacja"/> klimatyzacja
                                </label><br />
                                <label className="faci">
                                    <input type="checkbox" checked={this.state.lazienka} onChange={this.onSearchChange} name="lazienka" /> łazienka
                                </label><br />
                                <label className="faci">
                                    <input type="checkbox" checked={this.state.balkon} onChange={this.onSearchChange} name="balkon" /> balkon
                                </label><br />
                                <label className="faci">
                                    <input type="checkbox" checked={this.state.aneks_kuchanny} onChange={this.onSearchChange} name="aneks_kuchenny" /> aneks kuchenny
                                </label><br />
                                <label className="faci">
                                    <input type="checkbox" checked={this.state.parter} onChange={this.onSearchChange} name="parter" /> pokój na parterze
                                </label><br />
                                <label className="faci">
                                    <input type="checkbox" checked={this.state.alergia} onChange={this.onSearchChange} name="alergia" /> dla alergików
                                </label>
                            </form>
                        </div>


                        <div className="column is-4 has-text-left">
                            <h1><strong>Usługi:</strong></h1><br />
                            <form>
                                <label className="serv">
                                    <input type="checkbox"  checked={this.state.zameldowanie}  onChange={this.onSearchChange} value="zameldowanie" /> elastyczne zameldowanie
                                </label><br />
                                <label className="serv">
                                    <input type="checkbox"  checked={this.state.zwierze}  onChange={this.onSearchChange} value="zwierze" /> pobyt ze zwierzeciem
                                </label><br />
                                <label className="serv">
                                    <input type="checkbox" checked={this.state.dostawka}  onChange={this.onSearchChange} value="dostawka" /> dodatkowe łóżko w pokoju
                                </label><br />
                                <label className="serv">
                                    <input type="checkbox" checked={this.state.parking}  onChange={this.onSearchChange} value="parking" /> rezerwacja miejsca parkingowego
                                </label><br />
                                <label className="serv">
                                    <input type="checkbox" checked={this.state.sniadanie}  onChange={this.onSearchChange} value="sniadanie" /> śniadanie do pokoju
                                </label><br />
                                <label className="serv">
                                    <input type="checkbox" checked={this.state.budzenie}  onChange={this.onSearchChange} value="budzenie" /> budzenie
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