import React, { Component } from 'react';
import './Prices.css';

export default class Prices extends Component {
  render() {
    return (



        <section className="prices">
		    <div className="container">
    		    <div className="panel panel-default">
                    <div className="panel-heading">
                        <h1>CENNIK</h1>
                    </div>
                    <div className="panel-body">
                        <table className="table is-striped is-fullwidth is-hoverable">
                            <thead>
                                <th>Pokój</th>
                                <th>Cena</th>
                                <th>Dodatkowe informacje</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>2-osobowy z łazienką</th>
                                    <td>??? /os./dobę</td>
                                    <td>(pokój z łóżkiem małżeńskim na I lub II piętrze)</td>
                                </tr>
                                <tr>
                                    <th>2-osobowy z łazienką i wyjściem na ogród</th>
                                    <td>??? /os./dobę</td>
                                    <td>(pokój z łóżkiem małżeńskim na parterze)</td>
                                </tr>
                                <tr>
                                    <th>2-osobowy z łazienką i balkonem</th>
                                    <td>??? /os./dobę</td>
                                    <td>(pokój z dwoma łóżkami łączonymi na I lub II piętrze)</td>
                                </tr>
                                <tr>
                                    <th>3-osobowy z łazienką i balkonem</th>
                                    <td>??? /os./dobę</td>
                                    <td>(do wyboru: 3 łóżka pojedyncze lub łózko małżeńskie i jednoosobowe)</td>
                                </tr>
                                <tr>
                                    <th>4-osobowy z łazienką i balkonem</th>
                                    <td>??? /os./dobę</td>
                                    <td>(pokój z łóżkiem małżeńskim i rozkładaną sofą, przeznaczony dla rodziny 2+2)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}
