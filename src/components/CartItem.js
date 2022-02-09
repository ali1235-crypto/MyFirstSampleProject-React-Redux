import {React} from 'react'
import {connect} from 'react-redux'
import { removeFromCart } from '../Store/actions/actions'

function CartItem(props) {
    return (
        <div className="card">
            <img src={props.item.product.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.item.product.name}</h5>
                <p className="card-text">
                Price : {props.item.product.price}
                <br />
                Quantity : {props.item.quantity}
                <br />
                Total : {props.item.product.price*props.item.quantity}
                </p>

                <button className="btn btn-danger" onClick={()=>props.removeFromCart(props.index)}>
                    <i className='fa fa-trash'></i> Delete</button>
            </div>
        </div>
  )

}


const mapDispatchToProps=(dispatch)=>{
    return {
        removeFromCart:(index) => dispatch(removeFromCart(index))
    }
}
export default connect(null,mapDispatchToProps)(CartItem)