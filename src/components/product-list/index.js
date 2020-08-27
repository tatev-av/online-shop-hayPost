import React, { useMemo } from 'react';
import './product-list.css';
import {useStore} from '../../store/store';
import ProductItem from '../product-item/'

const ProductList = () => {
    const {products} = useStore()[0]

    return useMemo(()=>{
        return (
            <div className ='product-list'> 
            {
                products && products.map(product=>(
                    <ProductItem key  = {product.id} product = {product}/>
                ))
            }
            </div>
        )
    }, [products])

}

export default ProductList;