import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Users from './components/Users.jsx'
import Home from './components/Home.jsx'

const button = (buttonText) => <button>{buttonText}</button>

const textButton = (text, buttonText) => (
  <div><p>{text}</p><p>{button(`${buttonText}`)}</p></div>
)

let isACustomer = true

const customer = "Cæsar"

const showCustomer = (customer) => (
  <span>{customer}</span>
)
  
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
        <p>Bem vindo à nossa aula, {showCustomer(`${customer}`)}!</p>
      </div>

      {isACustomer ?
        (textButton("Clique para ver o histórico", "Ver histórico"))
        :(textButton("Clique para se inscrever", "Cadastrar-se"))
      }

    </div>
  )
}

export default App
