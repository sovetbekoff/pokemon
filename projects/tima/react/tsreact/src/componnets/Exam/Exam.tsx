import { type } from "os";
import React, { useState } from "react";

interface IItem {
  name: string;
  afe: number;
  mail: string;
}

type Fn = (num: number) => string;
const Exam = () => {
  const [item, setItem] = useState<IItem | null>(null);

  const someFunc: Fn = (num) => `id-${num}`;
  return <div>c.d</div>;
};

export default Exam;
