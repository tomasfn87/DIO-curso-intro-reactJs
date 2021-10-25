import './App.css';

const title = <h1>React</h1>
const element = "This is React - so, react!!!"

function App() {
  return (
    <div className="App">
      <section id="content">
        {title}
        {element}
      </section>
    </div>
  );
}

export default App;
