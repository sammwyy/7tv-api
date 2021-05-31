import { gql } from 'graphql-request'

export default gql`
  query user ($id: String!) {
    user(id:$id) {
      id
      description
      twitch_id
      role {
        name
        color
        position
      }
      editor_ids
      display_name
      profile_image_url
      banned
    }
  }
`;