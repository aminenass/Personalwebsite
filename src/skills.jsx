export default function Skills({skillsRef}){


    return <>

    <div ref={skillsRef} id="skills-section" className=" px-6 pb-16 sm:pb-36 pt-5 sm:pt-12 lg:px-8 bg-gradient-to-t from-darkish via-stone-950 to-darkish ">      
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-semibold font-Poppins tracking-tight text-white/90 sm:text-5xl underline underline-offset-8 decoration-custom-blue ">Skills</h2>
        </div>
    
<div className="flex sm:flex-row flex-col sm:justify-around flex-wrap items-center ">
    <div href="#" className="bg-stone-800 rounded-md max-w-sm flex flex-col sm:flex-row items-center flex-wrap mt-16 ">
         <div className="my-7 mx-4 ">
                <div className="flex items-center justify-center rounded-full bg-white w-12 h-12 mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                    </svg>


                </div>
                    <h5 className="text-2xl font-bold tracking-tight text-white my-4">
                    Design: Crafting Aesthetics with Purpose

                    </h5>
                    <p className="font-normal text-gray-400">
                        I create visually appealing and functional designs that enhance user experience and communicate ideas effectively.
                    </p>
         </div>
    </div>

    <div href="#" className="bg-stone-800 rounded-md max-w-sm flex flex-col sm:flex-row items-center flex-wrap mt-16 ">
         <div className="my-7 mx-4 ">
                <div className="flex items-center justify-center rounded-full bg-white w-12 h-12 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                  </svg>



                </div>
                    <h5 className="text-2xl font-bold tracking-tight text-white my-4">
                    Marketing: Data-Driven Creativity
                    </h5>
                    <p className="font-normal text-gray-400">
                    I craft data-driven strategies and creative campaigns that engage audiences and drive results.
                    </p>
         </div>
    </div>

    <div href="#" className="bg-stone-800 rounded-md max-w-sm flex flex-col sm:flex-row items-center flex-wrap mt-16 ">
         <div className="my-7 mx-4 ">
                <div className="flex items-center justify-center rounded-full bg-white w-12 h-12 mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                     </svg>

                </div>
                    <h5 className="text-2xl font-bold tracking-tight text-white my-4">
                          Programming: Building with Passion

                    </h5>
                    <p className="font-normal text-gray-400">
                    I enjoy coding and building digital solutions, turning ideas into functional and creative projects.








                    </p>
         </div>
    </div>
</div>


 </div>
    </>
}
