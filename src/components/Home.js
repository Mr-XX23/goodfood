import React from 'react';
import Carasoul from './Carasoul';
import Search from './Search';
import Downloadapp from './Downloadapp';
import Testimonal from './Testimonal';
import Hero from './Hero';
import Partner from './Partner';


function Home() {
    return (
        <>
            <Search/>
            <Hero/>
            <Carasoul/>
            <Partner/>
            <Testimonal/>
            <Downloadapp/>
        </>
    )
}

export default Home
