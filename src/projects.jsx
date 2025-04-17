import image from "./assets/MOCKimac.webp";
import img2 from "./assets/fcbarcamacbook.webp";
import img3 from "./assets/phonewebsite.webp";
import React from 'react';
import Slider from 'react-slick';


export default function Project({ projectsRef }) {
  const projects = [
    {
      id: "1",
      title: "Django : for discovering movies and TV shows",
      url: "https://github.com/aminenass/medmovies",
      keywords: ["#Django", "#PostgreSQ", "#Auth"],
      srcimage: image,
      description:
        "I create visually appealing and functional App using Django that provides a clean and interactive interface for discovering movies and TV shows.",
    },
    {
      id: "2",
      title: "Flask : web app for exploring FC Barcelona",
      url: "https://aminepy.pythonanywhere.com/",
      keywords: ["#Flask", "#MongoDb", "#Selenium"],
      srcimage: img2,
      description:
        "This is a Flask web application that provides information about FC Barcelona, including match results, standings in La Liga and the UEFA Champions League, and details about the players and coaching staff.",
    },
    {
      id: "3",
      title: "My Personal Website : Skills, Projects & Contact",
      url: "https://medaminenassim.netlify.app/",
      keywords: ["#Reactjs", "#Vite", "#Tailwind"],
      srcimage: img3,
      description:
        "    This is a personal website built using React.js and Vite. The website is responsive and designed to showcase my skills, projects, and contact information. ",
    },

  ];

  var settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    centerMode: true,
    centerPadding: '40px', // Add padding between slides
    initialSlide: 1,


    responsive: [
      {
        breakpoint: 1280, // Add iPad-specific breakpoint
        settings: {
          slidesToShow: 2.2, // Show partial next slide for better iPad experience
          centerMode: true,
          centerPadding: '30px',
          arrows: false,
          
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1.7,
          centerPadding: '30px',
          arrows: false,
        }
      },
      {
        breakpoint: 768, // Add iPad-specific breakpoint
        settings: {
          slidesToShow: 1.5, // Show partial next slide for better iPad experience
          centerMode: true,
          centerPadding: '60px',
          arrows: false,
          
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: '20px',
          centerMode: false,
          arrows: false, // 🔹 disables the left/right navigation arrows

        }
      }
    ]
}
  
  return (

    <div
      ref={projectsRef}
      id="skills-section"
      className="px-6 pb-16 sm:pb-36 pt-5 sm:pt-12 lg:px-8 bg-gradient-to-t from-darkish/50 via-stone-950/50 to-darkish/50"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-4xl font-semibold font-Poppins tracking-tight text-white/90 sm:text-5xl underline underline-offset-8 decoration-custom-blue ">
          Projects
        </h2>
      </div>

    
        <Slider {...settings }>
        {projects.map((item) => (
          <div className="relative bg-stone-800 rounded-md max-w-sm overflow-hidden shadow-lg  mt-16" >
            {/* Clickable Image Container */}
            <a
              href = {item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group relative cursor-pointer"
            >
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100  z-10">
                {/* Click Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 "
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              </div>

              {/* Project Image */}
              <img
                    src={item.srcimage}
                    srcSet={`
                      ${item.srcSmall} 600w,
                      ${item.srcMedium} 1024w,
                      ${item.srcLarge} 1600w
                    `}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    alt="Project preview"
                    className="w-full h-64 object-cover"
            />
            </a>

            {/* Rest of the card content remains the same */}
            <div className="relative z-20 px-6 py-4">
              <h5 className="text-2xl font-semibold text-white mb-2">
                {item.title}
              </h5>
              <p className="text-gray-400 text-sm line-clamp-3">
                {item.description}{" "}
              </p>
            </div>

            {/* Tags */}
            <div className="relative z-20 px-6 pt-2 pb-4">
              {item.keywords.map((keyword) => (
                <span className="inline-block bg-gray-700 text-white rounded-full px-3 hover:bg-gray-500 py-1 text-sm font-medium mr-2 mb-2">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        ))}      
</Slider>
    </div>
  );
}
