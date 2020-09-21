import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_USER = gql`
  {
    user {
      name
    }
  }
`;

export const User = () => {
  const { loading, error, data } = useQuery(GET_USER);
  if (loading) <div>...loading</div>;
  if (error) <div>error...</div>;
  return (
    <div>
      Hello World User
      <div>Name: {data.user.name}</div>
    </div>
  );
};
