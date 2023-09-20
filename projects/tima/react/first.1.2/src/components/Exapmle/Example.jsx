import React, { useCallback, useEffect, useState } from "react";

const Example = ({ modalContent, closeModal }) => {
  // useEffect - это хук, поэтому его можно вызывать только на верхнем
  //   уровне компонента или в кастомных хуках. Мы не можем вызывать его
  //  внутри циклов и условий.

  //   Best pracrise useEffect - нужно выполнять только одну задачи с
  // испольнованием use Effect для нескольких задач можно использовать
  // несколько useeffect  доя одного и того же компонента незначение useEffect
  //  не короткие и одноцелевые функции предотвращает нежелательну повторную
  //   визуализацию и позволяет сохранить код чистым и читабельным

  // useCallback - это хук React который позволяет кэшировать определение
  //    функции между повторными рендерингами. При первоначальном рендере
  //  useCallback возвращает переданную нами функцию. А при последующих
  //  рендерах она либо вернет уже сохранненую функцию из последнего рендера
  //  (если зависимости не изменились) либо вернет функцию которую мы
  // передали во время этого рендера.

  const [count, setCount] = useState(0);
  const getRes = useCallback(() => {
    return 2 * 2;
  }, []);

  useEffect(() => {
    setCount((count) => count + 1);
  }, [getRes]);
  // useEffect(() => {
  //     const getUsers = async () => {
  //         const { data } = await axios.get('.../api/user')
  //         setUser(data)
  //     }
  //     getUsers()
  // }, [])
  // useEffect(() => {
  //     let timeout = setTimeout(() => closeModal(), 3000)
  //     return () => clearTimeout(timeout)
  // })
  return (
    <div>
      <p> value f count{count}</p>
    </div>
  );
};

export default Example;
