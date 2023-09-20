import axios from "axios";
import React, { createContext, useReducer } from "react";

export const topicsContext = createContext();
const API = "http://localhost:8000/topics";
const INIT_STATE = { topics: [] };

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_TOPICS":
      return { ...state, topics: action.payload };

    default:
      break;
  }
};

const TopicContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addTopic = async (topic) => {
    await axios.post(API, topic);
  };

  const getTopics = async () => {
    const { data } = await axios.get(API);
    dispatch({
      type: "GET_TOPICS",
      payload: data,
    });
  };

  const deleteTopic = async (id) => {
    await axios.delete(`${API}/${id}`);
    getTopics();
  };

  const editTopic = async (editedTopic) => {
    await axios.put(`${API}/${editedTopic.id}`, editedTopic);
    getTopics();
  };
  return (
    <topicsContext.Provider
      value={{
        topics: state.topics,
        addTopic,
        getTopics,
        editTopic,
        deleteTopic,
      }}
    >
      {children}
    </topicsContext.Provider>
  );
};

export default TopicContextProvider;
