import React, {Component} from 'react';
import {connect} from 'react-redux';
import MainNavigation from '../../../components/MainNavigation';
import TopHeader from '../../../components/TopHeader';

class CatalogContainer extends Component {
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

function mapToStateProps(state) {
  return {
    categories: state.categories,
  };
}

export default connect(mapToStateProps)(CatalogContainer);
