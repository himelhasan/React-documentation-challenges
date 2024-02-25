import TaskApp from "./assets/TaskApp";

function App() {
  return (
    <>
      <h1>Fix the mutations using non-mutative methods </h1>
      <p>
        In this example, all of the event handlers in App.js use mutation. As a result,
        editing and deleting todos doesn’t work. Rewrite handleAddTodo, handleChangeTodo,
        and handleDeleteTodo to use the non-mutative methods:
      </p>
      <TaskApp />
    </>
  );
}

export default App;
