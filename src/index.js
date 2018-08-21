import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { getTodosInformation } from "./map";

function App() {
  const arrayUm = [
    { id: 1, name: "Fazer compras no mercado", completed: false },
    { id: 2, name: "Estudar um monte de coisa", completed: true },
    { id: 3, name: "Pegar onibus", completed: false },
    { id: 4, name: "Estudar e dormir", completed: true }
  ];
  const todosCompletados = getTodosInformation(arrayUm, "completed");
  const todosNomes = getTodosInformation(arrayUm, "name");
  const todosIds = getTodosInformation(arrayUm, "id");
  return (
    <div className="App">
      <h1>Map</h1>
      <h2>Exemplo do map com highorder</h2>
      <hr />
      <h2>Todos Completados</h2>
      <p>{todosCompletados}</p>
      <h2>Todos Nomes</h2>
      <p>{todosNomes}</p>
      <h2>Todos Ids</h2>
      <p>{todosIds}</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
