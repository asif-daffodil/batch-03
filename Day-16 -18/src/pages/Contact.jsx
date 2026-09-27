
export default function Contact() {

   return (
      <section className="flex flex-1 flex-col lg:flex-row">
         <div className="overflow-hidden max-w-6xl max-lg:max-w-2xl mx-auto px-4 md:px-8 mt-6">
            <div className="grid lg:grid-cols-2 items-center gap-8">
               <div className="py-6 px-6 bg-gray-100 rounded-2xl sm:py-8 sm:px-10 dark:bg-neutral-800">
                  <h2 className="text-3xl text-slate-900 font-bold dark:text-slate-50">Get In <span
                     className="text-blue-700">Touch</span></h2>
                  <p className="text-base text-slate-600 mt-4 leading-relaxed dark:text-slate-400">Have a specific inquiry Our
                     experienced team is ready to engage with you.</p>

                  <form className="mt-8 space-y-4">
                     <div>
                        <label htmlFor="name"
                           className="mb-2 text-slate-900 dark:text-slate-50 font-medium text-sm inline-block">Name</label>
                        <input type="text" id="name" name="name" placeholder="John doe"
                           className="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
                     </div>
                     <div>
                        <label htmlFor="email"
                           className="mb-2 text-slate-900 dark:text-slate-50 font-medium text-sm inline-block">Email</label>
                        <input type="email" id="email" name="email" placeholder="john@readymadeui.com"
                           className="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
                     </div>
                     <div>
                        <label htmlFor="phone"
                           className="mb-2 text-slate-900 dark:text-slate-50 font-medium text-sm inline-block">Phone
                           number</label>
                        <input type="number" id="phone" name="phone" placeholder="+11800-259-854"
                           className="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
                     </div>
                     <div>
                        <label htmlFor="message"
                           className="mb-2 text-slate-900 dark:text-slate-50 font-medium text-sm inline-block">Message</label>
                        <textarea placeholder="Write message" rows="6" type="text" id="message" name="message"
                           className="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700"></textarea>
                     </div>

                     <button type="submit"
                        className="w-full mt-2 py-2.5 px-4 text-sm rounded-md font-semibold cursor-pointer text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">Send
                        message</button>
                  </form>
               </div>

               <div className="z-10 relative h-full max-lg:min-h-100 rounded-2xl overflow-hidden">
                  <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                     className="left-0 top-0 h-full w-full"></iframe>
               </div>
            </div>
         </div>
      </section>
   );
}