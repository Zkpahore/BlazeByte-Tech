import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './Comps/NavBar';
import Footer from './Comps/Footer';
import './Aps.css';

const Loader = ({ countdown }) => (
  <div className="loader-container">
    <div className="loader-pulse-ring">
      <div className="central-dot"></div>
    </div>
    <h3 className='font-serif pt-8'>Please Wait</h3>
    {/* <div className="countdown-text">{countdown}</div> */}
  </div>
);

function App() {
  const [loading, setLoading] = useState(true);
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (countdown > 0) {
      const countdownTimer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(countdownTimer);
    } else {
      setTimeout(() => setLoading(false), 1000);
    }
  }, [countdown]);

  return (
    <>
      {/* {loading ? (
        <Loader countdown={countdown} />
      ) : ( */}
        <>
          <NavBar />
          <Outlet />
          <Footer />
        </>
      {/* )} */}
    </>
  );
}

export default App;
