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
    <>
      <header className="d-flex flex-column">
       <Header tabItems={tabItems}  setCurrentTab={setCurrentTab}/>
      </header>
      <main>
        <MainBody currentTab={currentTab}/>
      </main>
      <footer className="fixed-bottom">
        <Footer/>
      </footer>
    </>
  );
}

export default App;
