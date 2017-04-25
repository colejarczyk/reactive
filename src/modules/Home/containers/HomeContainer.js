import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MainNavigation from '../../../components/MainNavigation';
import TopHeader from '../../../components/TopHeader';
import Slider from '../components/Slider';

class HomeContainer extends Component {

  static propTypes = {
    categories: PropTypes.array.isRequired,
    products: PropTypes.array.isRequired,
  };

  render() {
    return (
        <div>
          <TopHeader/>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <MainNavigation categories={this.props.categories}/>
              </div>
            </div>
          </div>
          <Slider products={this.props.products}/>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                Products
              </div>
            </div>
          </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories,
    products: state.products,
  };
}

export default connect(mapStateToProps)(HomeContainer);
