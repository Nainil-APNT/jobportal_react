import React from 'react';
import backgroundImage from './FrontPage/back.jpg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="absolute inset-0 bg-cover bg-center opacity-60"
     style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Link to="/addCompany" className="block text-white px-10 font-semibold text-xl">
        Company
      </Link>
    </div>
  );
}

export default Home;
