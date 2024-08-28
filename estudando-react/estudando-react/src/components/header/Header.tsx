export default function Header(props:{titulo:string,aviso:Function}){
    document.title = props.titulo;


    return (
        
        <header>
            <h3>{props.titulo}</h3>
            <button onClick={()=> props.aviso()}>Avisozinho</button>
        </header>
    );
}