import './App.css'
import Button from './Button'
import ComponenteA from './ComponenteA'
import ComponenteB from './ComponenteB'

function soma(a, b) {
  alert(a + b)
}

function App() {
  return (
    <div className="App">
      <section id="content">
        <ComponenteA>
          <ComponenteB>
            <Button onClick={() => soma(10, 20)} name="10 + 20" />
          </ComponenteB>
        </ComponenteA>
      </section>
    </div>
  );
}

export default App;
