import './App.css';
import Articles from './components/Articles';
import Footer from './components/Footer';
import FooterEnd from './components/FooterEnd';
import Headspaces from './components/Headspaces';
import Home from './components/Home';
import Meditation from './components/Meditation';
import Mindfulness from './components/Mindfulness';
import Navbar from './components/Navbar';
import Speciality from './components/Speciality';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
   <>
   <Navbar/>
   <Home/>
   <Speciality/>
   <Headspaces/>
   <Articles/>
   <Meditation/>
   <Mindfulness/>
   <Footer/>
   <FooterEnd/>
   </>
  );
}

export default App;
