import React from 'react';
import '../AddItem.css';

class AddItem extends React.Component {
    render() {
        return(
            <div>
                <form>
                    <h2>Quantity</h2>
                    <input type="number"className="pNumber"></input>
                    <h2>Products</h2>
                    <select className="nProducts"></select>
                    <button className="btn btn-primary"> Submit </button>
                </form>  
            </div>
        )
    }
}

export default AddItem;