import { useState, useRef, useEffect } from "react";

const CATEGORIES = [
   { id: "t-shirts", label: "T-Shirts", value: "T-Shirts" },
   { id: "jackets", label: "Jackets", value: "jackets" },
   { id: "sweaters", label: "Sweaters", value: "sweaters" },
   { id: "sneakers", label: "Sneakers", value: "sneakers" },
   { id: "Crossbody-Bags", label: "Crossbody Bags", value: "Crossbody-Bags" },
   { id: "Hair-Tie", label: "Hair Tie", value: "Hair-Tie" },
   { id: "Luxury-Timepieces", label: "Luxury Timepieces", value: "Luxury-Timepieces" },
   { id: "sunglasses", label: "Sunglasses", value: "sunglasses" },
];

const BRANDS = [
   { id: "brand-zara", label: "Zara", value: "Zara" },
   { id: "brand-hm", label: "H&M", value: "H&M" },
   { id: "brand-uniqlo", label: "Uniqlo", value: "Uniqlo" },
   { id: "brand-levis", label: "Levi's", value: "Levi's" },
   { id: "brand-nike", label: "Nike", value: "Nike" },
   { id: "brand-adidas", label: "Adidas", value: "Adidas" },
   { id: "brand-puma", label: "Puma", value: "Puma" },
   { id: "brand-tommy", label: "Tommy Hilfiger", value: "Tommy Hilfiger" },
];

const SIZES = ["XS", "S", "M", "L", "XL", "XXL", "XXXL", "4XL"];

const COLORS = [
   { label: "Blue", className: "bg-blue-700" },
   { label: "Purple", className: "bg-purple-700" },
   { label: "Pink", className: "bg-pink-700" },
   { label: "Orange", className: "bg-orange-700" },
   { label: "Red", className: "bg-red-700" },
   { label: "Yellow", className: "bg-yellow-700" },
   { label: "Black", className: "bg-black" },
   { label: "Gray", className: "bg-gray-700" },
];

const INITIAL_RECENT = ["Jackets", "Tommy Hilfiger", "Orange", "Zara", "XL"];

const ArrowIcon = () => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-3 h-3 fill-slate-600 dark:fill-slate-400"
      viewBox="0 0 492.004 492.004"
      aria-hidden="true"
   >
      <path d="M382.678 226.804 163.73 7.86C158.666 2.792 151.906 0 144.698 0s-13.968 2.792-19.032 7.86l-16.124 16.12c-10.492 10.504-10.492 27.576 0 38.064L293.398 245.9l-184.06 184.06c-5.064 5.068-7.86 11.824-7.86 19.028 0 7.212 2.796 13.968 7.86 19.04l16.124 16.116c5.068 5.068 11.824 7.86 19.032 7.86s13.968-2.792 19.032-7.86L382.678 265c5.076-5.084 7.864-11.872 7.848-19.088.016-7.244-2.772-14.028-7.848-19.108z" />
   </svg>
);

const SearchIcon = () => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 192.904 192.904"
      className="size-4 fill-slate-400 ml-auto"
      aria-hidden="true"
   >
      <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z" />
   </svg>
);

const CloseIcon = () => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-2.5 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
      viewBox="0 0 320.591 320.591"
      aria-hidden="true"
   >
      <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
      <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
   </svg>
);

const CheckmarkIcon = () => (
   <svg
      className="size-3 text-white"
      viewBox="0 0 12 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
   >
      <path d="M1 5l3 3 7-7" />
   </svg>
);

// Collapsible section component
function CollapsibleSection({ title, id, defaultOpen = false, children }) {
   const [isOpen, setIsOpen] = useState(defaultOpen);
   const contentRef = useRef(null);
   const [height, setHeight] = useState(defaultOpen ? "auto" : "0px");

   useEffect(() => {
      if (isOpen) {
         const scrollHeight = contentRef.current.scrollHeight;
         setHeight(`${scrollHeight}px`);
      } else {
         setHeight("0px");
      }
   }, [isOpen]);

   return (
      <div>
         <button
            type="button"
            className="header flex items-center gap-2 justify-between cursor-pointer w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            aria-expanded={isOpen}
            aria-controls={`${id}-panel`}
            id={`${id}-button`}
            onClick={() => setIsOpen((prev) => !prev)}
         >
            <h3 className="text-slate-900 text-base font-semibold dark:text-slate-50">
               {title}
            </h3>
            <span
               className={`transition-all duration-300 ${isOpen ? "-rotate-90" : "rotate-90"
                  }`}
            >
               <ArrowIcon />
            </span>
         </button>

         <div
            id={`${id}-panel`}
            ref={contentRef}
            role="region"
            aria-labelledby={`${id}-button`}
            className="overflow-hidden transition-all duration-300 px-1 pb-1"
            style={{ height }}
            inert={!isOpen}
         >
            {children}
         </div>
      </div>
   );
}

// Custom checkbox item
function CheckboxItem({ item, checked, onChange }) {
   return (
      <li>
         <label
            htmlFor={item.id}
            className="inline-flex items-center gap-2.5 group cursor-pointer"
         >
            <input
               type="checkbox"
               className="sr-only"
               id={item.id}
               name={item.id.startsWith("brand") ? "brand" : "category"}
               value={item.value}
               checked={checked}
               onChange={() => onChange(item.value)}
            />
            <span
               className={`flex h-4 w-4 shrink-0 items-center justify-center rounded outline-1 outline-slate-300 dark:outline-neutral-600 transition-colors ${checked
                  ? "bg-blue-600 outline-blue-600"
                  : "bg-white dark:bg-neutral-700"
                  } group-focus-within:outline-2 group-focus-within:outline-blue-600`}
               aria-hidden="true"
            >
               <span style={{ opacity: checked ? 1 : 0 }}>
                  <CheckmarkIcon />
               </span>
            </span>
            <span className="text-sm text-slate-900 dark:text-slate-50">
               {item.label}
            </span>
         </label>
      </li>
   );
}

// Price range slider
function PriceRange({ minVal, maxVal, onMinChange, onMaxChange }) {
   const minPercent = (minVal / 1000) * 100;
   const maxPercent = (maxVal / 1000) * 100;

   return (
      <fieldset>
         <legend
            id="price-heading"
            className="text-slate-900 text-sm font-semibold dark:text-slate-50"
         >
            Price
         </legend>

         <div className="relative mt-6">
            <div className="h-1.5 bg-gray-300 relative dark:bg-neutral-700">
               <div
                  id="activeTrack"
                  className="absolute h-1.5 bg-blue-600 rounded-full"
                  style={{
                     left: `${minPercent}%`,
                     width: `${maxPercent - minPercent}%`,
                  }}
               />
            </div>

            <label htmlFor="minRange" className="sr-only">
               Minimum price
            </label>
            <input
               type="range"
               id="minRange"
               min="0"
               max="1000"
               value={minVal}
               aria-describedby="price-range-values"
               className="absolute top-0 w-full h-1.5 bg-transparent appearance-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
               onChange={(e) => {
                  const val = Math.min(Number(e.target.value), maxVal - 1);
                  onMinChange(val);
               }}
            />

            <label htmlFor="maxRange" className="sr-only">
               Maximum price
            </label>
            <input
               type="range"
               id="maxRange"
               min="0"
               max="1000"
               value={maxVal}
               aria-describedby="price-range-values"
               className="absolute top-0 w-full h-1.5 bg-transparent appearance-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
               onChange={(e) => {
                  const val = Math.max(Number(e.target.value), minVal + 1);
                  onMaxChange(val);
               }}
            />

            <div
               id="price-range-values"
               className="flex justify-between text-slate-600 font-medium text-sm mt-4 dark:text-slate-400"
               aria-live="polite"
            >
               <span id="minPrice">${minVal}</span>
               <span id="maxPrice">${maxVal}</span>
            </div>
         </div>
      </fieldset>
   );
}

// Main ProductFilter component
export default function Shop () {
   const [minPrice, setMinPrice] = useState(0);
   const [maxPrice, setMaxPrice] = useState(750);
   const [selectedCategories, setSelectedCategories] = useState([]);
   const [selectedBrands, setSelectedBrands] = useState([]);
   const [selectedSizes, setSelectedSizes] = useState([]);
   const [selectedColors, setSelectedColors] = useState([]);
   const [recentSearches, setRecentSearches] = useState(INITIAL_RECENT);

   const toggleCheckbox = (setter, value) => {
      setter((prev) =>
         prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
      );
   };

   const toggleSize = (size) => {
      setSelectedSizes((prev) =>
         prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
      );
   };

   const toggleColor = (color) => {
      setSelectedColors((prev) =>
         prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
      );
   };

   const clearAll = () => {
      setMinPrice(0);
      setMaxPrice(750);
      setSelectedCategories([]);
      setSelectedBrands([]);
      setSelectedSizes([]);
      setSelectedColors([]);
   };

   const removeRecentSearch = (tag) => {
      setRecentSearches((prev) => prev.filter((t) => t !== tag));
   };

   return (
      <aside className="flex" aria-labelledby="filter-heading">
         {/* Sidebar */}
         <div className="bg-gray-50 w-full max-w-[280px] border-r border-slate-100 shrink-0 px-4 md:px-6 py-6 min-h-screen dark:bg-neutral-800 dark:border-neutral-700">
            {/* Header */}
            <div className="flex items-center border-b border-slate-300 pb-2 mb-6 dark:border-neutral-700">
               <h2
                  id="filter-heading"
                  className="text-slate-900 text-lg font-semibold dark:text-slate-50"
               >
                  Filter
               </h2>
               <button
                  type="button"
                  className="text-sm text-red-500 font-semibold ml-auto cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                  aria-label="Clear all filters"
                  onClick={clearAll}
               >
                  Clear all
               </button>
            </div>

            <div className="filter-options space-y-6 relative">
               {/* Price */}
               <PriceRange
                  minVal={minPrice}
                  maxVal={maxPrice}
                  onMinChange={setMinPrice}
                  onMaxChange={setMaxPrice}
               />

               {/* Category */}
               <CollapsibleSection title="Category" id="category" defaultOpen={true}>
                  <div className="mt-4">
                     <form className="mt-2" role="search" aria-label="Search category">
                        <div className="flex items-center gap-2.5 px-3 py-2 rounded-md bg-white dark:bg-neutral-700 outline-1 -outline-offset-1 outline-slate-300 dark:outline-neutral-600 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-blue-600">
                           <label htmlFor="search-category" className="sr-only">
                              Search category
                           </label>
                           <input
                              type="search"
                              id="search-category"
                              name="search-category"
                              placeholder="Search category"
                              className="text-sm text-slate-900 dark:text-slate-50 w-full outline-none bg-transparent"
                           />
                           <SearchIcon />
                        </div>
                     </form>

                     <ul className="mt-6 space-y-4" aria-label="Category options">
                        {CATEGORIES.map((item) => (
                           <CheckboxItem
                              key={item.id}
                              item={item}
                              checked={selectedCategories.includes(item.value)}
                              onChange={(val) =>
                                 toggleCheckbox(setSelectedCategories, val)
                              }
                           />
                        ))}
                     </ul>
                  </div>
               </CollapsibleSection>

               {/* Brand */}
               <CollapsibleSection title="Brand" id="brand" defaultOpen={false}>
                  <div className="mt-4">
                     <form className="mt-2" role="search" aria-label="Search brand">
                        <div className="flex items-center gap-2.5 px-3 py-2 rounded-md bg-white dark:bg-neutral-700 outline-1 -outline-offset-1 outline-slate-300 dark:outline-neutral-600 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-blue-600">
                           <label htmlFor="search-brand" className="sr-only">
                              Search brand
                           </label>
                           <input
                              type="search"
                              id="search-brand"
                              name="search-brand"
                              placeholder="Search brand"
                              className="text-sm text-slate-900 dark:text-slate-50 w-full outline-none bg-transparent"
                           />
                           <SearchIcon />
                        </div>
                     </form>

                     <ul className="mt-6 space-y-4" aria-label="Brand options">
                        {BRANDS.map((item) => (
                           <CheckboxItem
                              key={item.id}
                              item={item}
                              checked={selectedBrands.includes(item.value)}
                              onChange={(val) => toggleCheckbox(setSelectedBrands, val)}
                           />
                        ))}
                     </ul>
                  </div>
               </CollapsibleSection>

               {/* Size */}
               <CollapsibleSection title="Size" id="size" defaultOpen={false}>
                  <div className="flex flex-wrap gap-3 mt-4">
                     {SIZES.map((size) => (
                        <button
                           key={size}
                           type="button"
                           aria-pressed={selectedSizes.includes(size)}
                           onClick={() => toggleSize(size)}
                           className={`cursor-pointer border text-slate-900 rounded-md text-[13px] font-medium py-1 px-1 min-w-14 transition-colors dark:text-slate-50 hover:border-blue-600 dark:hover:border-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 
                     ${selectedSizes.includes(size)
                                 ? 'border-blue-600 bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:border-blue-500'
                                 : 'border-slate-300 dark:border-neutral-700'}`}
                        >
                           {size}
                        </button>
                     ))}
                  </div>
               </CollapsibleSection>

               {/* Color */}
               <CollapsibleSection title="Color" id="color" defaultOpen={false}>
                  <div className="flex flex-wrap gap-3 mt-4">
                     {COLORS.map((color) => (
                        <button
                           key={color.label}
                           type="button"
                           aria-label={color.label}
                           aria-pressed={selectedColors.includes(color.label)}
                           onClick={() => toggleColor(color.label)}
                           className={`cursor-pointer rounded-full w-8 h-8 hover:scale-[1.05] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                              ${color.className} ${selectedColors.includes(color.label)
                                 ? "ring-2 ring-blue-600 ring-offset-2 dark:ring-blue-500"
                                 : ""
                              }`}
                        />
                     ))}
                  </div>
               </CollapsibleSection>
            </div>
         </div>

         {/* Main content area */}
         <div className="w-full py-6 px-8">
            {/* Recent Searches */}
            <div>
               <h3 className="text-slate-900 text-lg font-semibold mb-4 dark:text-slate-50">
                  Recent Searches
               </h3>
               <div className="flex flex-wrap gap-3">
                  {recentSearches.map((tag) => (
                     <button
                        key={tag}
                        type="button"
                        aria-label={`Remove ${tag} from recent searches`}
                        onClick={() => removeRecentSearch(tag)}
                        className="flex items-center gap-2 border border-slate-300 rounded-md text-[13px] text-slate-600 font-medium py-1 px-2 dark:border-neutral-700 dark:text-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                     >
                        {tag}
                        <CloseIcon />
                     </button>
                  ))}
               </div>
            </div>

            {/* Product Grid (placeholder cards) */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
               {Array.from({ length: 6 }).map((_, i) => (
                  <div
                     key={i}
                     className="bg-gray-100 w-full h-48 rounded-md dark:bg-neutral-700"
                  />
               ))}
            </div>
         </div>
      </aside>
   );
}