export default function Aboutme({ aboutmeRef }) {
  return (
    <div
      ref={aboutmeRef}
      id="about-section"
      className=" px-6 pt-16 sm:pt-32 pb-5 sm:pb-12 lg:px-8 bg-gradient-to-t from-darkish/50 via-stone-900/50 to-transparent "
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-4xl font-semibold font-Poppins tracking-tight text-white/90 sm:text-5xl  ">
          A
          <span className="underline underline-offset-8 decoration-custom-blue">
            bout m
          </span>
          e
        </h2>
      </div>

      <p className="mx-4 sm:mx-24 text-center leading-relaxed sm:leading-9 mt-10 mb-6 text-pretty font-normal text-white/75 text-sm sm:text-xl">
        I’m a marketing graduate, passionate about combining creativity with
        technology. With a background in programming and design, I focus on
        creating impactful, user-centered solutions that blend marketing
        strategies with the latest tech trends. I’m always exploring new
        innovations, striving to deliver digital experiences that drive results.
        Whether it's crafting compelling marketing campaigns or designing
        intuitive digital interfaces, my goal is to help shape the future of
        digital marketing and technology with fresh ideas and a strong vision.
      </p>
    </div>
  );
}
