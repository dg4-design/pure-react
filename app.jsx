const App = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>button</button>
    </div>
  );
};

const target = document.getElementById("app");
const root = ReactDOM.createRoot(target);
root.render(<App />);
