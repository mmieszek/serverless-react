import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  value?: string;
  onValueChange: (message: string) => void;
  onAdd: () => void;
}
export const Input: FC<Props> = ({ value, onValueChange, onAdd }) => (
  <InputControl
    placeholder="Type your message"
    value={value}
    onChange={e => onValueChange(e.target.value)}
    onKeyDown={e => e.key === "Enter" && onAdd()}
  />
);

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
