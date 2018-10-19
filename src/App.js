import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CartHeader from './components/CartHeader';
import CartFooter from './components/CartFooter';
import CartItems from './components/CartItems';


class App extends Component {
  constructor() {
    super();
    this.state = {
      copyrightYear: 2016
    }
  }
  render() {
    return (
      <div>
        <CartHeader />
        <CartItems />
        <CartFooter year = {this.state.copyrightYear} />
      </div>
    );
  }
}

export default App;
