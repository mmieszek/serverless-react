export interface Channel {
  id?: string;
  name: string;
  messages: Message[];
}
export interface Message {
  id?: string;
  timestamp: Date;
  user: string;
  content: string;
}

export interface ListChannelsGraphQLResponse {
  data: {
    listChannels: {
      items: ChannelGraphQLResponse[];
    };
  };
}
export interface ChannelGraphQLResponse {
  id: string;
  name: string;
  messages: {
    items: MessageGraphQLResponse[];
  };
}
export interface MessageGraphQLResponse {
  id: string;
  content: string;
  owner: string;
  timestamp: string;
}
