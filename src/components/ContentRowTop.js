import { render } from '@testing-library/react';
import React, { Component } from 'react';
import SmallCard from './SmallCard'


class ContentRowTop extends Component{
    constructor(){
        super()
        this.state = {
            userCount: [],
            productCount: []            
        }
    }

componentDidMount(){
    fetch('/api/users')
        .then(response => {
            return response.json()
        })
        .then(response => {
            this.setState({userCount: response.meta.count})
        })
        .catch(error => console.log(error))
    fetch('/api/products')
        .then(response => {
            return response.json()
        })
        .then(response => {
            this.setState({productCount: response.meta.count})           
        })
        .catch(error => console.log(error))
    }


    render(){
        let productsInDataBase = {
            color:  "primary",
            titulo: "Productos en la base de datos",
            valor: this.state.productCount,
            icono: "fa-clipboard-list",
            moneda: false
        };
        
        let amount = {
            color:  "success",
            titulo: "Total $ en productos",
            valor: 15190,
            icono: "fa-dollar-sign",
            moneda: true
        };
        
        let users = {
            color:  "warning",
            titulo: "Cantidad de usuarios registrados",
            valor: this.state.userCount,
            icono: "fa-user-check",
            moneda: false
        };
        
        let cardProps = [productsInDataBase, amount, users];
        
    return (
        <React.Fragment>
        
        <div className="row">
            {
                cardProps.map((producto, index)=>{
                    return <SmallCard {...producto} key= {index}/>
                })
            }
        </div>
        </React.Fragment>
    )
}
}

export default ContentRowTop;