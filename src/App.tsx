import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainBody from './components/MainBody';
function App() {
  const [tabItems] = useState(["About Me", "Portfolio", "Reach Me", "Profile"]);
  const [currentTab, setCurrentTab] = useState(tabItems[0]);
  useEffect(()=>{
    const title = "Ramu Makkena"+(currentTab==="About Me"?"":" - "+currentTab);
    document.title = title;
  },[currentTab]);
  return (
    <div className="App">
      <header className="d-inline">
       <Header tabItems={tabItems}  setCurrentTab={setCurrentTab}/>
       <h1> Tab select : {currentTab}</h1>
      </header>
      <main className='body'>
        <MainBody currentTab={currentTab}/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
