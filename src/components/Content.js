import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import MainContent from './MainContent';

function Content(){
    return(
        <React.Fragment>
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
             <MainContent/>
             <Footer/>
             </div>
        </div>
        </React.Fragment>
    )
}

export default Content;