type CabecalhoProps ={
    titulo:string;
    aviso:Function;
}

export default function Header({titulo,aviso}:CabecalhoProps){
    document.title = titulo;


    return (
        
        <header>
            <h3>{titulo}</h3>
            <button onClick={()=> aviso()}>Avisozinho</button>
        </header>
    );
}