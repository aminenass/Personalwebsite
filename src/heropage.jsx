


export default function Heropage({scroll,contactRef}) {
  
 
  return ( < >
<div  className="px-2 sm:px-6 lg:px-11">
  <div className="relative isolate px-6 pt-14 lg:px-8 ">
    <div className="max-w-7xl mx-auto py-2 sm:py-12 sm:pt-0">
      <div className="font-jak">

        <div className="flex flex-col-reverse lg:flex-row sm:flex-row items-center justify-between gap-8 relative">
          {/* Left Content */}

          <div className="z-20 sm:text-start text-center flex-1 pb-2 overflow-hidden">
          
            <h1 className="text-white/75 font-Poppins text-5xl font-semibold tracking-tight lg:text-7xl md:text-6xl mb-4 ">
              I'm <span className="text-custom-blue">Mohamed amine </span> Nassim
            </h1>
      
              <p className="text-pretty font-normal text-white/55 sm:text-xl mb-8">
               Bringing creativity and technology together in marketing, design, and programming
              </p>
              <div className="mt-6 flex flex-col sm:flex-row items-center sm:place-content-start place-content-center gap-x-6 gap-y-4">
                    <button onClick={() => scroll(contactRef)} className="w-full sm:w-auto rounded-md bg-custom-blue px-3.5 py-2.5 font-semibold  text-white 
                     hover:bg-blue-600 text-center">
                      Contact me
                    </button>
                    <a href="https://www.linkedin.com/in/med-amine-nassim/" 
                    className="w-full sm:w-auto rounded-md px-3.5 py-2.5 font-semibold text-white border-2 border-transparent 
                    hover:border-white text-center"
                    >
                      
                      Linkedin <span aria-hidden="true">→</span>
                    </a>
               </div>

          
          </div>
          <div 
          className="absolute inset-0 bg-gradient-to-r from-darkish via-transparent to-darkish/90" style={{ zIndex: 2 }}>
          </div>
          
          {/* Right Content */}
          <div className="flex-1 flex justify-center">
            <img
              src="src/assets/photo5.jpeg"
              alt="heropicture"
              className=" z-0 w-full max-w-md rounded-full"
            />
            
          </div>
          
        </div>
        <div className="mt-14 sm:mt-5 xl:mt-0 flex flex-col text-center sm:text-left ">
            <p className="sm:text-sm text-xl text-gray-400 mb-4">
            Follow Me Here on Social Media:
            </p>

          <div className="mt-3 sm:mt-0 flex justify-center sm:justify-start gap-7 ">

              {/* github icon */}
             <span className="sm:[&>svg]:h-5  [&>svg]:h-10 sm:[&>svg]:w-5  [&>svg]:w-10 [&>svg]:transition-transform [&>svg]:duration-200 [&>svg]:ease-in [&>svg]:hover:scale-150">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="gray"
                  viewBox="0 0 496 512">
                  <path
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
              </span>

              {/* linkedin icon */}
              <span className="sm:[&>svg]:h-5  [&>svg]:h-10 sm:[&>svg]:w-5  [&>svg]:w-10 [&>svg]:transition-transform [&>svg]:duration-200 [&>svg]:ease-in [&>svg]:hover:scale-150">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="gray"
                  viewBox="0 0 448 512">
                  <path
                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
              </span>
              {/* Pinterest */}
              <span className="sm:[&>svg]:h-5  [&>svg]:h-10 sm:[&>svg]:w-5  [&>svg]:w-10 [&>svg]:transition-transform [&>svg]:duration-200 [&>svg]:ease-in [&>svg]:hover:scale-150">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="gray"
                  viewBox="0 0 496 512">
                  <path
                    d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3 .8-3.4 5-20.3 6.9-28.1 .6-2.5 .3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" />
                </svg>
              </span>
              {/* X twitter */}
              <span className="sm:[&>svg]:h-5  [&>svg]:h-10 sm:[&>svg]:w-5  [&>svg]:w-10 [&>svg]:transition-transform [&>svg]:duration-200 [&>svg]:ease-in [&>svg]:hover:scale-150 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="gray"
                  viewBox="0 0 512 512">
                  <path
                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </span>
                        
          </div>
          </div>
      </div>
    </div>
  </div>
 
</div>

</>
  )
}
