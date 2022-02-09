import {Component, React} from 'react'
import CartItem from '../components/CartItem'
import { connect } from 'react-redux'
import { clearCart } from '../Store/actions/actions'

class Cart extends Component {
   


    render(){
        return (
            <div>
                <h1>Cart</h1>
                <div className='row'>
                    {this.props.cartItems.map((item,index)=>
                        <div className='col-3' key={index}>
                            <CartItem item={item} index={index}/>
                        </div>
                    )}
                </div>
                <br />
                <h3>
                    Total : {this.props.total}
                </h3>
                <br />
                <div className="d-grid gap">
                    <button className='btn btn-primary btn-block' onClick={()=>{this.props.clearCart();alert('Thanks , The Order is Added !')}}>
                        Place Order
                    </button>
                </div>
            </div>
          )
    }

}

const mapStateToProps=(state)=>{
    return {
        cartItems:state.cart,
        total:state.cart.reduce((total,item)=>total+item.quantity*item.product.price,0)}
}
const mapDispatchToProps=(dispatch)=>{
    return {
        clearCart:() => dispatch(clearCart())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)