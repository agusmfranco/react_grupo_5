import React from 'react';
import LastProductInDB from './LastProductInDB';
import CategoryInDB from './CategoryInDB';


function ContentRowBottom(){
    return (
        <React.Fragment>
        
        <div className="row">
            
            <LastProductInDB/>

            <CategoryInDB/>
            
        </div>
        </React.Fragment>
    )
}
export default ContentRowBottom;