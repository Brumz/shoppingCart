import React, { Component } from "react";
import "./App.css";
import CartHeader from "./components/CartHeader";
import CartFooter from "./components/CartFooter";
import CartItems from "./components/CartItems";
import AddItem from "./components/AddItem";

class App extends Component {
  constructor() {
    super();
    const products = [
      { id: 40, name: "Mediocre Iron Watch", priceInCents: 399 },
      { id: 41, name: "Heavy Duty Concrete Plate", priceInCents: 499 },
      { id: 42, name: "Intelligent Paper Knife", priceInCents: 1999 },
      { id: 43, name: "Small Aluminum Keyboard", priceInCents: 2500 },
      { id: 44, name: "Practical Copper Plate", priceInCents: 1000 },
      { id: 45, name: "Awesome Bronze Pants", priceInCents: 399 },
      { id: 46, name: "Intelligent Leather Clock", priceInCents: 2999 },
      { id: 47, name: "Ergonomic Bronze Lamp", priceInCents: 40000 },
      { id: 48, name: "Awesome Leather Shoes", priceInCents: 3990 }
    ];

    this.state = {
      copyrightYear: 2016,
      products: products,
      quantity: 0,
      name: "",
      cart: [],
      totalPrice: 0,
      price: 0,
      arr: []
    };
  }

  grabThis = e => {
    const array = this.state.products.filter(item => item.name === e);
    this.setState({
      arr: array[0],
      price: (this.state.price += array[0].priceInCents)
    });
  };

  changeQuantity = e => {
    this.setState({
      quantity: e
    });
  };

  SubmitItems = e => {
    e.preventDefault();
    this.setState({
      cart: [...this.state.cart, this.state.arr]
    });
  };
  //  let total = () => {
  //    return ((this.state.priceInCents / 100) * this.state.quantity)
  //  }
  //  var total =  ((this.state.priceInCents / 100) * this.state.quantity)

  render() {
    return (
      <div>
        <CartHeader />
        <CartItems cart={this.state.cart} quantity={this.state.quantity} />
        <h2>
          Total:{" "}
          {(this.state.priceInCents / 100) * parseInt(this.state.quantity)}
        </h2>
        <AddItem
          products={this.state.products}
          grabThis={this.grabThis}
          changeQuantity={this.changeQuantity}
          submit={this.SubmitItems}
        />
        <CartFooter year={this.state.copyrightYear} />
      </div>
    );
  }
}

export default App;
