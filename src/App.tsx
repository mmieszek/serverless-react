import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Sidebar, Input, Messages } from "./components";
import { Channel } from "./types";
import { withAuthenticator } from "aws-amplify-react";
import { API, graphqlOperation } from "aws-amplify";
import { listChannels } from "./graphql/queries";
import { ListChannelsQuery, CreateMessageMutation } from "./API";
import { createMessage } from "./graphql/mutations";

const initialChannels: Channel[] = [];

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
  const onAdd = async () => {
    const input = {
      content: newMessage,
      messageChannelId: channels[0].id,
      timestamp: new Date().toISOString()
    };
    const { data } = (await API.graphql(
      graphqlOperation(createMessage, { input })
    )) as { data: CreateMessageMutation };
    if (data.createMessage) {
      channels[0].messages.push({
        id: data.createMessage.id,
        user: data.createMessage.owner as string,
        timestamp: new Date(data.createMessage.timestamp),
        content: newMessage
      });
      setChannels(channels);
    }
    setNewMessage("");
  };
  return (
    <>
      <Sidebar channels={channels} />
      <Content>
        {channels[0] && <Messages messages={channels[0].messages} />}
        <Input value={newMessage} onValueChange={setNewMessage} onAdd={onAdd} />
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
