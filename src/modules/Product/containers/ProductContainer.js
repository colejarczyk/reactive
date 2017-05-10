import React, {Component} from 'react';
import {connect} from 'react-redux';

class ProductContainer extends Component {
  render() {
    return (
        <div>Product</div>
    );
  }
}

function mapToStateProps(state) {
  return {
    categories: state.categories,
    products: state.products,
  };
}

export default connect(mapToStateProps)(ProductContainer);
