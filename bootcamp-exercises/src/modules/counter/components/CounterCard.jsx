import Title from "./Title";
import CounterComp from "./CounterComp";
import Button from "./Button";
import AlertMessage from "./AlertMessage";

import { useState, useEffect } from "react";

export default function CounterCard() {
  const [count, setCount] = useState(0);
  const [payMessage, setPayMessage] = useState(undefined);

  useEffect(() => {
    if (count === 10) {
      setPayMessage(
        (prev) => (prev = "If you want to count more than ten counts pay !!!")
      );
    }
  }, [count]);

  function handleReset() {
    setCount(0);
    return;
  }

  function handleAdd() {
    if (count === 10) {
      setCount(10);
      return;
    }
    setCount((prev) => prev + 1);
  }

  function handleSubtract() {
    if (count === 0) {
      setCount(0);
      return;
    }
    setCount((prev) => prev - 1);
  }
  return (
    <article className="container-counter">
      <Title variants="title-container">
        Fancy
        <br /> Counter
      </Title>
      <CounterComp variants="counter-span">{count}</CounterComp>
      <Button
        variants={`reset-btn ${count === 0 ? "disable-btn" : ""}`}
        action={handleReset}
      >
        <i className="fa-solid fa-rotate-left"></i>
      </Button>
      <div className="btn-container">
        <Button
          variants={`btn-counter ${count === 0 ? "disable-btn" : ""}`}
          action={handleSubtract}
        >
          -
        </Button>
        <Button
          variants={`btn-counter ${count === 10 ? "disable-btn" : ""}`}
          action={handleAdd}
        >
          +
        </Button>
      </div>
      {count === 10 ? (
        <AlertMessage>{payMessage}</AlertMessage>
      ) : (
        null || count === 0
      )}
    </article>
  );
}
