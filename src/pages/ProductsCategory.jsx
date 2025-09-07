import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import ProductCard from "../components/ItemCard/ProductCard";

export default function ProductsCategory() {

const {data} = useSelector(state => state.DataSlice)
const param =useParams();
const [selectedProducts , setSelectedProducts] = useState([]);


useEffect(() => {
    let products = data.filter((product) => product.category === param.category);
    setSelectedProducts(products);
},[data, param.category])

  return (
    <div className="container mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-2">
      {
        selectedProducts.map((product,index) => {
            return (
              <ProductCard key={index} product={product} />
            )
        })
      }
    </div>
  )
}
