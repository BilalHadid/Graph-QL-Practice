import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_USER = gql`
  {
    getName
  }
`;

export const User = () => {
  const { loading, error, data } = useQuery(GET_USER);
  if (loading) return <div>...Loadinf is</div>;
  return (
    <div>
      Hello World User
      <div>Name: {data.getName}</div>
    </div>
  );
};
