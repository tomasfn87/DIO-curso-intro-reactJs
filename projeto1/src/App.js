import './App.css';

const sum = (a, b) => a + b

const primeiroJSX = () => {
  return (
    <div className="test">
      <h1>Creating a function in "App.js"...</h1>
      <h2>It's working!</h2>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <section id="content">
        {primeiroJSX()}
        Vamos somar 2 + 2...
        <br />
        2 + 2 = {sum(2, 2)}
      </section>
    </div>
  );
}

export default App;
