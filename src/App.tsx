import React from "react";
import styled from "styled-components";
import { Sidebar, Input, Messages } from "./components";
import { Channel } from "./types";

const channels: Channel[] = [
  {
    name: "general",
    messages: [
      {
        timestamp: new Date("2019-11-23T09:30:30.000Z"),
        user: "marcin",
        content: "This is my first message"
      },
      {
        timestamp: new Date("2019-11-23T09:31:30.000Z"),
        user: "marcin",
        content: "This is my second message"
      }
    ]
  },
  {
    name: "random",
    messages: []
  }
];

const App: React.FC = () => {
  return (
    <>
      <Sidebar channels={channels} />
      <Content>
        <Messages messages={channels[0].messages} />
        <Input />
      </Content>
    </>
  );
};
const Content = styled.div`
  padding: 50px 0 50px 250px;
  display: flex;
`;

export default App;
