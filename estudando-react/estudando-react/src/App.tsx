import Header from "./components/header/Header";

export default function App(){

  const titulo:string = "Página Inicial";

  return (
    <body>
      <Header titulo={titulo}/>
      <h1>Component Apps</h1>
    </body>
  );
}