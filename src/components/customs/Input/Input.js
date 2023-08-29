import React from "react";

import styled from "styled-components";

const StyledInput = styled.input`
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  letter-spacing: 1px;
  color: #3b3f5c;
  padding: 12px 40px;
  outline: none;
  border: 1px solid #3b3f5c;
  border-radius: 30px;
  height: 5.8vh;
  width: 100%;
`;

const Input = ({ name, type, placeholder, value, onChange }) => {
  return (
    <StyledInput
      type={type}
      onChange={onChange}
      name={name}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default Input;
