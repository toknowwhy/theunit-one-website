import { gql } from '@apollo/client';

export const JOB_POSTS = gql`
  query JobPosts {
    jobPosts {
      title
      responsibility
      description
      requirements
      location
    }
  }
`;
