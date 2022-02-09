import {React} from 'react'
import './CartIcon.css'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

function CartIcon(props) {
    return (<div id="cart-item">
        <Link to="/cart">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className='badge bg-danger'>{props.totalQuantity}</span>
        </Link>
    </div>)

}
const mapsToState=(state)=>{
    return {totalQuantity:state.cart.reduce((total,item)=>total+parseInt(item.quantity),0)}
}
export default connect(mapsToState)(CartIcon)