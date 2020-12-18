import React from "react";
import {
  InputGroup,
  FormSelect
} from "shards-react";

const CustomSelect = () => (
  <div>
    <InputGroup className="mb-3">
      <FormSelect>
        <option>Choose</option>
        <option>...</option>
      </FormSelect>
    </InputGroup>
  </div>
);

export default CustomSelect;
