
const testimonials = [
   {
      id: 1,
      name: "Sarah Johnson",
      role: "Food Critic",
      image: "https://readymadeui.com/team-1.webp",
      rating: 4,
      quote: "ReadymadeUI exceeded all my expectations! The components are beautifully designed, incredibly well-organized, and easy to implement. The user experience is polished yet flexible."
   },
   {
      id: 2,
      name: "Michael Chen",
      role: "Food Blogger",
      image: "https://readymadeui.com/team-2.webp",
      rating: 4,
      quote: "The templates are amazing. I never had to wait for support or clarification. Everything is clear, well-documented, and the delivery is impressively fast."
   },
   {
      id: 3,
      name: "Emily Rodriguez",
      role: "Restaurant Enthusiast",
      image: "https://readymadeui.com/team-3.webp",
      rating: 3,
      quote: "The templates are amazing. Everything is clear, well-documented, and the delivery is fast. The pre-built components are especially useful for fast product launches."
   },
   {
      id: 4,
      name: "David Thompson",
      role: "Local Guide",
      image: "https://readymadeui.com/team-4.webp",
      rating: 5,
      quote: "What a fantastic UI experience! The layouts are modern, responsive, and beautifully presented."
   },
   {
      id: 5,
      name: "Lisa Parker",
      role: "Culinary Expert",
      image: "https://readymadeui.com/team-5.webp",
      rating: 4,
      quote: "Impeccable quality and outstanding design! The attention to detail in both layout structure and component usability is remarkable."
   },
   {
      id: 6,
      name: "James Wilson",
      role: "Gourmet Enthusiast",
      image: "https://readymadeui.com/team-6.webp",
      rating: 4,
      quote: "A complete game-changer for web development! From the landing page to the dashboard, every layout is spot-on. ReadymadeUI’s components are clean, scalable, and production-ready."
   },
   {
      id: 7,
      name: "John Doe",
      role: "Founder of Rubik",
      image: "https://readymadeui.com/team-2.webp",
      rating: 4,
      quote: "Exploring ReadymadeUI is like a journey through modern UI design. Each section tells a visual story, and the support documentation adds an extra layer of confidence."
   },
   {
      id: 8,
      name: "Rachel Kim",
      role: "Food & Travel Writer",
      image: "https://readymadeui.com/team-3.webp",
      rating: 5,
      quote: "A wonderful design experience with a focus on clean, modular code. The layouts showcase practical use cases brilliantly. The design system is easy to work with and unobtrusive."
   },
   {
      id: 9,
      name: "Michael Foster",
      role: "Food & Travel Writer",
      image: "https://readymadeui.com/team-6.webp",
      rating: 4,
      quote: "A complete game-changer for web development! From the landing page to the dashboard, every layout is spot-on. ReadymadeUI’s components are clean, scalable, and production-ready."
   }
]

export default function Testimonial() {

   const StarIcon = ({ filled }) => (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         className={`size-3.5 ${filled ? "fill-purple-600" : "fill-[#b5bdc0] dark:fill-neutral-600"}`}
         viewBox="0 0 24 24"
         aria-hidden="true"
      >
         <path d="m23.363 8.584-7.378-1.127L12.678.413c-.247-.526-1.11-.526-1.357 0L8.015 7.457.637 8.584a.75.75 0 0 0-.423 1.265l5.36 5.494-1.267 7.767a.75.75 0 0 0 1.103.777L12 20.245l6.59 3.643a.75.75 0 0 0 1.103-.777l-1.267-7.767 5.36-5.494a.75.75 0 0 0-.423-1.266z" />
      </svg>
   );

   return (
      <section className="px-4 md:px-8 mt-6">
         <div className="max-w-3xl lg:max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
               <h2 className="text-3xl font-bold text-slate-900 mb-6 md:text-4xl dark:text-slate-50">
                  What our happy clients say
               </h2>
               <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
                  See what our happy clients have to say. They’ve shared how our templates helped them launch quickly, look professional, and grow with ease.
               </p>
            </div>

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
               {testimonials.map((item) => (
                  <figure key={item.id} className="break-inside-avoid p-4 rounded-lg bg-gray-100 relative w-full sm:p-6 dark:bg-neutral-800 mb-4">
                     <figcaption className="flex flex-wrap items-center gap-4">
                        <img
                           src={item.image}
                           alt={item.name}
                           className="w-12 h-12 rounded-full border-2 border-purple-500"
                        />
                        <div>
                           <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">{item.name}</p>
                           <span className="mt-0.5 block text-xs text-slate-500 font-medium">{item.role}</span>
                        </div>
                     </figcaption>

                     <div className="flex gap-2 mt-6" role="img" aria-label={`${item.rating} out of 5 stars`}>
                        {[...Array(5)].map((_, i) => (
                           <StarIcon key={i} filled={i < item.rating} />
                        ))}
                     </div>

                     <blockquote className="mt-4">
                        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                           {item.quote}
                        </p>
                     </blockquote>
                  </figure>
               ))}
            </div>
         </div>
      </section>
   );
}