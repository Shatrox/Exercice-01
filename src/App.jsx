import Welcome from "./components/welcome/welcome.jsx"
import './App.css'
import Tester from "./components/NumberTester/Tester.jsx"
import MessageDisplayer from "./components/MessageDisplayer/MessageDisplayer.jsx"
import ListProduit from "./components/ListProduit/ListProduit.jsx"
import produitList from "./Data/produ.json"


function App() {
  

  return (
    <>
      <h1>Bienvenue</h1>
      <Welcome Name = "Kevin Marques" Age="31"/>

      <h2>Conditionel</h2>
      <Tester nb = {15}/>
      <Tester nb = {56}/>

      <h2>Message Displayer</h2>
      <MessageDisplayer msg = 'You are awesome!' visible = {true}/>
      <MessageDisplayer msg="" visible = {true}/>

      <h2>List Produit</h2>
      <ListProduit produits={produitList} /> 
 
    </>
  )
}

export default App
