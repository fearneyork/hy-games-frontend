import { useState } from "react";
import "./Expandable.css";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import FilterListIcon from '@material-ui/icons/FilterList';

function Expandable({ children, location }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleIsOpen = () => {
        setIsOpen((currState) => !currState);
    };

    const locationIcon = location === 'menu' ? <MenuIcon fontSize="large"/> : <FilterListIcon fontSize="large"/>;

    return (
        <>
            <button className={`expandable-button ${location !== 'menu' ? 'expandable-button--filter': 'expandable-button--menu'}`} onClick={toggleIsOpen}>
                {isOpen ? <CloseIcon fontSize="large"/> : locationIcon}
            </button>
            {isOpen && children}
        </>
    );
}

export default Expandable;
