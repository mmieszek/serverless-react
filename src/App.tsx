import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Sidebar, Input, Messages } from "./components";
import { Channel, ListChannelsGraphQLResponse } from "./types";
import { withAuthenticator } from "aws-amplify-react";
import { API, graphqlOperation } from "aws-amplify";
import { listChannelsWithMessages } from "./graphql/customQueries";
import { createMessage } from "./graphql/mutations";
import { onCreateMessage } from "./graphql/subscriptions";
import { Auth } from "aws-amplify";
import Observable from "zen-observable";
import { CognitoUser } from "@aws-amplify/auth";

const initialChannels: Channel[] = [];

const App: React.FC = () => {
  const [channels, setChannels] = useState<Channel[]>(initialChannels);
  const [newMessage, setNewMessage] = useState("");
  useEffect(() => {
    async function fetchData() {
      const { data } = (await API.graphql(
        graphqlOperation(listChannelsWithMessages)
      )) as ListChannelsGraphQLResponse;
      const newChannels = data.listChannels.items.map(newChannel => ({
        name: newChannel.name,
        messages: newChannel.messages.items.map(newMessage => ({
          id: newMessage.id,
          content: newMessage.content,
          user: newMessage.owner,
          timestamp: new Date(newMessage.timestamp)
        })),
        id: newChannel.id
      }));
      setChannels(channels => [...channels, ...newChannels]);
    }
    fetchData();
  }, []);
  useEffect(() => {
    let sub: any;
    const subscribe = async () => {
      const user: CognitoUser = await Auth.currentAuthenticatedUser();
      const subscription = API.graphql(
        graphqlOperation(onCreateMessage, { owner: user.getUsername() })
      ) as Observable<object>;
      sub = subscription.subscribe({
        next: (response: any) => {
          const message = response.value.data.onCreateMessage;
          setChannels(channels => {
            const [channel, ...rest] = channels;
            if (!channel.messages.some(item => item.id === message.id)) {
              channel.messages.push({
                id: message.id,
                content: message.content,
                user: message.owner,
                timestamp: new Date(message.timestamp)
              });
            }
            return [channel, ...rest];
          });
        }
      });
    };
    subscribe();
    return () => {
      sub && sub.unsubscribe();
    };
  }, []);
  const onAdd = async () => {
    const input = {
      content: newMessage,
      messageChannelId: channels[0].id,
      timestamp: new Date().toISOString()
    };
    await API.graphql(graphqlOperation(createMessage, { input }));
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
