import React, { useState } from 'react'
import ProductList from './ProductList';
import '../css/mainProduct.css';


function MainProduct() {
    const [click, setClick] = useState('ALL')
    
    const handleClick = (e) => {
        // console.log(e.target)
        setClick(e.target.dataset.name)
    }

    return (
        <>
        <article className="products">
            <div className="inner">
            <h3 className="tit_pd tit"><span>HANIL POWER TECH</span> Products</h3>
                <div className="list_pd">
                    <div className="tab_pd">
                    <ul>
                        <li onClick={handleClick} className={click==="ALL" ? "on":"off"} data-name='ALL' >전체</li>
                        <li onClick={handleClick} className={click==="EngineParts" ? "on":"off"} data-name='EngineParts' >Engine parts</li>
                        <li onClick={handleClick} className={click==="TransmissionParts" ? "on":"off"} data-name='TransmissionParts' >Transmission Parts</li>
                        <li onClick={handleClick} className={click==="EgrCoolerParts" ? "on":"off"} data-name='EgrCoolerParts' >EGR Cooler Parts</li>
                        <li onClick={handleClick} className={click==="CommercialVehicleParts" ? "on":"off"} data-name='CommercialVehicleParts' >상용차 Parts</li>
                        <li onClick={handleClick} className={click==="GravityCastings" ? "on":"off"} data-name='GravityCastings' >중력주조품</li>
                    </ul>
                    </div>
                    <div className="pannel_pd_pc pc">
                        <ul className="slide4">
                            <ProductList click={click} />
                        </ul>
                     </div>
                </div>
            </div>
        </article>
        </>
    )
}

export default MainProduct
