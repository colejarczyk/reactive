import React from 'react';
import {Link} from 'react-router-dom';

const NoMatch = ({location}) => (
    <div>
      <h3>No match for <code>{location.pathname}</code></h3>
      <Link to='/'>Go back</Link>
    </div>
);

export default NoMatch;
