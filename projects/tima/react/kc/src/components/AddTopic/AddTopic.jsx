import React, { useContext } from "react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { topicsContext } from "../../context/TopicContext";
import { useNavigate } from "react-router-dom";
const AddTopic = () => {
  const { addTopic } = useContext(topicsContext);
  const [topicTitle, setTopicTitle] = useState("");
  const [topicDesc, setTopicDesc] = useState("");
  const [topicImg, setTopicImg] = useState("");
  const [topicLib, setTopicLib] = useState("");
  const navigate = useNavigate();
  const notify = () => toast.error("Заполните поля");

  const handleClick = () => {
    if (!topicTitle || !topicDesc || !topicImg || !topicLib) {
      notify();
      return;
    }

    console.log("works");

    let newTopic = {
      topicTitle,
      topicDesc,
      topicImg,
      topicLib,
    };
    addTopic(newTopic);
    setTopicTitle("");
    setTopicImg("");
    setTopicDesc("");
    setTopicLib("");
    navigate("/");
  };

  return (
    <div>
      <input
        type="text"
        value={topicTitle}
        onChange={(e) => setTopicTitle(e.target.value)}
        placeholder="Название"
      />
      <input
        type="text"
        value={topicDesc}
        onChange={(e) => setTopicDesc(e.target.value)}
        placeholder="описание"
      />
      <input
        type="text"
        value={topicImg}
        onChange={(e) => setTopicImg(e.target.value)}
        placeholder="url изображение"
      />
      <input
        type="text"
        value={topicLib}
        onChange={(e) => setTopicLib(e.target.value)}
        placeholder="ссылка на источник"
      />
      <button onClick={handleClick}>Добавить</button>
      <ToastContainer position="top-center" pauseOnHover={true} />
    </div>
  );
};

export default AddTopic;
