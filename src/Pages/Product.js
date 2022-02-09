import {Component, React} from 'react'
import { connect } from 'react-redux'
import {getById} from "../api/products"
import { addToCart } from '../Store/actions/actions'

class Product extends Component{
    
    state={
        product:[],
        quantity:0,
        loading:true
    }

    handleQuantity=(event)=>{
        const value=event.target.value
        if(value<0) return
        this.setState({quantity:value})
    }
    componentDidMount(){
        
        const id=window.location.href.toString().charAt(window.location.href.toString().length-1)
        getById(id).then(product=>{
            this.setState({product:product,loading:false})
        }).catch(err=>{
            console.log(err);
        })

    }

    render(){
        if(this.state.loading) return 'Loading ......'

        const product=this.state.product
        return (<div style={{paddingTop:'60px'}}>
            <div className='row'>
                <div className='col-6'>
                    <img src={product.image} width={'100%'} alt={product.image} style={{borderRadius:'5px'}}/>
                </div>
                <div className='col-6' style={{paddingTop:'11px'}}>
                    <h1>{product.name}</h1>
                    <p>Price : {product.price}</p>
                    <p>{product.description}</p>
                    <br />
                    <br />
                    <input type='number' value={this.state.quantity} onChange={this.handleQuantity}/>
                    <br />
                    <br />
                    <p>Total : {this.state.quantity*product.price}</p>
                    <button className='btn btn-primary' onClick={()=>this.props.addToCart(product,this.state.quantity)}>Add To Cart</button>
                </div>
            </div>
        </div>)
    }

}

const mapDispatchToProps=(dispatch)=>{
    return {
        addToCart:(productsInfo,quantity) => dispatch(addToCart(productsInfo,quantity))
    }
}
export default connect(null,mapDispatchToProps)(Product)