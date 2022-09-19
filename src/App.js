import React from "react";
import MiComponente from "./MiComponente";
import ButtonAppBar from "./components/AppBar/AppBar";
import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


const nombre = "Mi Planta Naranja Lima "
const precio = "1500"

const App = () =>{
  return (
  <>
  <ButtonAppBar/>
  <ItemListContainer  name={nombre} price={precio} id="1" />
 <MiComponente stock={10} initial={1} />
  </>
  )
}


export default App

