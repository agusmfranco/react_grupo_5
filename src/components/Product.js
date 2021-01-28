//Componente Stateful

import React, {Component} from 'react';
import ProductList from './ProductList'
import Swal from 'sweetalert2';

class Product extends Component{
    constructor(){
        super()
        this.state = {
            response: []
        }
    }
    
    
    /*Creando un metodo
    mensaje(){
        Swal.fire(
            'Buenisimo!',
            "Hola",
            "success"
          )
    }*/


    //Componentes Ciclo de Vida - Monto - Actualizo - Desmonto
    //Montaje
    componentDidMount(){
        fetch('/api/products')
        .then(response => {
            return response.json()
        })
        .then(response => {
            this.setState({response: response.data})
        })
        .catch(error => console.log(error))
    }

    render(){
    return (
        <React.Fragment>
        
        <h1 onClick= {this.mensaje} className="h3 mb-2 text-gray-800">Todos los productos en la base de datos</h1>
        
        
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Titulo</th>
                                <th>Sinopsis</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Id</th>
                                <th>Titulo</th>
                                <th>Sinopsis</th>
                                <th>Precio</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                                this.state.response.map((producto, index) => {
                                    return <ProductList {...producto} key={index}/>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
    </div>
    
    </React.Fragment>
    )
}
}
export default Product;
