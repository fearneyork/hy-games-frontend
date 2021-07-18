import React from "react";

import Expandable from "../../Expandable/Expandable";
import MenuExpanded from "../MenuExpanded/MenuExpanded";
import "./Menu.css";

function Menu() {
    return (
        <Expandable location="menu">
            <MenuExpanded></MenuExpanded>
        </Expandable>
    );
}

export default Menu;
