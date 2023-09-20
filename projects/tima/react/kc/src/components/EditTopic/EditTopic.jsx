import React, { useContext, useState } from "react";
import { topicsContext } from "../../context/TopicContext";

const EditTopic = ({ topic, onClose }) => {
  const { editTopic } = useContext(topicsContext);
  const [editedTopic, setEditedTopic] = useState({ ...topic });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTopic({
      ...editedTopic,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    editTopic(editedTopic);
    onClose();
  };

  return (
    <div>
      <h3>Edit Topic</h3>
      <input
        type="text"
        name="topicTitle"
        value={editedTopic.topicTitle}
        onChange={handleChange}
        placeholder="Topic Title"
      />
      <input
        type="text"
        name="topicDesc"
        value={editedTopic.topicDesc}
        onChange={handleChange}
        placeholder="Topic Description"
      />
      <input
        type="text"
        name="topicImg"
        value={editedTopic.topicImg}
        onChange={handleChange}
        placeholder="Topic Image URL"
      />
      <input
        type="text"
        name="topicLib"
        value={editedTopic.topicLib}
        onChange={handleChange}
        placeholder="Topic Library URL"
      />
      <button onClick={handleSubmit}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default EditTopic;
