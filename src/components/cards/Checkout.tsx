import React from 'react'

const Checkout = ({price, totalItems}:any) => {
    
  return (
    <div className="cart_items_price_details">
        <header>
            <h2>
            Price Details
            </h2>
        </header>
        <div className="item_price">
            <div className="price">
                <p>Price ({totalItems} Items)</p><p>{price}</p>
            </div>
            <div className="price_discount">
                <p>Discount</p><p>000</p>
            </div>
            <div className="total_amount">
                <h3>Total Amount</h3> <h3>{price}</h3>
            </div>
            <div className="place_order_button">
                <button className="place_order_btn">
                    Place Order
                </button>
            </div>
        </div>
    </div>
  )
}

export default Checkout