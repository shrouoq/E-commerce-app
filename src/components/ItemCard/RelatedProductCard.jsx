import { Link } from "react-router-dom";

export default function RelatedProductCard({ item }) {
  return (
    <div className=" w-full p-3">
      <Link to={`/productDetails/${item.id}`}>
        <div className="pic h-[180px] relative">
          <img
            src={item.image}
            alt="productPic"
            className="w-full h-full p-3"
          />
          {item.discount && (
            <span className="absolute left-0 top-0 inline-block px-3 py-1 rounded-[10px] bg-primary text-white capitalize text-xs font-semibold">
              on sale
            </span>
          )}
        </div>

        <div className="text mt-4">
          <div className="price">{item.discount && <span>{}</span>}</div>

          <p className="text-ms font-semibold text-[#35AFA0] mb-2">
            {item.title}
          </p>
          <p className="text-black text-ms font-semibold">{item.description}</p>
        </div>
      </Link>
    </div>
  );
}
