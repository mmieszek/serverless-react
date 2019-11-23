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

export type CreateChannelMutationVariables = {
  input: CreateChannelInput,
};

export type CreateChannelMutation = {
  createChannel:  {
    __typename: "Channel",
    id: string,
    name: string,
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
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateChannelSubscription = {
  onCreateChannel:  {
    __typename: "Channel",
    id: string,
    name: string,
  } | null,
};

export type OnUpdateChannelSubscription = {
  onUpdateChannel:  {
    __typename: "Channel",
    id: string,
    name: string,
  } | null,
};

export type OnDeleteChannelSubscription = {
  onDeleteChannel:  {
    __typename: "Channel",
    id: string,
    name: string,
  } | null,
};
