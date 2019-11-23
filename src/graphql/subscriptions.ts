// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateChannel = `subscription OnCreateChannel($owner: String!) {
  onCreateChannel(owner: $owner) {
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
export const onUpdateChannel = `subscription OnUpdateChannel($owner: String!) {
  onUpdateChannel(owner: $owner) {
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
export const onDeleteChannel = `subscription OnDeleteChannel($owner: String!) {
  onDeleteChannel(owner: $owner) {
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
export const onCreateMessage = `subscription OnCreateMessage($owner: String) {
  onCreateMessage(owner: $owner) {
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
export const onUpdateMessage = `subscription OnUpdateMessage($owner: String!) {
  onUpdateMessage(owner: $owner) {
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
export const onDeleteMessage = `subscription OnDeleteMessage($owner: String!) {
  onDeleteMessage(owner: $owner) {
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
