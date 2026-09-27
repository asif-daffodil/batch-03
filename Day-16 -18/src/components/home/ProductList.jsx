import { Link } from "react-router";

const products = [
   {
      id: 1,
      name: "Skin Glow Combo",
      price: "$8.00",
      originalPrice: "$11.00",
      rating: 4,
      reviews: 102,
      image: "https://readymadeui.com/images/sunscreen-img-1.webp",
      alt: "sunscreen",
   },
   {
      id: 2,
      name: "Crystal Glow",
      price: "$9.00",
      originalPrice: "$14.00",
      rating: 4,
      reviews: 100,
      image: "https://readymadeui.com/images/sunscreen-img-2.webp",
      alt: "Crystal Glow",
   },
   {
      id: 3,
      name: "Lancome La Base",
      price: "$7.00",
      originalPrice: "$11.00",
      rating: 3,
      reviews: 90,
      image: "https://readymadeui.com/images/sunscreen-img-3.webp",
      alt: "Lancome La Base",
   },
   {
      id: 4,
      name: "HD Face Primer",
      price: "$12.00",
      originalPrice: "$16.00",
      rating: 5,
      reviews: 102,
      image: "https://readymadeui.com/images/sunscreen-img-4.webp",
      alt: "HD Face Primer",
   },
   {
      id: 5,
      name: "Sunscreen Gel",
      price: "$12.00",
      originalPrice: "$18.00",
      rating: 4,
      reviews: 102,
      image: "https://readymadeui.com/images/sunscreen-img-5.webp",
      alt: "Sunscreen Gel",
   },
   {
      id: 6,
      name: "Watermelon Sunscreen",
      price: "$14.00",
      originalPrice: "$20.00",
      rating: 4,
      reviews: 102,
      image: "https://readymadeui.com/images/sunscreen-img-6.webp",
      alt: "Watermelon Sunscreen",
   },
   {
      id: 7,
      name: "Aloederm Body Cream",
      price: "$14.00",
      originalPrice: "$22.00",
      rating: 3,
      reviews: 200,
      image: "https://readymadeui.com/images/aloederm-cream-img-1.webp",
      alt: "Aloederm Body Cream",
   },
   {
      id: 8,
      name: "Aloederm Face Cream",
      price: "$12.00",
      originalPrice: "$20.00",
      rating: 4,
      reviews: 88,
      image: "https://readymadeui.com/images/aloederm-cream-img-2.webp",
      alt: "Aloederm Face Cream",
   },
];


function StarRating({ rating, max = 5 }) {
   return (
      <div
         className="flex justify-center gap-2"
         role="img"
         aria-label={`Rated ${rating} out of ${max} stars`}
      >
         {Array.from({ length: max }, (_, i) => (
            <svg
               key={i}
               xmlns="http://www.w3.org/2000/svg"
               className={`size-3.5 ${i < rating ? "fill-[#ffc107]" : "fill-[#CED5D8] dark:fill-neutral-600"}`}
               viewBox="0 0 24 24"
               aria-hidden="true"
            >
               <path d="m23.363 8.584-7.378-1.127L12.678.413c-.247-.526-1.11-.526-1.357 0L8.015 7.457.637 8.584a.75.75 0 0 0-.423 1.265l5.36 5.494-1.267 7.767a.75.75 0 0 0 1.103.777L12 20.245l6.59 3.643a.75.75 0 0 0 1.103-.777l-1.267-7.767 5.36-5.494a.75.75 0 0 0-.423-1.266z" data-original="#ffc107" />
            </svg>
         ))}
      </div>
   );
}

function ProductCard({ product }) {
   return (
      <li className="flex flex-col border border-slate-300 shadow-sm rounded-md p-1.5 transition-all relative overflow-hidden dark:border-neutral-700">
         <a href="#" className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
            <div className="w-full bg-slate-50 rounded-sm overflow-hidden">
               <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full aspect-square object-cover object-top"
               />
            </div>

            <div className="py-4 px-2 text-left">
               <Link to="/single-product" className="text-sm sm:text-base font-semibold text-slate-900 line-clamp-2 dark:text-slate-50">
                  {product.name}
               </Link>

               <div className="flex items-center flex-wrap gap-3 mt-2">
                  <StarRating rating={product.rating} />
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                     ({product.reviews})
                  </p>
               </div>

               <div className="mt-4">
                  <p className="text-slate-900 font-semibold text-sm sm:text-base break-words dark:text-slate-50">
                     <span className="mr-1.5">MRP:</span>
                     <strike className="mr-1.5 text-slate-600 dark:text-slate-400">
                        {product.originalPrice}
                     </strike>
                     {product.price}
                  </p>
               </div>
            </div>
         </a>

         <div className="flex flex-col items-center mt-2">
            <button
               type="button"
               className="w-full cursor-pointer text-sm px-3.5 py-2 font-semibold rounded-md bg-blue-600 hover:bg-blue-700 text-white border border-blue-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
               Add to Bag
            </button>
            <button
               type="button"
               className="w-full flex items-center justify-center gap-2 pb-1.5 pt-3 cursor-pointer text-sm text-slate-900 font-medium whitespace-nowrap rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-slate-50"
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 fill-current"
                  viewBox="0 0 66 66"
                  aria-hidden="true"
               >
                  <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000" />
               </svg>
               <span>Add to wishlist</span>
            </button>
         </div>
      </li>
   );
}

export default function ProductList() {
   return (
      <section className="mt-6 px-4 md:px-8" aria-labelledby="products-heading">
         <div className="max-w-7xl mx-auto">
            <div className="border-b border-slate-300 pb-4 mb-8 md:mb-12 dark:border-neutral-700">
               <h2 id="products-heading" className="text-2xl font-bold text-slate-900 dark:text-slate-50">
                  Hot list
               </h2>
               <p className="text-base text-slate-600 mt-2 dark:text-slate-400">
                  Out the most popular and trending products.
               </p>
            </div>

            <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
               {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
               ))}
            </ul>
         </div>
      </section>
   );
}