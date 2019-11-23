// tslint:disable
// this is an auto generated file. This will be overwritten

export const createChannel = `mutation CreateChannel($input: CreateChannelInput!) {
  createChannel(input: $input) {
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
export const updateChannel = `mutation UpdateChannel($input: UpdateChannelInput!) {
  updateChannel(input: $input) {
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
export const deleteChannel = `mutation DeleteChannel($input: DeleteChannelInput!) {
  deleteChannel(input: $input) {
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
export const createMessage = `mutation CreateMessage($input: CreateMessageInput!) {
  createMessage(input: $input) {
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
export const updateMessage = `mutation UpdateMessage($input: UpdateMessageInput!) {
  updateMessage(input: $input) {
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
export const deleteMessage = `mutation DeleteMessage($input: DeleteMessageInput!) {
  deleteMessage(input: $input) {
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
