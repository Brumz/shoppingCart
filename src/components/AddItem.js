import React from 'react';
import '../AddItem.css';
 
class AddItem extends React.Component {
    render() {
        var productList = this.props.products.map(product => {
            return (
                <option key={product.name} price={product.priceInCents}>{product.name}</option>
            )
        });
        return(
            <div>
                <form>
                    <h2>Quantity</h2>
                    <input type="number"className="pNumber"></input>
                    <h2>Products</h2>
                    <select className="nProducts">{productList}</select>
                    <button className="btn btn-primary"> Submit </button>
                </form>  
            </div>
        );
    }
};

export default AddItem;