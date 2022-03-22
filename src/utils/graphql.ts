import { gql } from '@apollo/client';

export interface JobPost {
  _id: string;
  title: string;
  responsibility: string;
  description: string;
  requirements: string;
  location: string;
}

export interface UnitHourlyData {
  time: Date;
  value: number;
  market_cap: number;
  volume: number;
  epoch: number;
}

export const JOB_POSTS = gql`
  query JobPosts {
    jobPosts {
      _id
      title
      responsibility
      description
      requirements
      location
    }
  }
`;

export const JOB_POST = gql`
  query JobPost($id: String!) {
    jobPost(id: $id) {
      title
      responsibility
      description
      requirements
      location
    }
  }
`;

export const UNIT_IN_USD = gql`
  query UnitInUsd {
    unitHourlyData(limit: 1, currency: "usd") {
      value
    }
  }
`;
