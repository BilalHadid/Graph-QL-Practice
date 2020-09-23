import React, { createRef } from "react";
import "./App.css";
// import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { GET_USER, getAllmessage } from "./User";
import { useMutation, useQuery } from "@apollo/client";

function App() {
  let { data, error, loading } = useQuery(getAllmessage);
  console.log("data", data, "error", error, "loading", loading);
  const messageValue = createRef();
  const [addMessage] = useMutation(GET_USER);
  const submit = () => {
    let message = messageValue.current.value;
    addMessage({ variables: { data: { message } } })
      .then((data) => {
        console.log("response", data);
      })
      .catch((error) => {
        console.log("error");
      });
  };
  return (
    <div className="App">
      <input ref={messageValue} placeholder="message" />
      <button onClick={submit}>Add</button>
    </div>
  );
}

export default App;
