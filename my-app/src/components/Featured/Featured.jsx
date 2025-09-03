import Heading from "../Heading";
import ProductsSlider from "../productsslider/ProductsSlider";



export default function Featured() {
  return (
    <div className="my-10">
      <Heading title='Featured Products' subtitle='Do not miss the current offers until the end of March.'/>
      <ProductsSlider />
    </div>
  )
}
