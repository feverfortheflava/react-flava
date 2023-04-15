import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "hi guys", likes: 19 },
      { id: 2, message: "hi friends", likes: 22 },
      { id: 3, message: "<3", likes: 32 },
      { id: 4, message: "hahahahahah", likes: 5 },
      { id: 5, message: "lol", likes: 5 },
    ],
    newPostText: "it-kamasutra.com",
  },
  messagesPage: {
    dialogs: [
      { id: 1, name: "Mamba" },
      { id: 2, name: "Jessy" },
      { id: 3, name: "Ally" },
      { id: 4, name: "Delpan" },
      { id: 5, name: "Jane" },
    ],
    messages: [
      { id: 1, message: "Hi!" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "Are you here?" },
      { id: 4, message: "hahahahahah" },
      { id: 5, message: "<3" },
    ],
  },
};

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likes: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export default state;
