import React from 'react';


class CartItem extends React.Component {
    render() {
        return (
            <div className="collection-item">
                <div className="row">
                    <div className="col-md-8">Mediocre Iron Watch</div>
                    <div className="col-md-2">$3.99</div>
                    <div className="col-md-2">1</div>
                </div>
            </div>
        )
    }
}

export default CartItem;