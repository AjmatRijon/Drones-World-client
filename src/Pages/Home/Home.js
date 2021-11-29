import { Typography } from '@mui/material';
import React from 'react';
import Footer from '../Footer/Footer';
import Banner from './Banner';
import GetInTouch from './GetInTouch';
import Items from './Items';
import Reviews from './Reviews';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <Reviews></Reviews>
            <Typography variant="h3" sx={{textAlign:"center",my:3 }}> Get In Touch</Typography>
            <GetInTouch/>
            <Footer></Footer>
        </div>
    );
};

export default Home;