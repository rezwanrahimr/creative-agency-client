import React from 'react';
import Header from './Header/Header';
import Service from './Service/Service';
import SponsoredBy from './SponsoredBy/SponsoredBy';
import WorkSimble from './Work/WorkSimble';
import ClientFeedBack from './ClientFeedback/ClientFeedback';


const Home = () => {
    return (
        <div className=''>
            <Header></Header>
            <SponsoredBy></SponsoredBy>
            <Service></Service>
           <WorkSimble></WorkSimble>
           <ClientFeedBack></ClientFeedBack>
        </div>
    );
};

export default Home;