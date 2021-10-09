import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function DorpdownList({ menuLists, onClick }) {
  //   const [click, setClick] = useState(false);
  //   const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        // onClick={handleClick}
        // className={click ? 'dropdown-menu clicked' : 'dropdown-menu lnb'}
        className="dropdown-menu lnb"
      >
        {menuLists.map((list, index) => {
          return (
            <li key={index}>
              <Link
                className={list.cName}
                to={list.path}
                // onClick={() => setClick(false)}
                onClick={onClick}
              >
                {list.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default DorpdownList;
