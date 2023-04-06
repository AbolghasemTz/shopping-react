import React, { useEffect, useState } from "react";

function Filters({ setFilterProducts, products }) {
  const [filterBrand, setFilterBrand] = useState("");
  const [sortProducts, setSortProducts] = useState("");

  useEffect(() => {
    let result = [...products];
    result = filterBrandProducts(result);
    result = sortData(result);
    setFilterProducts(result);
  }, [products, filterBrand, sortProducts]);

  const handleBrandFilter = (e) => {
    setFilterBrand(e.target.value);
  };
  const handleSortProducts = (e) => {
    setSortProducts(e.target.value);
  };

  const filterBrandProducts = (array) => {
    if (!filterBrand) return array;
    return array.filter((product) => product.category === filterBrand);
  };

  const sortData = (array) => {
    let sortedProducts = [...array];
    return sortedProducts.sort((a, b) => {
      if (sortProducts === "lower") {
        return a.price > b.price ? -1 : 1;
      } else if (sortProducts === "highest") {
        return a.price > b.price ? 1 : -1;
      }
    });
  };
  return (
    <div className="col-span-12 mx-2">
      <div className="bg-gray-300 md:py-8 py-4 rounded-md flex justify-center">
        <div>
          <select
            onChange={handleBrandFilter}
            className="md:ml-6 md:px-4 md:py-2 ml-1 px-1 py-1 rounded-md text-gray-100 bg-slate-600"
          >
            <option value="">فیلتر برند ها</option>

            <option className="text-gray-50 " value="جردن">
              جردن
            </option>

            <option className="text-gray-50" value="نایک">
              نایک
            </option>
          </select>
        </div>

        <div className="mx-4">
          <select
            onChange={handleSortProducts}
            className="md:ml-6 md:px-4 md:py-2 ml-1 px-1 py-1 rounded-md text-gray-100 bg-slate-600"
          >
            <option value="">فیلتر قیمت</option>
            <option className="text-gray-50 " value="lower">
              گرانترین
            </option>
            <option className="text-gray-50" value="highest">
              ارزانترین
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filters;
