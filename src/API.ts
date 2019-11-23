/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateChannelInput = {
  id?: string | null,
  name: string,
};

export type UpdateChannelInput = {
  id: string,
  name?: string | null,
};

export type DeleteChannelInput = {
  id?: string | null,
};

export type CreateMessageInput = {
  id?: string | null,
  content?: string | null,
  timestamp: string,
  owner?: string | null,
  messageChannelId?: string | null,
};

export type UpdateMessageInput = {
  id: string,
  content?: string | null,
  timestamp?: string | null,
  owner?: string | null,
  messageChannelId?: string | null,
};

export type DeleteMessageInput = {
  id?: string | null,
};

export type ModelChannelFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  and?: Array< ModelChannelFilterInput | null > | null,
  or?: Array< ModelChannelFilterInput | null > | null,
  not?: ModelChannelFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDFilterInput | null,
  content?: ModelStringFilterInput | null,
  timestamp?: ModelStringFilterInput | null,
  owner?: ModelStringFilterInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
};

export type CreateChannelMutationVariables = {
  input: CreateChannelInput,
};

export type CreateChannelMutation = {
  createChannel:  {
    __typename: "Channel",
    id: string,
    name: string,
    messages:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string | null,
        timestamp: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type UpdateChannelMutationVariables = {
  input: UpdateChannelInput,
};

export type UpdateChannelMutation = {
  updateChannel:  {
    __typename: "Channel",
    id: string,
    name: string,
    messages:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string | null,
        timestamp: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type DeleteChannelMutationVariables = {
  input: DeleteChannelInput,
};

export type DeleteChannelMutation = {
  deleteChannel:  {
    __typename: "Channel",
    id: string,
    name: string,
    messages:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string | null,
        timestamp: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
};

export type CreateMessageMutation = {
  createMessage:  {
    __typename: "Message",
    id: string,
    content: string | null,
    channel:  {
      __typename: "Channel",
      id: string,
      name: string,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    timestamp: string,
    owner: string | null,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
};

export type UpdateMessageMutation = {
  updateMessage:  {
    __typename: "Message",
    id: string,
    content: string | null,
    channel:  {
      __typename: "Channel",
      id: string,
      name: string,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    timestamp: string,
    owner: string | null,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
};

export type DeleteMessageMutation = {
  deleteMessage:  {
    __typename: "Message",
    id: string,
    content: string | null,
    channel:  {
      __typename: "Channel",
      id: string,
      name: string,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    timestamp: string,
    owner: string | null,
  } | null,
};

export type GetChannelQueryVariables = {
  id: string,
};

export type GetChannelQuery = {
  getChannel:  {
    __typename: "Channel",
    id: string,
    name: string,
    messages:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string | null,
        timestamp: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type ListChannelsQueryVariables = {
  filter?: ModelChannelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChannelsQuery = {
  listChannels:  {
    __typename: "ModelChannelConnection",
    items:  Array< {
      __typename: "Channel",
      id: string,
      name: string,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage:  {
    __typename: "Message",
    id: string,
    content: string | null,
    channel:  {
      __typename: "Channel",
      id: string,
      name: string,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    timestamp: string,
    owner: string | null,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      content: string | null,
      channel:  {
        __typename: "Channel",
        id: string,
        name: string,
        owner: string | null,
      } | null,
      timestamp: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateChannelSubscriptionVariables = {
  owner: string,
};

export type OnCreateChannelSubscription = {
  onCreateChannel:  {
    __typename: "Channel",
    id: string,
    name: string,
    messages:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string | null,
        timestamp: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnUpdateChannelSubscriptionVariables = {
  owner: string,
};

export type OnUpdateChannelSubscription = {
  onUpdateChannel:  {
    __typename: "Channel",
    id: string,
    name: string,
    messages:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string | null,
        timestamp: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnDeleteChannelSubscriptionVariables = {
  owner: string,
};

export type OnDeleteChannelSubscription = {
  onDeleteChannel:  {
    __typename: "Channel",
    id: string,
    name: string,
    messages:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string | null,
        timestamp: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage:  {
    __typename: "Message",
    id: string,
    content: string | null,
    channel:  {
      __typename: "Channel",
      id: string,
      name: string,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    timestamp: string,
    owner: string | null,
  } | null,
};

export type OnUpdateMessageSubscriptionVariables = {
  owner: string,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage:  {
    __typename: "Message",
    id: string,
    content: string | null,
    channel:  {
      __typename: "Channel",
      id: string,
      name: string,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    timestamp: string,
    owner: string | null,
  } | null,
};

export type OnDeleteMessageSubscriptionVariables = {
  owner: string,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage:  {
    __typename: "Message",
    id: string,
    content: string | null,
    channel:  {
      __typename: "Channel",
      id: string,
      name: string,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    timestamp: string,
    owner: string | null,
  } | null,
};
