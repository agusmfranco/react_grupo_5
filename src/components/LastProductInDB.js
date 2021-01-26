import React, {Component} from 'react';


class LastProductInDB extends Component{
    constructor(){
        super()
        this.state = {
            products: [],
            image: []
        }
    }

    componentDidMount(){
        fetch('/api/products')
        .then(response => {
            return response.json()
        })
        .then(response => {
            this.setState({products: response.data[response.data.length - 1]})
            this.setState({image: "http://localhost:3001/portadas/" + this.state.products.book_cover})            
        })
        .catch(error => console.log(error))
    }

    render(){
    return(
    <React.Fragment>
    <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Último producto agregado</h6>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 25+'rem'}} src={this.state.image} alt="image"/>
                        </div>
                        <p>{this.state.products.sinopsis}</p>
                    </div>
            </div>
    </div>
    </React.Fragment>
    )
}
}

export default LastProductInDB;