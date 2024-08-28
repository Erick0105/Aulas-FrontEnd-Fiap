import Header from "./components/header/Header";

export default function App(){

  const pagina:string = "Página Inicial";
  const numPagina:number = 2; 
  const status = "deployed";
  const aviso = ()=> alert("Confia no pai");

  return (
    <body>
      <Header pagina={pagina} aviso={aviso} numPagina={numPagina} status={status}>
        <h1>Component Apps</h1>
        <ul>
          <li>Opção1</li>
          <li>Opção2</li>
          <li>Opção3</li>
          <li>Opção4</li>
          <li>Opção5</li>
        </ul>
      </Header>
    </body>
  );
}