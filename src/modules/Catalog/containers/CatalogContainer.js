import React, {Component} from 'react';
import {connect} from 'react-redux';

class CatalogContainer extends Component {
  render() {
    return (
        <div>Catalog</div>
    );
  }
}

function mapToStateProps(state) {
  return {
    categories: state.categories,
  };
}

export default connect(mapToStateProps)(CatalogContainer);
