import React, { useState, useEffect } from 'react';
import './App.css';
import About from './elements/About/About';
import Header from './elements/Header/Header';
import Services from './elements/Services/Services';
import WhyWe from './elements/WhyWe/WhyWe';
// import Map from './elements/Map/Map';

function App() {
  const [helloAnimation, setHelloAnimation] = useState(false);
  useEffect(() => {
    setTimeout(() => setHelloAnimation(false), 3000);
  }, []);
  return (
    helloAnimation ? (
      <div className="hello-animation">
        <div className="hello-animation-text">concretica</div>
      </div>
    ) : (
      <>
        <Header />
        <About />
        <WhyWe />
        <Services />
        {/* <div className="map">
          <Map />
        </div> */}
      </>
    )
  );
}

export default App;
