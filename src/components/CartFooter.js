import React from 'react';

class CartFooter extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="#">&copy; {this.props.year}</a>
            </nav>
        );
    }
};

export default CartFooter;