import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
let love = "<3";
let posts = [
  { id: 1, message: "hi guys", likes: 19 },
  { id: 2, message: "hi friends", likes: 22 },
  { id: 3, message: "<3", likes: 32 },
  { id: 4, message: "hahahahahah", likes: 5 },
  { id: 5, message: "lol", likes: 5 },
];
let dialogs = [
  { id: 1, name: "Mamba" },
  { id: 2, name: "Jessy" },
  { id: 3, name: "Ally" },
  { id: 4, name: "Delpan" },
  { id: 5, name: "Jane" },
];
let messages = [
  { id: 1, message: "Hi!" },
  { id: 2, message: "How are you?" },
  { id: 3, message: "Are you here?" },
  { id: 4, message: "hahahahahah" },
  { id: 5, message: love },
];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
