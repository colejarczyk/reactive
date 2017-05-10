import React from 'react';
import AppBar from 'material-ui/AppBar';
import './TopBar.css';

const RightMenu = () => (
    <div className="top-bar-right">
      <i className="material-icons">search</i>
      <i className="material-icons">favorite</i>
      <i className="material-icons">shopping_cart</i>
    </div>
);

const TopBar = ({handleOnLeftIconButtonTouchTap}) => (
    <AppBar
        title="ZARA"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonTouchTap={handleOnLeftIconButtonTouchTap}
        className="top-bar"
        iconElementRight={<RightMenu />}
    />
);

export default TopBar;

