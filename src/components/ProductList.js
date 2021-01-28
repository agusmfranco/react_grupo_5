import React from 'react';

function ProductList(props){
    return(
        <React.Fragment>
        <tr>
                <td>{props.id}</td>
                <td>{props.title}</td>
                <td>{props.sinopsis}</td>
                <td>{"$" + props.price}</td>
        </tr>
        </React.Fragment>
    )
}

export default ProductList;