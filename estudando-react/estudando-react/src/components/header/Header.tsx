type CabecalhoProps ={
    pagina:string;
    aviso:Function;
    numPagina: number | string;
    status: "loading" | "deployed"
}

type CabecalhoProps2 ={
    numPagina: number | string;
    status: "loading" | "deployed"
}

export default function Header({pagina,aviso,numPagina,status}:CabecalhoProps & CabecalhoProps2){
    document.title = pagina;

    if(typeof numPagina === "number"){
        document.title = status + " --- " + numPagina;
    }else{
        document.title = status + " --- ??";
        numPagina = "Página nr: ??"

    }


    return (
        
        <header>
            <h1>{pagina + "\n" + numPagina}</h1>
            <button onClick={()=> aviso()}>Avisozinho</button>
        </header>
    );
}