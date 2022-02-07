import React, { useState } from 'react';

import logo from '../assets/logo.svg'

import '../Styles/Navbar.css'

function Navbar({ url, setdata }) {

    const [search, setsearch] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (search.includes("http://") || search.includes("https://")) {
            // https://www.youtube.com/watch?v=I9vGhNYxm2c&list=RDMMI9vGhNYxm2c&start_radio=1    
            let paramString = search.split('?')[1];
            let queryString = new URLSearchParams(paramString);
            let search_id=queryString.get('v');
            window.open("https://www.y2mate.com/youtube/"+search_id,"_blank"); 
        }
        else 
            await fetch(url + search).then((res) => res.json()).then((res) => setdata(res.items));
        
    }

    return (
        <>
            <div className="nav_title">
                <img src={logo} alt="..." />
                <div className='nav_name'><h3>Youtube</h3><small>IN</small></div>
            </div>
            <div className='nav_search'>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder='Paste Link or Search here...'
                        value={search}
                        onChange={event => setsearch(event.target.value)} />
                </form>
            </div>

            <div className="nav_disc">
                <h4>Welcome to Youtube Downloader!</h4>
            </div>

        </>
    );
}

export default Navbar;
