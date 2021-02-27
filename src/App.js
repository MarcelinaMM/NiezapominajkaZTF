
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Rooms from './components/Rooms/Rooms';
import SpecialOffers from './components/SpecialOffers/SpecialOffers';
import Prices from './components/Prices/Prices';
import Contact from './components/Contact/Contact';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Header />

          <Route exact={true} path="/" component={ Home } />
          <Route path="/Rooms" component={ Rooms } />
          <Route path="/SpecialOffers" component={ SpecialOffers } />
          <Route path="/Prices" component={ Prices } />
          <Route path="/Contact" component={ Contact } />

        <Footer />
    </div>
  );
}

export default App;
