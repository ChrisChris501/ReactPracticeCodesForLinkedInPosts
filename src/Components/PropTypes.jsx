import React from 'react';
import PropTypes from 'prop-types';
const Greeting = ({ name, age }) => {
return (
<div>
<h1>Hello, {name}!</h1>
<p>Age: {age}</p>
</div>
);
};
Greeting.propTypes = {
name: PropTypes.string.isRequired,
age: PropTypes.number
};
export default Greeting;
