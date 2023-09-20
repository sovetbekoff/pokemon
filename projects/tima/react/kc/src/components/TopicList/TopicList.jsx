import React, { useContext, useEffect, useState } from "react";
import { topicsContext } from "../../context/TopicContext";
import EditTopic from "../EditTopic/EditTopic";
import { useNavigate } from "react-router-dom";
const TopicList = () => {
  const { topics, getTopics, deleteTopic } = useContext(topicsContext);
  const [editTopicId, setEditTopicId] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    getTopics();
  }, []);

  const handleDelete = (id) => {
    deleteTopic(id);
  };

  const handleEdit = (id) => {
    setEditTopicId(id);
  };

  const handleCloseEdit = () => {
    setEditTopicId(null);
  };

  return (
    <div>
      <button onClick={() => navigate("/add")}>addd new contact</button>
      <div className="topic-list-container">
        {topics.map((item) => (
          <div className="topic-item" key={item.id}>
            <h3>{item.topicTitle}</h3>
            <p>{item.topicDesc}</p>
            <img src={item.topicImg} alt={item.topicTitle} />
            <p>{item.topicLib}</p>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
            <button onClick={() => handleEdit(item.id)}>Edit</button>
            {editTopicId === item.id && (
              <EditTopic topic={item} onClose={handleCloseEdit} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicList;
