import { useState } from 'react'

function Expandable({ children, name }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleIsOpen = () => {
        setIsOpen((currState) => !currState);
    };

    return (
        <div>
            <button onClick={toggleIsOpen}>{isOpen ? `Close ${name}`: `Open ${name}`}</button>
            { isOpen && children }
        </div>
    )
}

export default Expandable
