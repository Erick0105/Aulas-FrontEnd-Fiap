export default function Header(props:{titulo:string}){
    document.title = props.titulo;


    return (
        
        <header>
            <h3>{props.titulo}</h3>
        </header>
    );
}