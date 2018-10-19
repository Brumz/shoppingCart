import React from 'react';


class CartItem extends React.Component {
    render() {
        return (
            <div class="collection-item">
                <div class="row">
                    <div class="col-md-8">Mediocre Iron Watch</div>
                    <div class="col-md-2">$3.99</div>
                    <div class="col-md-2">1</div>
                </div>
            </div>
        )
    }
}

export default CartItem;