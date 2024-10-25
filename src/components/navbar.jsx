/* import { useState } from 'react'; */
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './../navbar.css';
import useStore from './../store.js';
import { Icon } from '@iconify-icon/react';

export default function Navbar() {
const { searchQuery, setSearchQuery } = useStore();
    const navigate = useNavigate(); 

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = () => {
        if (searchQuery) {
            navigate('/search', { state: { query: searchQuery } }); 
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <>
            <nav className="nav-container">
            <Link to="/"><div className="logo">
                    <img src="https://logo-icons.com/cdn/shop/files/1329-logo-1713455809.887color-D32F2F.svg?v=1713638841&width=1445" alt="logo" />
                    <h2 className="gorcer-h2">grocer</h2><h2 className="ex-h2">ex</h2>
                </div></Link>
                
                <div className="right-nav-support-account">
                    <Icon icon="streamline:call-center-support-service" width="36" height="36" style={{ color: "#00B2EA" }} />
                    <p>Support</p>
                    <Icon icon="mdi:account-outline" width="36" height="36" style={{ color: "#00B2EA" }} />
                    <p>Account</p>
                </div>  
            </nav>
            
            <nav className="down-nav">
                <ul className="nav-list">
                    <li>Hotdeals</li>
                    <li>Shop</li>
                    <li>Home</li>
                    <li>About</li>
                    <li>Page</li>
                    <li>Contact</li>
                </ul>
                
                <div className="input-field">
                    <input 
                        type="text" 
                        placeholder="Search" 
                        value={searchQuery} 
                        onChange={handleSearchInputChange} 
                        onKeyDown={handleKeyDown} 
                    />
                    <Link to="/search" onClick={handleSearch}> 
                        <Icon 
                            icon="material-symbols:search" 
                            width="58" 
                            height="58"  
                            style={{ color: "#00B2EA", cursor: "pointer" }} 
                        />
                    </Link>
                </div>

                <div className="heart-cart-div">
                    <Icon icon="mdi:heart-outline" width="36" height="36" style={{ color: "#00B2EA", cursor: "pointer" }} />
                    <p>Add to Wishlist</p>
                    <Icon icon="mdi:cart-outline" width="36" height="36" style={{ color: "#00B2EA", cursor: "pointer" }} />
                </div>
            </nav>
        </>
    );
}
