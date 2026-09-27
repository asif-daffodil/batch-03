
const posts = [
   {
      id: 1,
      title: "Creative Design Trends",
      description: "Stay ahead of the curve with the latest creative design trends shaping the digital world.",
      image: "https://readymadeui.com/images/ai-img1.webp",
      alt: "Design ai image",
      link: "#"
   },
   {
      id: 2,
      title: "The Rise of Boutique Hotels",
      description: "Explore how boutique hotels are redefining luxury and guest experience in the travel industry.",
      image: "https://readymadeui.com/hotel-img.webp",
      alt: "Hotel image",
      link: "#"
   },
   {
      id: 3,
      title: "Boost Team Productivity",
      description: "Discover powerful techniques to help your team collaborate better and get more done.",
      image: "https://readymadeui.com/team-image.webp",
      alt: "Team image",
      link: "#"
   },
   {
      id: 4,
      title: "Ecommerce Trends to Watch",
      description: "Stay ahead with insights into what’s driving the future of online shopping and digital retail.",
      image: "https://readymadeui.com/images/headphone-img8.webp",
      alt: "Headphone image",
      link: "#"
   },
   {
      id: 5,
      title: "Time Management Hacks",
      description: "Master your schedule with proven strategies that save hours each week and reduce stress.",
      image: "https://readymadeui.com/hacks-watch.webp",
      alt: "Watch image",
      link: "#"
   },
   {
      id: 6,
      title: "The Power of Creativity",
      description: "Uncover how creative thinking fuels innovation and helps brands stay competitive in any market.",
      image: "https://readymadeui.com/Imagination.webp",
      alt: "Imagination image",
      link: "#"
   }
];

export default function Blog() {

   return (
      <section className="mt-6 px-4 md:px-8">
         <div className="max-w-md mx-auto sm:max-w-4xl lg:max-w-6xl">
            <div className="mb-12 max-w-3xl">
               <h2 className="text-3xl font-bold mb-6 text-slate-900 md:text-4xl dark:text-slate-50">
                  Latest Blog Posts
               </h2>
               <p className="text-base text-slate-600 leading-relaxed dark:text-slate-400">
                  Explore our latest articles, insights, and practical tips to help you stay updated and build better products.
               </p>
            </div>

            {/* Grid Section */}
            <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
               {posts.map((post) => (
                  <article
                     key={post.id}
                     className="bg-gray-100 border border-slate-200 rounded-lg overflow-hidden dark:bg-neutral-800 dark:border-neutral-700"
                  >
                     <div className="bg-gray-50 aspect-[23/16]">
                        <img
                           src={post.image}
                           alt={post.alt}
                           className="w-full h-full object-cover object-top"
                           loading="lazy"
                        />
                     </div>
                     <a href={post.link} className="p-6 block">
                        <h3 className="text-lg font-semibold text-slate-900 mb-3 dark:text-slate-50">
                           {post.title}
                        </h3>
                        <p className="text-slate-600 text-base leading-relaxed line-clamp-3 dark:text-slate-400">
                           {post.description}
                        </p>
                     </a>
                  </article>
               ))}
            </div>
         </div>
      </section>
   );
}