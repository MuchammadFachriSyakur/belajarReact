const Button = (props) => {
  const { children = "...", variant = "orange" } = props;
  return (
    <button
      className={`bg-${props.variant}-500 hover:bg-${variant}-700 text-white font-bold py-2 px-4 rounded`}
    >
      {children}
    </button>
  );
};

function App() {
  return (
    <>
      <div className="app p-3 w-100 min-h-screen m-auto bg-slate-300 flex justify-center items-center flex-wrap gap-4">
        <Button variant="red">Delete Acount</Button>
        <Button variant="slate">View Acount</Button>
        <Button variant="lime">login</Button>
      </div>
    </>
  );
}

export default App;
