import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainBody from "./components/MainBody";
function App() {
  const [tabItems] = useState(["About Me", "Portfolio", "Reach Me", "Profile"]);
  const [currentTab, setCurrentTab] = useState(tabItems[0]);
  useEffect(() => {
    const title =
      "Ramu Makkena" + (currentTab === "About Me" ? "" : " - " + currentTab);
    document.title = title;
  }, [currentTab]);
  return (
    <div className="body">
      {/* <header className="d-flex flex-column bg-dark text-white p-3"> */}
      <header className="col-sm-12 col-md-12  col-lg-12">
        <Header tabItems={tabItems} setCurrentTab={setCurrentTab} />
      </header>
      {/* <main className="bg-dark text-white p-3" >
       */}
      <main className="col-sm-12 col-md-12  col-lg-12 ">
        <MainBody currentTab={currentTab} />
      </main>
      {/* <footer className="fixed-bottom pl-3 pr-3"> */}
      <footer className="d-flex col-sm-12 col-md-12 col-lg-12 bg-dark text-light justify-content-between align-items-center pe-3 fixed-bottom">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
