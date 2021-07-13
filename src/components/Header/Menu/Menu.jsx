import React from 'react'

import Expandable from '../../Expandable/Expandable'
import MenuExpanded from '../MenuExpanded/MenuExpanded'

function Menu() {
    return (
        <div>
            <Expandable name="Menu">
                <MenuExpanded></MenuExpanded>
            </Expandable>
        </div>
    )
}

export default Menu
