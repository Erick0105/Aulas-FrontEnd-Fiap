import Header from "./components/header/Header";

export default function App(){

  const titulo:string = "Página Inicial";
  const aviso = ()=> alert("Confia no pai");

  return (
    <body>
      <Header titulo={titulo} aviso={aviso}/>
      <h1>Component Apps</h1>
    </body>
  );
}