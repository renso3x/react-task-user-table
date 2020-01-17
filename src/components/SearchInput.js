import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from 'reactstrap';

const SearchInput = ({ onChange, value }) => (
  <div>
    <Label>Seach By:</Label>
    <Input
      type="text"
      name="name"
      id="name"
      placeholder="Name"
      onChange={onChange}
      value={value}
    />
  </div>
);

SearchInput.prototype = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SearchInput;
