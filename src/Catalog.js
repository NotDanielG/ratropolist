import React from 'react';
import './Catalog.css';
import ProductList from './ProductList';

class Catalog extends React.Component {
  constructor() {
    super();
    this.state = { products: [] };

    fetch("products.json")
      .then(response => response.json())
      .then(json => {this.setState({products: json})})
      .catch(error => console.log(error));
  }
  
  select(productCode) {
    let productList = this.state.products.map((p) => {
      if (p.code === productCode) {
        const p_copy = {...p}; // Makes a copy of the `p` object to avoid mutating state directly.
        p_copy.selected = !p.selected;
        return p_copy;
      }
      return p;
	});
    this.setState({products: productList});
  }

  render() {
    return <div>
      <h2>Wine Catalog</h2>
      <ProductList products={this.state.products} selectHandler={this.select.bind(this)}/>
    </div>;
  }
}

export default Catalog;

