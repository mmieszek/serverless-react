// tslint:disable
// this is an auto generated file. This will be overwritten

export const getChannel = `query GetChannel($id: ID!) {
  getChannel(id: $id) {
    id
    name
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
    }
    nextToken
  }
}
`;
