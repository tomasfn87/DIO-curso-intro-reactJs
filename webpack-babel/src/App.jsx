import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Users from './components/Users.jsx'
import Home from './components/Home.jsx'

const botao1 = <button>Histórico dos clientes</button>
const botao2 = <button>Botão 2</button>
let hasCustomer = true

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/users" component={Users} />
        </Switch>
      </Router>
      <div>
        <h3>Digital Innovation One</h3>
        <p>Bem vindo à nossa aula.</p>
      </div>
      {hasCustomer && (
        <div>
          Clique no botão abaixo para visualizar o histórico dos clientes
          <br />{botao1}
        </div>
      )}
    </div>
  )
}

export default App
