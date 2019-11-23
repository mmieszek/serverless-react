import React, { FC } from "react";
import styled from "styled-components";
import { Message } from "../../types";

interface Props {
  messages: Message[];
}
export const Messages: FC<Props> = ({ messages }) => (
  <Container>
    {messages.map(message => (
      <StyledMessage key={message.id}>
        <div>
          <strong>{message.user}</strong> {message.timestamp.toDateString()}
        </div>
        <div>{message.content}</div>
      </StyledMessage>
    ))}
  </Container>
);
const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 20px;
`;
const StyledMessage = styled.div`
  margin-bottom: 20px;
`;
