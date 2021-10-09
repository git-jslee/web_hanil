import React, { useState } from 'react';
import '../css/equipment.css';
import EquipmentList from './EquipmentList';

function Equipment() {
  const [click, setClick] = useState('ALL');

  const eqLists = [
    { id: 'ALL', name: 'ALL' },
    { id: 'ProductionLine', name: '생산설비' },
    { id: 'Measuring Equipment', name: '측정설비' },
  ];

  return (
    <article className="equipment">
      <div className="inner">
        <h3 className="tit_eq tit">
          <span>HANIL POWER TECH</span> Equipment
        </h3>
        <div className="list_eq">
          <div className="tab_eq">
            <ul>
              {eqLists.map((list) => (
                <li key={list.id} onClick={() => setClick(list.id)}>
                  {list.name}
                </li>
              ))}
              {/* <li className="on" onClick={onClick}>
                전체
              </li>
              <li onClick={onClick1}>생산설비</li>
              <li onClick={onClick2}>측정설비</li> */}
            </ul>
          </div>
          <div className="pannel_eq_pc pc">
            <div className="slide4">
              <EquipmentList click={click} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Equipment;
