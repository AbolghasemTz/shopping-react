import React, { useState } from "react";

import { motion } from "framer-motion";

// data
import { products } from "../data";

// components
import Filters from "../common/Filters"
import Product from "../components/product/Product";

function Products(props) {
  const [filterProducts, setFilterProducts] = useState([]);

  return (
    <div className="grid grid-cols-12 grid-rows-[200px ,minmax(70px,1fr)] min-h-screen mt-9 w-[92%] mx-auto md:gap-x-4">
      {/*filters  */}

      <Filters
        filterProducts={filterProducts}
        setFilterProducts={setFilterProducts}
        products={products}
      />

      {/* products */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-12 md:col-span-12 sm:col-span-6 col-span-12  md:mt-0 mt-5"
      >
        {filterProducts.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </motion.div>
    </div>
  );
}

export default Products;
