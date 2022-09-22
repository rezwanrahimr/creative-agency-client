import React from 'react';
import Header from './Header/Header';
import Service from './Service/Service';
import SponsoredBy from './SponsoredBy/SponsoredBy';
import WorkSimble from './Work/WorkSimble';
import ClientFeedBack from './ClientFeedback/ClientFeedback';
import ContactUs from './ContactUs/ContactUs';


const Home = () => {
    return (
        <div className=''>
            <Header></Header>
            <SponsoredBy></SponsoredBy>
            <Service></Service>
           <WorkSimble></WorkSimble>
           <ClientFeedBack></ClientFeedBack>
           <ContactUs></ContactUs>
        </div>
    );
};

export default Home;