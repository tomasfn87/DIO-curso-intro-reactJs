import { Component } from "react";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      clock: 1000,
      copo: "água"
    }
  }

  componentDidMount() {
    window.setTimeout(() => {
      this.setState({
        copo: "suco"
      })
    }, 1500)
  }

  alterarCopo() {
    this.setState({
      copo: "leite"
    })
  }

  render() {
    const { clock, copo } = this.state

    return (
      <div className="App">
        <section id="content">
          <h1>{clock}</h1>
          <button onClick={() => this.alterarCopo()}>{copo}</button>
        </section>
      </div>
    )
  }  
}

export default App;
