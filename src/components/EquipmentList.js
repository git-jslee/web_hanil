import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from "react-slick";

function EquipmentList({click}) {
    const API_URL = 'http://172.20.21.59:1337'
    const [ equipments, setEquipments ] = useState([]);
    let equipmentFilter = [];
    const slickSettings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    } 

    useEffect(function() {
        axios.get('http://172.20.21.59:1337/equips')
            .then((result)=>{
                setEquipments(result.data);
            }).catch((error)=>{
                console.error(error)
            })
    }, [])

    const getEquipment = (click) => {
        equipmentFilter = []
        if (click === 'ALL') {
            equipmentFilter = equipments
        } else {
            equipmentFilter = equipments.filter(equipment => equipment.equipment_category.name === click)
        }
    }
    
    getEquipment(click)
    console.log("##EQ_Filter###", equipmentFilter)
    const equipmentMap = equipmentFilter.map((equipment, index) => {
        return (
            <div key={index} className="slicklist img">
                <img src={API_URL + equipment.image.formats.small.url} alt={equipment.equipment_category.name} />
            </div>
            )} 
        )
                     
    return (
        <>
        {equipments.length !== 0 ? <Slider {...slickSettings} > {equipmentMap} </Slider>
        : <h1>로딩중</h1>} 
        </>
    )
}

export default EquipmentList