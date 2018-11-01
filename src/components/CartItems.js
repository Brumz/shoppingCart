import React from "react";
import "../CartItems.css";

class CartItems extends React.Component {
  render() {
    var addedItem = this.props.cart.map(item => {
      return (
        <div id={item.id} className="collection-item">
          <div className="row">
            <div className="col-md-8">{item.name}</div>
            <div className="col-md-2">{"$" + item.priceInCents / 100}</div>
            <div className="col-md-2">{item.quantity}</div>
          </div>
        </div>
      );
    });
    return (
      <div className="container">
        <h1>Cart Items</h1>
        <div className="list-group">
          <div className="list-group-item">
            <div className="row">
              <div className="col-md-8" id="product">
                Product
              </div>
              <div className="col-md-2">Price</div>
              <div className="col-md-2">Quantity</div>
            </div>
          </div>
          {addedItem}
        </div>
      </div>
    );
  }
}

export default CartItems;
