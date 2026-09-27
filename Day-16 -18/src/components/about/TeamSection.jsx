

const teamMembers = [
   {
      name: "John Doe",
      role: "Software Engineer",
      image: "https://readymadeui.com/team-1.webp",
      linkedin: "#",
      x: "#",
   },
   {
      name: "Mark Adair",
      role: "Software Engineer",
      image: "https://readymadeui.com/team-2.webp",
      linkedin: "#",
      x: "#",
   },
   {
      name: "Simon Konecki",
      role: "Web Designer",
      image: "https://readymadeui.com/team-3.webp",
      linkedin: "#",
      x: "#",
   },
   {
      name: "Eleanor",
      role: "Web Designer",
      image: "https://readymadeui.com/team-4.webp",
      linkedin: "#",
      x: "#",
   },
   {
      name: "Maria Rodriguez",
      role: "DevOps Engineer",
      image: "https://readymadeui.com/team-5.webp",
      linkedin: "#",
      x: "#",
   },
   {
      name: "James Wilson",
      role: "Data Scientist",
      image: "https://readymadeui.com/team-6.webp",
      linkedin: "#",
      x: "#",
   },
   {
      name: "Sophia Lee",
      role: "UI/UX Designer",
      image: "https://readymadeui.com/team-1.webp",
      linkedin: "#",
      x: "#",
   },
   {
      name: "Sophia Lee",
      role: "UI/UX Designer",
      image: "https://readymadeui.com/team-2.webp",
      linkedin: "#",
      x: "#",
   }
];

export default function TeamSection() {

   return (
      <section className="px-4 md:px-8 mt-6">
         <div className="max-w-3xl mx-auto text-center mb-24 md:mb-28">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 md:text-4xl dark:text-slate-50">
               Meet our team
            </h2>
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
               Meet our team of professionals to serve you.
            </p>
         </div>

         <ul className="grid gap-x-6 gap-y-24 max-w-sm mx-auto lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:max-w-4xl lg:max-w-5xl">
            {teamMembers.map((member, index) => (
               <li
                  key={index}
                  className="text-center bg-gray-100 relative rounded-lg border border-slate-200 dark:bg-neutral-800 dark:border-neutral-700"
               >
                  <div className="w-32 h-32 rounded-full inline-block border border-slate-200 bg-gray-50 overflow-hidden -mt-16 dark:bg-neutral-700 dark:border-neutral-700">
                     <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                     />
                  </div>

                  <div className="py-4">
                     <h3 className="text-slate-900 text-base font-semibold dark:text-slate-50">
                        {member.name}
                     </h3>
                     <p className="text-slate-600 text-sm mt-1 dark:text-slate-400">
                        {member.role}
                     </p>

                     <ul className="flex justify-center flex-wrap gap-3 mt-6 px-4">
                        <li>
                           <a
                              href={member.linkedin}
                              className="flex items-center bg-slate-200 border border-slate-300 w-8 h-8 p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:bg-neutral-700 dark:border-neutral-600"
                              aria-label="LinkedIn"
                           >
                              <svg xmlns="http://www.w3.org/2000/svg" className="size-full fill-slate-600 dark:fill-slate-50" viewBox="0 0 24 24" aria-hidden="true">
                                 <path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0" />
                              </svg>
                           </a>
                        </li>
                        <li>
                           <a
                              href={member.x}
                              className="flex items-center bg-slate-200 border border-slate-300 w-8 h-8 p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:bg-neutral-700 dark:border-neutral-600"
                              aria-label="X"
                           >
                              <svg xmlns="http://www.w3.org/2000/svg" className="size-full fill-slate-600 dark:fill-slate-50" viewBox="0 0 1226.37 1226.37" aria-hidden="true">
                                 <path d="M727.348 519.284 1174.075 0h-105.86L680.322 450.887 370.513 0H13.185l468.492 681.821L13.185 1226.37h105.866l409.625-476.152 327.181 476.152h357.328L727.322 519.284zM582.35 687.828l-47.468-67.894-377.686-540.24H319.8l304.797 435.991 47.468 67.894 396.2 566.721H905.661L582.35 687.854z" />
                              </svg>
                           </a>
                        </li>
                     </ul>
                  </div>
               </li>
            ))}
         </ul>
      </section>
   );
}