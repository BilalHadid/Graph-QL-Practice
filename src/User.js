import { gql } from "@apollo/client";

const GET_USER = gql`
  mutation createMessage($data: messageInput) {
    createMessage(input: $data) {
      message
      id
    }
  }
`;

const getAllmessage = gql`
  query getAllmessaga {
    message
    id
  }
`;
export { GET_USER, getAllmessage };
