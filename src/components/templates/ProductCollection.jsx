// ProductCollection.jsx
import React from "react";
import ProductCard from "../organism/ProductCard";
import { products } from "../../constants/index";
import arrow from '/icons/productArrow.svg';

const ProductCollection = () => {
  return (
    <section className="md:px-28 px-3.5">
      <h2 className="md:text-[20px] text-[16px] font-Poppins font-medium md:mb-8 mb-4">
        Summer Collection
      </h2>
      <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory hide-scrollbar md:overflow-visible  py-2.5">
        {products.map((product, index) => (
          <div 
            key={index}
            className="flex-shrink-0 w-[calc(62%-10px)] snap-start md:w-auto md:flex-shrink"
          >
            <ProductCard
              image={product.productImage}
              alt={product.productTitle}
              productName={product.productTitle}
              price={product.price}
              quantity={product.quanity}
            />
          </div>
        ))}
        <img 
          src={arrow} 
          alt="" 
          className="pl-12 hidden md:block snap-none" 
        />
      </div>
    </section>
  );
};

export default ProductCollection;