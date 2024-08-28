export default function Header({titulo,aviso}:{titulo:string,aviso:Function}){
    document.title = titulo;


    return (
        
        <header>
            <h3>{titulo}</h3>
            <button onClick={()=> aviso()}>Avisozinho</button>
        </header>
    );
}