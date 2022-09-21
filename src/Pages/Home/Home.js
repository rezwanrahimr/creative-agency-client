import React from 'react';
import Header from './Header/Header';
import Service from './Service/Service';
import SponsoredBy from './SponsoredBy/SponsoredBy';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <SponsoredBy></SponsoredBy>
            <Service></Service>
        </div>
    );
};

export default Home;