import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Sidebar, Input, Messages } from "./components";
import { Channel } from "./types";
import { withAuthenticator } from "aws-amplify-react";
import { API, graphqlOperation } from "aws-amplify";
import { listChannels } from "./graphql/queries";
import { ListChannelsQuery } from "./API";

const initialChannels: Channel[] = [
  {
    id: "general",
    name: "general",
    messages: [
      {
        id: "1",
        timestamp: new Date("2019-11-23T09:30:30.000Z"),
        user: "marcin",
        content: "This is my first message"
      },
      {
        id: "2",
        timestamp: new Date("2019-11-23T09:31:30.000Z"),
        user: "marcin",
        content: "This is my second message"
      }
    ]
  }
];

const App: React.FC = () => {
  const [channels, setChannels] = useState<Channel[]>(initialChannels);
  const [newMessage, setNewMessage] = useState("");
  useEffect(() => {
    async function fetchData() {
      const { data } = (await API.graphql(graphqlOperation(listChannels))) as {
        data: ListChannelsQuery;
      };
      if (data.listChannels && data.listChannels.items) {
        const newChannels: Channel[] = [];
        data.listChannels.items.forEach(newChannel => {
          if (newChannel) {
            newChannels.push({
              name: newChannel.name,
              messages: [],
              id: newChannel.id
            });
          }
        });
        setChannels(channels => [...channels, ...newChannels]);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <Sidebar channels={channels} />
      <Content>
        <Messages messages={channels[0].messages} />
        <Input
          value={newMessage}
          onValueChange={setNewMessage}
          onAdd={() => {
            channels[0].messages &&
              channels[0].messages.push({
                user: "marcin",
                timestamp: new Date(),
                content: newMessage
              });
            setChannels(channels);
            setNewMessage("");
          }}
        />
      </Content>
    </>
  );
};
const Content = styled.div`
  padding: 50px 0 50px 250px;
  display: flex;
  flex-grow: 1;
`;

export default withAuthenticator(App, true);
