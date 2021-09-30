import React, { useState, useEffect } from 'react';
import axios from 'axios';


function ProductList2({click}) {
    const API_URL = 'http://172.20.21.59:1337'
    const [ products, setProducts ] = useState([]);

    let productFilter = [];

    useEffect(function() {
        axios.get('http://172.20.21.59:1337/products')
            .then((result)=>{
                setProducts(result.data);
            }).catch((error)=>{
                console.error(error)
            })
    }, [])

    const getProduct = (click => {
        productFilter = []
        if (click === 'ALL') {
            productFilter = products
        } else {
            productFilter = products.filter(product => product.name_category.name === click)
        }
    })(click);
  
    // getProduct(click)
    const productMap = productFilter.map((product) => {
        return (
            <li key={product.id}>
                <div className="photo"><img src={API_URL + product.image.url} alt={product.name_category.name} /></div>
                <div className="text">
                    <p className="name">{product.title}</p>
                    <p className="use">포터 / 스타렉스</p>
                </div>
            </li>
            )} 
        )
    
   
    return (
        <>
        {products.length !== 0 ? productMap : <h1>로딩중</h1>}
        </>
    )
}

export default ProductList2
