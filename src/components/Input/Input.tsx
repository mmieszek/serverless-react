import React from "react";
import styled from "styled-components";

export const Input = () => <InputControl placeholder="Type your message" />;

const InputControl = styled.input`
  position: fixed;
  bottom: 0;
  left: 250px;
  right: 50px;
  height: 40px;
  width: calc(100vw - 300px);
  border: 2px solid lightgray;
  border-radius: 5px;
  margin-bottom: 20px;
  font-size: 16px;
  font-family: Lato, sans-serif;
  padding-left: 12px;
  &:active,
  &:focus {
    outline: none;
  }
`;
