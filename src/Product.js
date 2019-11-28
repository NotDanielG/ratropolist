import React from 'react';
import './Product.css'

class Product extends React.Component {
  render() {
	let classToApply = this.props.product.selected? "selected": "";
	  
    return <li onClick={() => this.props.selectHandler(this.props.product.code)} className={classToApply}>
      <h3>{this.props.product.name}</h3>
      <p>{this.props.product.description}</p>
    </li>;
  }
}

export default Product;
