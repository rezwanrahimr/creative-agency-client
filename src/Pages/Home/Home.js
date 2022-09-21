import React from 'react';
import Header from './Header/Header';
import Service from './Service/Service';
import SponsoredBy from './SponsoredBy/SponsoredBy';
import Work from './Work/Work';
import WorkSimble from './Work/WorkSimble';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <SponsoredBy></SponsoredBy>
            <Service></Service>
            <WorkSimble></WorkSimble>
        </div>
    );
};

export default Home;