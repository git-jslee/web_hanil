import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from "react-slick";

function ProductList({click}) {
    const API_URL = 'http://172.20.21.59:1337'
    const [ products, setProducts ] = useState([]);

    let productFilter = [];
    const slickSettings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    } 

    useEffect(function() {
        axios.get('http://172.20.21.59:1337/products')
            .then((result)=>{
                setProducts(result.data);
            }).catch((error)=>{
                console.error(error)
            })
    }, [])

    const getProduct = (click) => {
        productFilter = []
        if (click === 'ALL') {
            productFilter = products
        } else {
            productFilter = products.filter(product => product.name_category.name === click)
        }
    }
  
    getProduct(click)
    const productMap = productFilter.map((product, index) => {
        return (
            <div key={index} className="slicklist">
                <img src={API_URL + product.image.url} alt={product.name_category.name} />
                <span className="text">{product.title}</span>
            </div>
            )} 
        )
   
    return (
        <>
        {products.length !== 0 ? <Slider {...slickSettings} > {productMap} </Slider>
        : <h1>로딩중</h1>}
        </>
    )
}

export default ProductList
