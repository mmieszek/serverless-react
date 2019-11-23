// tslint:disable
// this is an auto generated file. This will be overwritten

export const getChannel = `query GetChannel($id: ID!) {
  getChannel(id: $id) {
    id
    name
    messages {
      items {
        id
        content
        timestamp
        owner
      }
      nextToken
    }
    owner
  }
}
`;
export const listChannels = `query ListChannels(
  $filter: ModelChannelFilterInput
  $limit: Int
  $nextToken: String
) {
  listChannels(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      messages {
        nextToken
      }
      owner
    }
    nextToken
  }
}
`;
export const getMessage = `query GetMessage($id: ID!) {
  getMessage(id: $id) {
    id
    content
    channel {
      id
      name
      messages {
        nextToken
      }
      owner
    }
    timestamp
    owner
  }
}
`;
export const listMessages = `query ListMessages(
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      channel {
        id
        name
        owner
      }
      timestamp
      owner
    }
    nextToken
  }
}
`;
