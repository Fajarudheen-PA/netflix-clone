import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import {originals, actions, comedy, horror, romance, documentaries} from './urls'
import './App.css';
import Banner from './Components/Banner/Banner';
import RawPost from './Components/RawPost/RawPost';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <RawPost url={originals} title='Netflix Originals' isLarge/>
      <RawPost url={actions} title='Action' isSmall/>
      <RawPost url={comedy} title='Comedy' isSmall/>
      <RawPost url={horror} title='Horror' isSmall/>
      <RawPost url={documentaries} title='Documentaries' isSmall/>
      <RawPost url={romance} title='Romance' isSmall/>
      <Footer/>
    </div>
  );
}

export default App;
