import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Demo from '../Components/Demo/Demo';
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct';

const Product = () => {
const {all_product}= useContext(ShopContext);
const {productId} = useParams();
const product = all_product.find((e)=> e.id === Number(productId));

  return (
    <div>
       <ProductDisplay product={product}/>
       <Demo/>
       <RelatedProduct/>
    </div>
  )
}

export default Product
