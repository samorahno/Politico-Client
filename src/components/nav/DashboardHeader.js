import React from 'react';
import '../../styles/dashboard.css';

const Header = () => {
    return (
        <div>
            <header>
		        <a href="dashboard.html"><span />Politico</a>

                <a href="#"
                    className="minimize_button"
                    onClick="togle_nav_func()"
                >
                    <span><i className="fa fa-bars fa-1x" /></span></a>
	        </header>
        </div>
    );
};

export default Header;
