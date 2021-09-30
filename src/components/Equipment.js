import React, { useState } from 'react'
import '../css/equipment.css'
import EquipmentList from './EquipmentList'

function Equipment() {
    const [click, setClick] = useState('ALL')

    return (
    <article className="equipment">
        <div className="inner">
            <h3 className="tit_eq tit"><span>HANIL POWER TECH</span> Equipment</h3>
            <div className="list_eq">
                <div className="tab_eq">
                <ul>
                    <li className="on">전체</li>
                    <li>생산설비</li>
                    <li>측정설비</li>
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
    )
}

export default Equipment
