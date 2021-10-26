import React from 'react'
import { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Users from './components/Users.jsx'
import Home from './components/Home.jsx'
import "./App.css"

const customer = "Cæsar"

const customers1 = [
  { "id":  1, "name": "Liv" },
  { "id":  2, "name": "Alice" },
  { "id":  3, "name": "Ariana" },
  { "id":  4, "name": "Caroline" },
  { "id":  5, "name": "Marge" },
  { "id":  6, "name": "Natasha" }
]

const customers2 = [
  { "id":  7, "name": "Britney" },
  { "id":  8, "name": "Marianne" },
  { "id":  9, "name": "Emma" },
  { "id":  10, "name": "Claire" },
  { "id":  11, "name": "Tracey" },
  { "id":  12, "name": "Samara" }
]

const showCustomer = (customer) => (
  <span id="customer">{customer}</span>
  )
  
const button = (btnText, fn, id) => 
  <button id={id} onClick={fn}>{btnText}</button>

const textAndButton = (text, buttonText, fn, id) => (
  <div>
    <p>
      {text}
    </p>
    <p>
      {button(buttonText, fn, id)}
    </p>
  </div>
)

const renderCustomer = (customer) => {
  return (
    <li key={customer.id}>{customer.name}</li>
  )
}

const renderCustomersTable = (arr1, arr2) => (
  <table className="customers-table">
    <thead>
      <tr>
        <td>Lista I:</td>
        <td>Lista II:</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <ol type="i">
            {arr1.map(i => renderCustomer(i))}
          </ol>
        </td>
        <td>
          <ol type="i">
            {arr2.map(i => renderCustomer(i))}
          </ol>
        </td>
      </tr>
    </tbody>
  </table>
)

/* const handleChange = (e) => {
  const { value } = e.target
  console.log(value)
} */

// Main App
const App = () => {
  
  const [viewCostumers, setViewCostumers] = useState(<p></p>)
  const [hideCostumers, setHideCostumers] = useState(<p></p>)

  const renderButtonsTable = () => (
    <div id="customers-table">
      {textAndButton(
        "Clique no botão para ver a lista de alunas",
        "Ver alunas",
        () => {
          setViewCostumers(
            renderCustomersTable(customers1, customers2)
          )
          setHideCostumers(textAndButton(
            "Clique no botão para esconder a lista de alunas",
            "Esconder alunas",
            () => {
              setViewCostumers(<p></p>)
              setHideCostumers(<p></p>)
            },
            "esconder-alunas"
          ))
        },
        "ver-alunas"
      )}
      {viewCostumers}
      {hideCostumers}
    </div>
  )

  return (
    <div>
      <Router>
        <div>
          <nav>
            <span>
              <Link to="/home">Home</Link>
            </span>
            &nbsp;|&nbsp;
            <span>
              <Link to="/users">Users</Link>
            </span>
          </nav>
          <div>
            <h2>In nomine Patris et Filii et Spiritus Sancti - Amen</h2>
            <h3>Bem vindo à nossa aula, {showCustomer(`${customer}`)}!</h3>
            {renderButtonsTable()}
            {/* <input onChange={handleChange} /> */}
          </div>
        </div>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/users" component={Users} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
