import React from 'react';
import './ProductList.css';
import Product from './Product';

class ProductList extends React.Component {
  render() {
    let products = [];

    for (let product of this.props.products) {
      products.push(<Product product={product} selectHandler={this.props.selectHandler}/>);
    }

    return <ul>{products}</ul>;
  }
}

export default ProductList;
