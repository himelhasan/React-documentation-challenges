/* eslint-disable react/prop-types */
import { getFinalState } from "./processQueue";

// eslint-disable-next-line react/prop-types
// eslint-disable-next-line react/prop-types
export default function TestCase({ baseState, queue, expected }) {
  const actual = getFinalState(baseState, queue);
  console.log(actual);
  return (
    <>
      <p>
        Base state: <b>{baseState}</b>
      </p>

      <p>
        Queue: <b>[{queue.join(", ")}]</b>
      </p>
      <p>
        Expected result: <b>{expected}</b>
      </p>
      <p
        style={{
          color: actual === expected ? "green" : "red",
        }}
      >
        Your result: <b>{actual}</b> ({actual === expected ? "correct" : "wrong"})
      </p>
    </>
  );
}
