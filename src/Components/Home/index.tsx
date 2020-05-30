import React from 'react'

import Map from './Map';

const Home: React.FC = () => {
    return (
        <div style={{minHeight: "100vh"}} className="home">
            <h1>Accueil</h1>
            <Map />
        </div>
    )
}

export default Home;