import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import DropdownList from './DropdownList'

function DropdownForm({ name, linkto, menuLists }) {
    const [dropdown, setDropdown] = useState(false);
        
    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    }

    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(false)
        }
    }

    // console.log('#2', menuLists)

    return (
        <div className='dep1' 
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            >
            <Link to={linkto} >
                {name}
            </Link>
            {dropdown && <DropdownList menuLists={menuLists} />}
        </div>
    )
}


export default DropdownForm
