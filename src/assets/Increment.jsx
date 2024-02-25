import TestCase from "./TestCase";

function increment(n) {
  return n + 1;
}
increment.toString = () => "n => n+1";

export default function StateQueue() {
  return (
    <>
      <p>
        Challenge 2 of 2: Implement the state queue yourself <br />
        In this challenge, you will reimplement a tiny part of React from scratch! It’s
        not as hard as it sounds.
        <br />
        Scroll through the sandbox preview. Notice that it shows four test cases. They
        correspond to the examples you’ve seen earlier on this page. Your task is to
        implement the getFinalState function so that it returns the correct result for
        each of those cases. If you implement it correctly, all four tests should pass.
        <br />
        You will receive two arguments: baseState is the initial state (like 0), and the
        queue is an array which contains a mix of numbers (like 5) and updater functions
        (like n ={">"} n + 1) in the order they were added.
        <br />
        Your task is to return the final state, just like the tables on this page show!
      </p>
      <TestCase baseState={0} queue={[1, 1, 1]} expected={1} />
      <hr />
      <TestCase baseState={0} queue={[increment, increment, increment]} expected={3} />
      <hr />
      <TestCase baseState={0} queue={[5, increment]} expected={6} />
      <hr />
      <TestCase baseState={0} queue={[5, increment, 42]} expected={42} />
    </>
  );
}
