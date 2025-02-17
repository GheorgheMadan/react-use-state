// CardSelector.jsx 
export default function CardSelector(props) {
    return (
        <>
            <section className="container-button">
                <button onClick={props.onToggle}>
                    {props.nome}
                </button>
            </section>
            <section className="paragrafo">
                {props.isOpen && (
                    <>
                        <h2>{props.nome}</h2>
                        <p>{props.descrizione}</p>
                    </>
                )}
            </section>
        </>
    )
}