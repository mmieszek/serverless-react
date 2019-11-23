import React, { FC } from "react";
import styled from "styled-components";
import { Channel } from "../../types";

interface Props {
  channels: Channel[];
}
export const Sidebar: FC<Props> = ({ channels }) => (
  <Container>
    <Text>Channels</Text>
    {channels.map(channel => (
      <Text key={channel.name}># {channel.name}</Text>
    ))}
  </Container>
);

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 180px;
  background-color: #3a133e;
  padding-top: 80px;
  padding-left: 20px;
  z-index: -1;
`;
const Text = styled.div`
  font-family: Lato, sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: lightgray;
`;
