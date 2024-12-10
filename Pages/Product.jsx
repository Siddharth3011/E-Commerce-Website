import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import ProductDisplay from "../Components/ProductDIsplay/ProductDisplay";
import DiscriptionBox from "../Components/DiscriptionBox/DiscriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

const Product = () =>{
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams(); 

  console.log("all_product:", all_product);
  console.log("productId from useParams:", productId);

  const product = all_product?.find((e) => e.Id === Number(productId, 10));

  if (!product) {
    return <div>Product not found or still loading...</div>;
  }

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DiscriptionBox />
      <RelatedProducts />
    </div>
  );
}

export default Product;
