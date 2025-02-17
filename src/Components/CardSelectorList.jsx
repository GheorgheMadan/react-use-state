// CardSelectorList.jsx
import { useState } from 'react'
import languages from '../../Data/languages'
import CardSelector from './CardSelector'

// CardSelectorList.jsx 
export default function CardSelectorList() {
    const [activeCard, setActiveCard] = useState(null)


    function renderCards() {
        return languages.map(language => {
            return (
                <CardSelector
                    key={language.id} // La key è usata qui, ed è corretta
                    nome={language.title}
                    descrizione={language.description}
                    isOpen={activeCard === language.id}
                    onToggle={() => setActiveCard(activeCard === language.id ? null : language.id)} // Toggle per mostrare/nascondere
                />
            )
        })
    }
    return (
        <>
            {renderCards()}
        </>
    )
}