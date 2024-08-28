import Header from "./components/header/Header";

export default function App(){

  const pagina:string = "Página Inicial";
  const numPagina:string = "2"; 
  const status = "deployed";
  const aviso = ()=> alert("Confia no pai");

  return (
    <body>
      <Header pagina={pagina} aviso={aviso} numPagina={numPagina} status={status} />
      <h1>Component Apps</h1>
    </body>
  );
}