import React from 'react';
import ContentRowTop from './ContentRowTop';
import ContentRowBottom from './ContentRowBottom';
import Product from './Product';
import Icono from '../assets/images/favicon.ico'

function MainContent(){
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">BiBlo Dashboard <img src={Icono} /></h1>
                </div>
                <ContentRowTop />
                <ContentRowBottom />
                <Product />
            </div>       
        </React.Fragment>
    )
}
export default MainContent;