import { gql } from 'graphql-request'

export default gql`
  query user ($id: String!) {
    user(id:$id) {
      emotes {
        id
        name
        owner_id
        visibility
        tags
        height
        width
      }
    }
  }
`;