// tslint:disable
export const listChannelsWithMessages = `query ListChannelsWithMessages(
  $filter: ModelChannelFilterInput
  $limit: Int
  $nextToken: String
) {
  listChannels(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      messages {
        items {
          id
          content
          timestamp
          content
          owner
        }
      }
      owner
    }
    nextToken
  }
}
`;
