// CardSelector.jsx 
export default function CardSelector(props) {
    return (
        <>
            <div>
                <section className="container-button">
                    <button onClick={props.onToggle}>
                        {props.nome}
                    </button>

                </section>
            </div>
            <div>
                {props.isOpen && (
                    <>
                        <section className="paragrafo">
                            <h2>{props.nome}</h2>
                            <p>{props.descrizione}</p>
                        </section>
                    </>
                )}
            </div >
        </>
    )
}