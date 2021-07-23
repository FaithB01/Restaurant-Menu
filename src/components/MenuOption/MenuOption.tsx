import React from 'react'


const MenuOption = ({ name, onSelect }) => (
    <div className={`menuItem`}>
        <label>
            <input type="checkbox" onClick={onSelect ? onSelect : null} />
            {name}
        </label>
    </div>
)



export default MenuOption
