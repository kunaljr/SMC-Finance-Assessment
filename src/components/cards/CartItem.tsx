import React from 'react'

//libraries
import swal from 'sweetalert';

const CartItem = ({itemDetail,key, removeItem}:any) => {

  return (
    <div className="cart_item" key={key}>
        <div className="item_img">
        <img src={itemDetail?.img} alt="Product" />
        </div>
        <div className="item_details">
        <h2>{itemDetail?.title}</h2>
        <p>Product Id - {itemDetail?.id}</p>
        <p>Quantity - {itemDetail?.quantity}</p>
        <p>₹{itemDetail?.price}</p>
        </div>
        <div className="item_actions">
        <button onClick={() => {swal({
          title: "Are you sure?",
          text: "Are you sure that you want to Remove this Item?",
          icon: "warning",
          dangerMode: true,
        }).then(() =>{removeItem(itemDetail?.id)})}}>Remove</button>
        </div>
    </div>
  )
}

export default CartItem