import React, {Component} from 'react';
import {connect} from 'react-redux';
import MainNavigation from '../../../components/MainNavigation';

class ProductContainer extends Component {
  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <MainNavigation categories={this.props.categories} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              Product
            </div>
          </div>
        </div>
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
