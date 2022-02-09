import {Component, React} from 'react'
import ProductItem from '../components/ProductItem'
import productsApi from '../api/products'


export default class Products extends Component {
   
    state={
        products:[]
    }
    
    componentDidMount(){
        productsApi.getAll().then(
            data=>{
                this.setState({products:data})
            }
        )
        .catch(err=>{
            console.log(err);
        })
    }

    render(){
        return (
            <div>
                <h1>Products</h1>
                <div className='row'>
                    {this.state.products.map((item,index)=>
                        <div className='col-4' key={index}>
                            <ProductItem product={item}/>
                        </div>
                    )}
                </div>
            </div>
          )
    }

}
