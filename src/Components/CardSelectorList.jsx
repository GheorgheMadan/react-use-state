// CardSelectorList.jsx
import { useState } from 'react'
import languages from '../../Data/languages'
import CardSelector from './CardSelector'

// CardSelectorList.jsx 
export default function CardSelectorList() {
    const [activeCard, setActiveCard] = useState(null)


    function renderCards() {
        return languages.map(language => {
            return (<CardSelector
                key={language.id}
                nome={language.title}
                descrizione={language.description}
                isOpen={activeCard === language.id}
                onToggle={() => setActiveCard(language.id)}
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